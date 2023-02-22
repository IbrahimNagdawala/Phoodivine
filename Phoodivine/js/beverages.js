import { foodItem } from "./food-item.js";
function displayItems() {
  let beverages = document.getElementById("beverages");

  const beveragesData = foodItem.filter((item) => item.category == "beverages");
  console.log(beveragesData);
  beveragesData.map((item) => {
    let itemCard = document.createElement("div");
    itemCard.setAttribute("id", "itemCard");
    itemCard.setAttribute("class", "box " + item.type);
    let cardTop = document.createElement("div");
    cardTop.setAttribute("id", "cardTop");
    let cart = document.createElement("i");
    cart.setAttribute("class", "cartBottom fa fa-shopping-cart addCart addToCart");
    cart.setAttribute("id", item.id);
    // let wishlist = document.createElement("i");
    // wishlist.setAttribute("class", "ratingRight fa fa-heart rating");
    // wishlist.setAttribute("id", "wishlist");
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

    let orderNow = document.createElement("a");
    orderNow.setAttribute("href", "#");
    orderNow.setAttribute("class", "btn1");
    orderNow.setAttribute("id", "orderNow");
    orderNow.innerText = "Order Now";

    itemCard.appendChild(cardTop);
    itemCard.appendChild(img);
    itemCard.appendChild(itemName);
    itemCard.appendChild(itemPrice);
    itemCard.appendChild(orderNow);

    beverages.appendChild(itemCard);
  });
}
displayItems();
