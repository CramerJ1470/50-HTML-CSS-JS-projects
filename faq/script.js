/* const buttons = document.querySelectorAll(".fas");

 buttons.forEach((btn) => {
	btn.addEventListener("click", changeToggle);
});

function changeToggle(e) {
	//console.log(e.target.parentNode.parentNode.classList);
	if (e.target.parentNode.parentNode.classList.contains("active")) {
		e.target.parentNode.parentNode.classList.remove("active");
	} else if (
		e.target.parentNode.parentNode.classList.contains("active") === false
	) {
		e.target.parentNode.parentNode.classList.add("active");
	}
}
*/
const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach((toggle) => {
	toggle.addEventListener("click", () => {
		toggle.parentNode.classList.toggle("active");
	});
});
