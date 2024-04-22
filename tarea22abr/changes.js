function toggleBold(h1Element) {
    const currentStyle = h1Element.style.fontWeight;
    const newStyle = currentStyle === "bold" ? "normal" : "bold"; // Toggle between bold and normal
  
    h1Element.style.fontWeight = newStyle;
  }
  
  const btnToggleBold = document.getElementById("btnToggleBold");
  const h1Element2 = document.querySelector(".seccion-ejemplos h2"); // Select the h1 element
  
  btnToggleBold.addEventListener("click", () => {
    toggleBold(h1Element2);
  });


  //cambio de color a texto
function toggleColor(h1Element) {
    const currentColor = h1Element.style.color;
    const newColor = currentColor === "blue" ? "black" : "blue"; // Toggle between blue and black
  
    h1Element.style.color = newColor;
  }
  
  const btnToggleColor = document.getElementById("btnToggleColor"); // Add button ID
  const h1Element3 = document.querySelector(".seccion-ejemplos h2"); // Select the h1 element
  
  btnToggleColor.addEventListener("click", () => {
    toggleColor(h1Element3);
  });

  //arrreglo

  let arregloStrings = [];

function updateArregloLista() {
  const arregloLista = document.getElementById("arreglo-lista");
  arregloLista.innerHTML = "";

  arregloStrings.forEach((item, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${index + 1}. ${item}`;
    arregloLista.appendChild(listItem);
  });
}

const btnAgregarInicio = document.getElementById("btnAgregarInicio");
const valorNuevoInput = document.getElementById("valorNuevo");

btnAgregarInicio.addEventListener("click", () => {
  const nuevoValor = valorNuevoInput.value.trim();

  if (nuevoValor) {
    arregloStrings.unshift(nuevoValor);
    valorNuevoInput.value = "";
    updateArregloLista();
  }
});

const btnAgregarFinal = document.getElementById("btnAgregarFinal");

btnAgregarFinal.addEventListener("click", () => {
  const nuevoValor = valorNuevoInput.value.trim();

  if (nuevoValor) {
    arregloStrings.push(nuevoValor);
    valorNuevoInput.value = "";
    updateArregloLista();
  }
});

const btnEliminarInicio = document.getElementById("btnEliminarInicio");

btnEliminarInicio.addEventListener("click", () => {
  if (arregloStrings.length > 0) {
    arregloStrings.shift();
    updateArregloLista();
  }
});

const btnEliminarFinal = document.getElementById("btnEliminarFinal");

btnEliminarFinal.addEventListener("click", () => {
  if (arregloStrings.length > 0) {
    arregloStrings.pop();
    updateArregloLista();
  }
});


//funcionalidad cambio de imagen
function toggleImage(currentImageId, targetImageId) {
    const currentImage = document.getElementById(currentImageId);
    const targetImage = document.getElementById(targetImageId);
  
    // Hide the currently displayed image
    currentImage.style.display = "none";
  
    // Show the target image
    targetImage.style.display = "block";
  }

  const btnToggleImage = document.getElementById("btnToggleImage1");

btnToggleImage.addEventListener("click", () => {
  let currentImageId = "imagen1"; // Initially assume Image 1 is displayed
  let targetImageId = "imagen4";

  // Check which image is currently displayed and switch to the other one
  const displayedImage = document.querySelector(".card1 img:not([style='display: none'])");
  if (displayedImage) {
    currentImageId = displayedImage.id;
    targetImageId = currentImageId === "imagen1" ? "imagen4" : "imagen1";
  }

  toggleImage(currentImageId, targetImageId);
});