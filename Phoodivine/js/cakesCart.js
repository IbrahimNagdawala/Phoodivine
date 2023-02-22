import { foodItem } from "./food-item.js";

const cakesData = foodItem.filter((item) => item.category == "cakes-pastry");
let carts = document.querySelectorAll(".addCart");
for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    //   console.log('clicked');
    cartNumbers(cakesData[i]);
    totalCost(cakesData[i]);
    carts[i].classList.add("toggle-cart");
  });
}
function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");
  if (productNumbers) {
    document.querySelector("#cart-plus span").textContent = productNumbers;
  }
}
function cartNumbers(cakesData) {
  let productNumbers = localStorage.getItem("cartNumbers");

  productNumbers = parseInt(productNumbers);
  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector("#cart-plus span").textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector("#cart-plus span").textContent = 1;
  }
  setItems(cakesData);
}
function setItems(cakesData) {
  let cartItems = localStorage.getItem("productsInCart");

  cartItems = JSON.parse(cartItems);
  if (cartItems != null) {
    if (cartItems[cakesData.name] == undefined) {
      cartItems = {
        ...cartItems,
        [cakesData.name]: cakesData,
      };
    }
    cartItems[cakesData.name].quantity += 1;
  } else {
    cakesData.quantity = 1;
    cartItems = {
      [cakesData.name]: cakesData,
    };
  }
  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(cakesData) {
  let cartCost = localStorage.getItem("totalCost");
  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + cakesData.price);
  } else {
    localStorage.setItem("totalCost", cakesData.price);
  }
}

function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let productContainer = document.querySelector(".products");
  if (cartItems && productContainer) {
    productContainer.innerHTML = ``;
    Object.values(cartItems).map((item) => {
      productContainer.innerHTML += `
        <tr>
        <td>
          <img src=${item.img} alt="" />
        </td>
        <td>${item.name}</td>
        <td>
          <button class="decrease-item">-</button>
          <span>${item.quantity}</span>
          <button class="increase-item">+</button>
        </td>
        <td>Rs. ${item.quantity * item.price}</td>
      </tr>
        `;
    });
    
  } else {
    productContainer.innerHTML = `<div class="noItemInCart"><p> There is no Item in Cart!! <a href="/home.html">Go to Home</a> and add items in cart and enjoy!</p></div>`
  }
}
onLoadCartNumbers();
displayCart();