var commonHeader = document.querySelector(".common-header")
var buttonToggle = document.querySelector('.common-header__button');

if (commonHeader.classList.contains("common-header--nojs")) {
  commonHeader.classList.remove("common-header--nojs");
  commonHeader.classList.add("common-header--closed");
  commonHeader.classList.remove("common-header--opened");
}

buttonToggle.addEventListener("click", function() {
  if (commonHeader.classList.contains("common-header--closed")) {
    commonHeader.classList.remove("common-header--closed");
    commonHeader.classList.add("common-header--opened");
  } else {
    commonHeader.classList.add("common-header--closed");
    commonHeader.classList.remove("common-header--opened");
  }

})
