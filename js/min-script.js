var button-link = document.queryselector (".appointment-button");
var popup = document.queryselector (".pop-up");
// var close = document.queryselector (".appointment-button");
 
button-link.addEventListener("click", function (evt) {
	evt.prevenDefault();
	console.log("Клик по кнопке поиск гостиницы");
	popup.classlist.toggle("modal-show");
});

