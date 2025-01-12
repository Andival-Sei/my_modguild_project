var fomodToggle = document.getElementsByClassName("fomod__toggle");
var i;

for (i = 0; i < fomodToggle.length; i++) {
	fomodToggle[i].addEventListener("click", function() {
		this.classList.toggle("active");

		var panel = this.nextElementSibling;
		if (panel.style.maxHeight === '' || panel.style.maxHeight === '0px') {
			panel.style.display = "block";
			panel.style.maxHeight = panel.scrollHeight + "px";
		} else {
			panel.style.maxHeight = '0px';
			panel.addEventListener("transitionend", function handler() {
				panel.style.display = "none";
				panel.removeEventListener("transitionend", handler);
			});
		}
	});
}
