var commonHeader = document.querySelector(".common-header")
var buttonToggle = document.querySelector('.common-header__button');
// var navMenu = document.querySelector(".common-header__menu");

commonHeader.classList.remove("common-header--nojs");

buttonToggle.addEventListener("click", function() {
  if (commonHeader.classList.contains("common-header--closed")) {
    commonHeader.classList.remove("common-header--closed");
    commonHeader.classList.add("common-header--opened");
  } else {
    commonHeader.classList.add("common-header--closed");
    commonHeader.classList.remove("common-header--opened");
  }

})
