const navList = document.querySelector(".navigation__list");

navList.addEventListener("click", function (e) {
	if (e.target.classList.contains("navigation__link")) {
		document.querySelector("[type=checkbox]").checked = false;
	}
});
