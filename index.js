document.addEventListener("DOMContentLoaded", function () {
  const faqs = document.querySelectorAll(".faq__container");

  faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
      faq.classList.toggle("active");
      const icon = faq.querySelector("img");

      if (faq.classList.contains("active")) {
        icon.src = "assets/images/icon-minus.svg";
      } else {
        icon.src = "assets/images/icon-plus.svg";
      }
    });
  });
});
