import FormRevision from "./FormRevision.js";

const ROOT = document.querySelector(".quiz");

export default function FormFinal(nombre, unidad) {
  let html = /*html */ `
    <h3>¡Felicidades <b><i>${nombre}</i></b> has terminado!</h3>
    <br />
    <p>Aqui están los resultados del cuestionario sobre la unidad ${unidad}: <b> 
    ${getNameOfUnity(unidad)}</b></p>
    <br /><br />
    <button>Ver resultados</button>
  `;
  const div = document.createElement("div");
  div.classList = "quiz-final";
  div.innerHTML = html;
  ROOT.innerHTML = "";
  ROOT.appendChild(div);

  document.addEventListener("click", (e) => {
    if (e.target !== div.querySelector("button")) return false;
    let correctas = ROOT.getAttribute("c"); // -> 5 o 4 o 3 etc
    FormRevision(nombre, unidad, 0);
  });
}

function getNameOfUnity(unidad) {
  let name = "";
  switch (Number(unidad)) {
    case 1:
      name = "Sistemas numericos";
      break;
    case 2:
      name = "Conjuntos";
      break;
    case 3:
      name = "Logica matematica";
      break;
    case 4:
      name = "Algebra de Bool";
      break;
    default:
      name = "Tema Desconocido :c";
  }
  return name;
}
