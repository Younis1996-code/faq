document.addEventListener("DOMContentLoaded", function () {
  const contentDiv = document.querySelector(".container .faq .questions .que");
  let newImage = document.querySelector(".container .faq .questions .que img");

  if (newImage) {
    newImage.addEventListener("click", function () {
      newImage.src = "images/icon-minus.svg";
      const newP = document.createElement("p");
      newP.textContent =
        "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with project in HTML, CSS and JavaScript it's suitable for all levels and ideal with portfolio building.";
      contentDiv.appendChild(newP);
    });
  } else {
    console.log("element not found");
  }
});
