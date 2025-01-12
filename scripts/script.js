const fomodToggle = document.getElementsByClassName("fomod__toggle");

for (const toggle of fomodToggle) {
  toggle.addEventListener("click", function() {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    panel.classList.toggle("open");
  });
}
