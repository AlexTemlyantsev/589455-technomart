var letter = document.querySelector(".write-us");
var popupLetter = document.querySelector(".modal-write-us");
var close = popupLetter.querySelector(".modal-close");
var formLetter = popupLetter.querySelector("form");
var nameUser = popupLetter.querySelector(".name-user");
var mailUser = popupLetter.querySelector(".email-user");

var isStorageSupport = true;
var storageName = "";
var storageMail = "";
  
try {
	storageName = localStorage.getItem("nameUser");
	storageMail = localStorage.getItem("mailUser");
} catch (err) {
		isStorageSupport = false;
}

letter.addEventListener("click", function (evt) {
	evt.preventDefault();
    popupLetter.classList.add("modal-show");
	nameUser.focus();
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupLetter.classList.remove("modal-show");
	popupLetter.classList.remove("modal-error");
});

formLetter.addEventListener("submit", function (evt) {
    if (!mailUser.value || !nameUser.value) {
		evt.preventDefault();
		popupLetter.classList.remove("modal-error");
		popupLetter.offsetWidth = popupLetter.offsetWidth;
		popupLetter.classList.add("modal-error");
    } else {
		if (isStorageSupport) {
			localStorage.setItem("nameUser", nameUser.value);
			localStorage.setItem("mailUser", mailUser.value);
		}  
	}
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
		evt.preventDefault();
		if (popupLetter.classList.contains("modal-show")) {
			popupLetter.classList.remove("modal-show");
			popupLetter.classList.remove("modal-error");
		}
    }
});