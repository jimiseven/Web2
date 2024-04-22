function toggleBoldness(titleElement) {
  const currentStyle = titleElement.style.fontWeight;
  const newStyle = currentStyle === "normal" ? "bold" : "normal"; // Toggle between bold and normal

  titleElement.style.fontWeight = newStyle;
}

const btnToggleBold = document.getElementById("btnToggleBold");
const titleElement = document.querySelector(".tit.img"); // Select the title element

btnToggleBold.addEventListener("click", () => {
  toggleBoldness(titleElement);
});
