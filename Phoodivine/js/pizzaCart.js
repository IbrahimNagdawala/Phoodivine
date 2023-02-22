import { foodItem } from "./food-item.js";

const pizzaData = foodItem.filter((item) => item.category == "pizza");

let carts = document.querySelectorAll(".addCart");
for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    cartNumbers(pizzaData[i]);
    totalCost(pizzaData[i]);
    carts[i].classList.add("toggle-cart");
  });
}
function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");
  if (productNumbers) {
    document.querySelector("#cart-plus span").textContent = productNumbers;
  }
}
function cartNumbers(pizzaData) {
  let productNumbers = localStorage.getItem("cartNumbers");

  productNumbers = parseInt(productNumbers);
  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector("#cart-plus span").textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector("#cart-plus span").textContent = 1;
  }
  setItems(pizzaData);
}
function setItems(pizzaData) {
  let cartItems = localStorage.getItem("productsInCart");

  cartItems = JSON.parse(cartItems);
  if (cartItems != null) {
    if (cartItems[pizzaData.name] == undefined) {
      cartItems = {
        ...cartItems,
        [pizzaData.name]: pizzaData,
      };
    }
    cartItems[pizzaData.name].quantity += 1;
  } else {
    pizzaData.quantity = 1;
    cartItems = {
      [pizzaData.name]: pizzaData,
    };
  }
  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(pizzaData) {
  let cartCost = localStorage.getItem("totalCost");
  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + pizzaData.price);
  } else {
    localStorage.setItem("totalCost", pizzaData.price);
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