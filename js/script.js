var buttonLink = document.querySelector (".appointment-button");
var popup = document.querySelector (".modal");

buttonLink.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.toggle("modal-show");
});
