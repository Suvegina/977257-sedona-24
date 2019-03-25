var buttonLink = document.querySelector(".appointment-button");

var popup = document.querySelector(".modal");

var form = popup.querySelector(".appointment-form");
var arrival = popup.querySelector("[name=date-arrival]");
var departure = popup.querySelector("[name=date-departure]");

var isStorageSupport = true;
var storage = "";

console.log(form);
  
try {
  storage = localStorage.getItem("arrival");
} catch (err) {
  isStorageSupport = false;
}

buttonLink.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.toggle("modal-show");
	arrival.focus(); 
});


form.addEventListener("submit", function (evt) {
  
  if (!arrival.value || !departure.value) {
  	evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth; 
  	popup.classList.add("modal-error");    
  } else {
  	localStorage.setItem("arrival", arrival.value);
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
    }
  });