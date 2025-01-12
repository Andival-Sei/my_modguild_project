var acc = document.getElementsByClassName("fomod__toggle");
var i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function() {
		this.classList.toggle("active");

		var panel = this.nextElementSibling;
		if (panel.style.display === "block") {
			panel.style.display = "none";
			panel.style.maxHeight = null;
		} else {
			panel.style.display = "block";
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	});
}
