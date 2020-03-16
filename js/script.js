var findButton = document.querySelector("[name=find-hotel]");
var findWindow = document.querySelector(".modal-search");

var form = findWindow.querySelector("form");
var lessAdultsButton = form.querySelector("[name=less-adults-button]");
var moreAdultsButton = form.querySelector("[name=more-adults-button]");
var adultsQuantityInput = form.querySelector("[name=adults-quantity]");
var lessChildrenButton = form.querySelector("[name=less-children-button]");
var moreChildrenButton = form.querySelector("[name=more-children-button]");
var childrenQuantityInput = form.querySelector("[name=children-quantity]");

findButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  findWindow.classList.toggle("visually-hidden");
});

lessAdultsButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (adultsQuantityInput.value > 0) {
    adultsQuantityInput.value--;
  }
});

moreAdultsButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  adultsQuantityInput.value++;
});

lessChildrenButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (childrenQuantityInput.value > 0) {
    childrenQuantityInput.value--;
  }
});

moreChildrenButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  childrenQuantityInput.value++;
});

