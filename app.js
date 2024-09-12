const submitBtn = document.querySelector(".sub-btn");
const okBtn = document.querySelector(".okbtn");
const popUp = document.querySelector(".pop-up");

const showPopup = () => {
  popUp.classList.add("show-popup");
};

const closePopup = () => {
  popUp.classList.remove("show-popup");
};

submitBtn.addEventListener("click", showPopup);
okBtn.addEventListener("click", closePopup);
