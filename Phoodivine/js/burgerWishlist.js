import { foodItem } from "./food-item.js";

const burgerData = foodItem.filter((item) => item.category == "burger");
let wishlist = document.querySelectorAll('.addWishlist');
for (let i = 0; i < wishlist.length; i++) {
    wishlist[i].addEventListener("click", () => {
      wishlistNumbers(burgerData[i]);
      wishlist[i].classList.add("toggle-wishlist");
    });
}
function wishlistNumbers(burgerData) {
  let productNumbers = localStorage.getItem("WishlistNumbers");

     productNumbers = parseInt(productNumbers);
    localStorage.setItem("wishlistNumbers", 1);  
  setWishlistItems(burgerData);
}
function setWishlistItems(burgerData) {
  let wishlistItems = localStorage.getItem("wishlistInCart");

  wishlistItems = JSON.parse(wishlistItems);
  if (wishlistItems != null) {
    if (wishlistItems[burgerData.name] == undefined) {
      wishlistItems = {
        ...wishlistItems,
        [burgerData.name]: burgerData,
      };
    }
    cartItems[burgerData.name].quantity += 1;

  } else {
    burgerData.quantity = 1;
    wishlistItems = {
      [burgerData.name]: burgerData,
    };
  }  
  localStorage.setItem("wishlistInCart", JSON.stringify(wishlistItems));
}
function displayWishlist() {
  let wishlistItems = localStorage.getItem("wishlistInCart");
  wishlistItems = JSON.parse(wishlistItems);
  let productContainer = document.querySelector(".productsWishlist");
  if (wishlistItems && productContainer) {
    productContainer.innerHTML = ``;
    Object.values(wishlistItems).map((item) => {
      productContainer.innerHTML += `
      <tr>
      <td>
        <img src="${item.img}" alt="" />
      </td>
      <td>${item.name}</td>
      <td>
        <button class="addCart btn1">Add Cart</button>
      </td>
    </tr>
        `;
    });
    
  } else {
    productContainer.innerHTML = `<div class="noItemInWishlist"><p>Your Wishlist is Empty <br> <small>Create your first Wishlist request</small></p></div>`
  }
}
displayWishlist();




let carts = document.querySelectorAll(".addCart");
for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
let wishlistItems = localStorage.getItem("wishlistInCart");
wishlistItems=JSON.parse(wishlistItems)

    console.log('runnig');
    cartNumbers(wishlistItems[i]);
    totalCost(wishlistItems[i]);
  });
}
function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");
  if (productNumbers) {
    document.querySelector("#cart-plus span").textContent = productNumbers;
  }
}
function cartNumbers(burgerData) {
  let productNumbers = localStorage.getItem("cartNumbers");

  productNumbers = parseInt(productNumbers);
  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector("#cart-plus span").textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector("#cart-plus span").textContent = 1;
  }
  setItems(burgerData);
}
function setItems(burgerData) {
  let cartItems = localStorage.getItem("productsInCart");

  cartItems = JSON.parse(cartItems);
  if (cartItems != null) {
    if (cartItems[burgerData.name] == undefined) {
      cartItems = {
        ...cartItems,
        [burgerData.name]: burgerData,
      };
    }
    cartItems[burgerData.name].quantity += 1;
  } else {
    burgerData.quantity = 1;
    cartItems = {
      [burgerData.name]: burgerData,
    };
  }
  localStorage.setItem("productsInCart", JSON.stringify(cartItems));  
}

function totalCost(burgerData) {
  let cartCost = localStorage.getItem("totalCost");
  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + burgerData.price);
  } else {
    localStorage.setItem("totalCost", burgerData.price);
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
displayCart();
onLoadCartNumbers();