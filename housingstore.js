shoppingCard = document.getElementsByClassName("nav-Card-Shop")[0];
console.log(shoppingCard);
list = document.querySelector(".list");
console.log(list);

// open close shopping card

function openShoppingCard() {
  if (shoppingCard.style.display == "none") {
    shoppingCard.style.display = "block";
  }
}
function closeShoppingCard() {
  if (shoppingCard.style.display != "none") {
    shoppingCard.style.display = "none";
  }
}

// data products database
