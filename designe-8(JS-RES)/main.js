/*create shoes cards*/
for (i = 1; i <= 8; i++) {
  let randomStar = Math.floor(Math.random() * 10) - 6;
  let starType = "";
  if (randomStar <= 0) {
    starType = "fa-star-half-stroke";
  } else {
    starType = "fa-star";
  }
  let price = Math.floor(Math.random() * 100 + 100) + 0.99;
  let shoesProduct = ` <div class="shoesCard">
    <div class="hover">
      <a href=""><i class="fa-solid fa-heart"></i></a>
      <a href=""><i class="fa-solid fa-share"></i></a>
    </div>
    <div class="no-hover">
      <img src="img/shoes${i}.png" />
      <h2>nike</h2>
      <p>Lorem ipsum dolor sit amet, consectetur stinctio nemo</p>
      <span class="price">$${price}</span>
      <div class="likes">
      
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid ${starType}"></i>
        
      </div>
      <a href="">add to cart</a>
    </div>
  </div>`;
  let creat = document.getElementById("cards");
  creat.innerHTML += shoesProduct;

  console.log(`creat card number ${i}`);
}
/*shoes preview*/
function changePhoto(photoNumber = 1) {
  let element = document.getElementById("showImg");
  element.innerHTML = `<img src="img/red_shoes${photoNumber}.png" alt="" />`;
  console.log(`photo has changed to photo number${photoNumber}`);
}
/*list phone open */

let listDrop = document.querySelector("i.this")
let ul = document.querySelector("ul.drop-list")
let li= document.querySelectorAll("ul.drop-list li")
function changeClass() {
  
  if (listDrop.className== ["this fa-solid fa-xmark"]
    ) {
    
    listDrop.className = ["this fa-solid fa-bars"]
    ul.className=["drop-list closed"]
    li.className= [" closed"]

    
    console.log("listDrop has changed to fa-bars")
  }
  else {
    listDrop.className = ["this fa-solid fa-xmark"]
    ul.className=["drop-list open"]
    
    console.log("listDrop has changed to fa-xmark")
  }

}
