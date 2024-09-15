const sections = document.querySelectorAll("section");
for (let section of sections) {
  section.style.border = "5px solid red";
  section.style.marginBottom = "5px";
  section.style.borderRadius = "15px";
  section.style.paddingLeft = "10px";
  section.style.backgroundColor = "lightGray";
}

// const placesContainer = document.getElementById("places-container");
// placesContainer.style.backgroundColor = "tomato";

const placesContainer = document.getElementById("places-container");
placesContainer.classList.add("text-center");
placesContainer.classList.remove("large-text");
