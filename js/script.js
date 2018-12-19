var letter = document.querySelector(".write-us");
var popupLetter = document.querySelector(".modal-write-us");
if (popupLetter != null) {
	var letterClose = popupLetter.querySelector(".modal-close");
	var formLetter = popupLetter.querySelector("form");
	var nameUser = popupLetter.querySelector(".name-user");
	var mailUser = popupLetter.querySelector(".email-user");
	var textUser = popupLetter.querySelector(".text-letter");
	
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

	letterClose.addEventListener("click", function (evt) {
		evt.preventDefault();
		popupLetter.classList.remove("modal-show");
		popupLetter.classList.remove("modal-error");
	});

	formLetter.addEventListener("submit", function (evt) {
		if (!mailUser.value || !nameUser.value || !textUser.value) {
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
}

var mapLink = document.querySelector(".map-big");
var mapPopup = document.querySelector(".modal-map-big");
if (mapPopup != null) {
	var mapClose = mapPopup.querySelector(".close");
	
	mapLink.addEventListener("click", function (evt) {
		evt.preventDefault();
		mapPopup.classList.add("modal-show");
	});

	mapClose.addEventListener("click", function (evt) {
		evt.preventDefault();
		mapPopup.classList.remove("modal-show");
	});

	window.addEventListener("keydown", function (evt) {
		evt.preventDefault();
		if (evt.keyCode === 27) {
			if (mapPopup.classList.contains("modal-show")) {
				mapPopup.classList.remove("modal-show");
			}
		}
	}); 
}


var buyLink = document.querySelectorAll(".button-buy");
var buyPopup = document.querySelector(".modal-add-product");
if (buyPopup != null) {
	var buyClose = buyPopup.querySelector(".modal-close");
	var buyСontinue = buyPopup.querySelector(".button-modal-close");

	for (var obj in buyLink)
	buyLink[obj].onclick = function(evt){
		evt.preventDefault();
		buyPopup.classList.add("modal-show");
	};

	buyClose.addEventListener("click", function (evt) {
		evt.preventDefault();
		buyPopup.classList.remove("modal-show");
	});

	buyСontinue.addEventListener("click", function (evt) {
		evt.preventDefault();
		buyPopup.classList.remove("modal-show");
	});

	window.addEventListener("keydown", function (evt) {
		evt.preventDefault();
		if (evt.keyCode === 27) {
			if (buyPopup.classList.contains("modal-show")) {
				buyPopup.classList.remove("modal-show");
			}
		}
	});
}

var slider = document.querySelector(".category-slider");	
if (slider != null) {
	var arrowClickRight = slider.querySelector(".arrow-right");
	var arrowClickLeft = slider.querySelector(".arrow-left");
	var dottedClickRight = slider.querySelector(".dotted-slide-right");
	var dottedClickLeft = slider.querySelector(".dotted-slide-left");
	var slideDrill = slider.querySelector(".slide-drill");
	var slidePerforator = slider.querySelector(".slide-perforator");
	
	function sliderSelection(evt) {
		evt.preventDefault();
		slideDrill.classList.toggle("slide-show");
		slideDrill.classList.toggle("slide-hidden");
		slidePerforator.classList.toggle("slide-hidden");
		slidePerforator.classList.toggle("slide-show");
		dottedClickRight.classList.toggle("dotted-slide-white");
		dottedClickRight.classList.toggle("dotted-slide-red");
		dottedClickLeft.classList.toggle("dotted-slide-red");
		dottedClickLeft.classList.toggle("dotted-slide-white");
	}

	arrowClickRight.addEventListener("click", sliderSelection);
	arrowClickLeft.addEventListener("click", sliderSelection);	
	
	dottedClickRight.addEventListener("click", function (evt) {
		if (dottedClickRight.classList.contains("dotted-slide-white")) {
			sliderSelection(evt);
		} else {
				evt.preventDefault();
		}
	});
	
	dottedClickLeft.addEventListener("click", function (evt) {
		if (dottedClickLeft.classList.contains("dotted-slide-white")) {
			sliderSelection(evt);
		} else {
				evt.preventDefault();
		}
	});
}

var service = document.querySelector(".service");
if (service != null) {
	var delivery = service.querySelector(".delivery");
	var guarantee = service.querySelector(".guarantee");
	var credit = service.querySelector(".credit");
	var buttonDelivery = service.querySelector(".button-delivery");
	var buttonGuarantee = service.querySelector(".button-guarantee");
	var buttonCredit = service.querySelector(".button-credit");
	
	buttonDelivery.addEventListener("click", function (evt) {
		if (delivery.classList.contains("modal-show") != null) {
			delivery.classList.add("service-show");
			buttonDelivery.classList.add("active-button");
			
			guarantee.classList.remove("service-show");
			credit.classList.remove("service-show");
			buttonGuarantee.classList.remove("active-button");
			buttonCredit.classList.remove("active-button");
		}
	});
	
	buttonGuarantee.addEventListener("click", function (evt) {
		if (guarantee.classList.contains("modal-show") != null) {
			guarantee.classList.add("service-show");
			buttonGuarantee.classList.add("active-button");
			
			delivery.classList.remove("service-show");
			credit.classList.remove("service-show");
			buttonDelivery.classList.remove("active-button");
			buttonCredit.classList.remove("active-button");
		}
	});
	
	buttonCredit.addEventListener("click", function (evt) {
		if (credit.classList.contains("modal-show") != null) {
			credit.classList.add("service-show");
			buttonCredit.classList.add("active-button");
			
			guarantee.classList.remove("service-show");
			delivery.classList.remove("service-show");
			buttonGuarantee.classList.remove("active-button");
			buttonDelivery.classList.remove("active-button");
		}
	});
}