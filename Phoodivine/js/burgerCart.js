import { foodItem } from "./food-item.js";

const burgerData = foodItem.filter((item) => item.category == "burger");

let carts = document.querySelectorAll(".addCart");
for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    cartNumbers(burgerData[i]);
    totalCost(burgerData[i]);
    // carts[i].classList.add("toggle-cart");
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
  let cartCost = localStorage.getItem("totalCost");
  let totalPrice = document.querySelector(".total-price");

  let productContainer = document.getElementById("table-body");
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
    cartCost = parseInt(cartCost);
    totalPrice.innerHTML += `
        <table>
        <tr>
          <td>Subtotal</td>
          <td>Rs. ${cartCost}</td>
        </tr>
        <tr>
          <td>Delivery Charge</td>
          <td>Rs. 10</td>
        </tr>
        <tr>
          <td>Total</td>
          <td>Rs. ${cartCost + 10}</td>
        </tr>

        <td><button class="btn1 width130">Proceed to Checkout</button></td>
      </table>
        `;
  } else {
      let div = document.createElement('div');
      let p = document.createElement('p');
      p.innerText=`There is no Item in Cart!! <a href="/home.html">Go to Home</a> and add items in cart and enjoy!`
      div.appendChild(p);   
      productContainer.appendChild(div); 
    // productContainer.innerHTML = `<div class="noItemInCart"><p> There is no Item in Cart!! <a href="/home.html">Go to Home</a> and add items in cart and enjoy!</p></div>`
  }
}
onLoadCartNumbers();
displayCart();


// showDetail.addEventListener('click', ()=> {
//   console.log('Clicked');
  
// })




const showDetail = document.querySelectorAll('.showDetail');
for (let i = 0; i < showDetail.length; i++) {
  showDetail[i].addEventListener("click", () => {
    console.log('clicked');
        //  showDetailsOfCart(burgerData[i]);
  });
}


// function showDetailsOfCart(burgerData){
//   let displayDetail = document.querySelector('.containerMiddle');
//   displayDetail.innerHTML='';
//   Object.values(burgerData).map((item) =>{
//     console.log(item.name);
    
//     displayDetail.innerHTML= `<div class="movie-card">
//     <p class="recommendation-text">Our Divines <img class="closeBtn" src="/image/close.png" alt=""> </p>
//     <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    
//     <div class="card-content">
//       <img
//         class="movie-poster"
//         src="/image/burgerAalooTikki.jpg"
//         alt=""
//       />
//       <div class="movie-title">Aaloo Tikki Burger</div>
//       <div class="item-price">Rs. 50</div>
//       <div class="rating">
//         <i class="fas fa-star active"></i>
//         <i class="fas fa-star active"></i>
//         <i class="fas fa-star active"></i>
//         <i class="fas fa-star active"></i>
//         <i class="fas fa-star "></i>
//       </div>
//       <button class="cart-btn addCart">
//         <span class="icon-container">
//           <i class="fas fa-shopping-cart icon-c"></i>
//         </span>
//         <span class="primary-text">add item</span>
//         <span class="secondary-text">Whoo!! Added</span>
//       </button>
//       <span class="about-text"
//         >Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos explicabo deserunt totam, dolore, ab quam autem consequatur quis, beatae veniam perferendis dolorum quos quas sit amet facilis culpa molestiae architecto expedita. Debitis cum, temporibus sequi ipsam, ut eligendi deleniti odit deserunt impedit eveniet incidunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti tenetur deserunt sint nobis eius tempora reiciendis molestiae officia quae. Exercitationem molestias quod quo alias officiis non praesentium quaerat quos quia!
//       </span>
//     </div>
//   </div> `
//   });
// }
