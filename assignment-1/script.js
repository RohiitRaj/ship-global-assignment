// script.js

document.addEventListener("DOMContentLoaded", function () {
  const headers = document.querySelectorAll(".accordion-header");

  headers.forEach((header) => {
    header.addEventListener("click", function () {
      const content = this.nextElementSibling;

      // Close other sections
      const openSections = document.querySelectorAll(".accordion-content");
      openSections.forEach((section) => {
        if (section !== content && section.style.maxHeight) {
          section.style.maxHeight = null;
          section.previousElementSibling.classList.remove("active");
        }
      });

      // Toggle current section
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        this.classList.remove("active");
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        this.classList.add("active");
      }
    });
  });
});
