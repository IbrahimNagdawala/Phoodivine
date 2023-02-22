import { foodItem } from "./food-item.js";

function displayItems() {
  let burger = document.getElementById("burger");

  const burgerData = foodItem.filter((item) => item.category == "burger");

  burgerData.map((item) => {
    let itemCard = document.createElement("div");
    itemCard.setAttribute("id", "itemCard");
    itemCard.setAttribute("class", "box " + item.type);
    let cardTop = document.createElement("div");
    cardTop.setAttribute("id", "cardTop");
    let cart = document.createElement("i");
    cart.setAttribute("class", "cartBottom fa fa-shopping-cart addCart addToCart");
    cart.setAttribute("id", item.id);
    // let wishlist = document.createElement("i");
    // wishlist.setAttribute("class", "ratingRight fa fa-heart rating addWishlist");
    // wishlist.setAttribute("id", item.id);
    cardTop.appendChild(cart);
    // cardTop.appendChild(wishlist);

    let img = document.createElement("img");
    img.src = item.img;

    let itemName = document.createElement("h3");
    itemName.setAttribute("id", "itemName");
    itemName.innerText = item.name;

    let itemPrice = document.createElement("p");
    itemPrice.setAttribute("class", "rate");
    itemPrice.setAttribute("id", "itemPrice");
    itemPrice.innerText = "Rs. " + item.price;
    let orderNow = document.createElement("button");
    orderNow.setAttribute("class", "btn1 showDetail");
    orderNow.innerText = "Order Now";

    itemCard.appendChild(cardTop);
    itemCard.appendChild(img);
    itemCard.appendChild(itemName);
    itemCard.appendChild(itemPrice);
    itemCard.appendChild(orderNow);

    burger.appendChild(itemCard);
  });
}
displayItems();

const cartBtn = document.querySelector(".cart-btn");

cartBtn.addEventListener("click",()=>{
  cartBtn.classList.add("clicked");
})
const closeBtn = document.querySelector('.closeBtn');
closeBtn.addEventListener('click', ()=>{
  let card = document.querySelector('.movie-card')
  card.classList.add('close');
})


