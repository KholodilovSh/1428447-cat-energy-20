var orders = document.querySelectorAll(".product-card__order");
var buttons = document.querySelectorAll(".pad-products__button");
var newProducts = document.querySelector(".products__button");
var newProductsPopUp = document.querySelector(".modal-order");
var newProductsClose = newProductsPopUp.querySelector(".modal-order__close");

if (newProductsPopUp.classList.contains("modal-order--nojs")) {
  newProductsPopUp.classList.remove("modal-order--nojs");
  newProductsPopUp.classList.add("modal-order--hidden");
  newProductsPopUp.classList.remove("visually-hidden");
}

for (var i = 0; i < orders.length; i++) {
  orders[i].addEventListener("click", function (evt) {
    evt.preventDefault();

    if (newProductsPopUp.classList.contains("modal-order--hidden")) {
      newProductsPopUp.classList.remove("modal-order--hidden");
      newProductsPopUp.classList.add("modal-order--show");
    }
  })
};

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function (evt) {
    evt.preventDefault();

    if (newProductsPopUp.classList.contains("modal-order--hidden")) {
      newProductsPopUp.classList.remove("modal-order--hidden");
      newProductsPopUp.classList.add("modal-order--show");
    }
  })
};

newProducts.addEventListener("click", function (evt) {
  evt.preventDefault();

  if (newProductsPopUp.classList.contains("modal-order--hidden")) {
    newProductsPopUp.classList.remove("modal-order--hidden");
    newProductsPopUp.classList.add("modal-order--show");
  }
});

newProductsClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  newProductsPopUp.classList.remove("modal-order--show");
  newProductsPopUp.classList.add("modal-order--hidden");
});
