// import { pregunta } from "./FormPregunta.js";
import getData from "./getData.js";

const ROOT = document.querySelector(".quiz");

export default async function FormRevision(nombre, unidad) {
  let json = await getData(unidad);

  const c = ROOT.getAttribute("c");
  ROOT.innerHTML = "";
  
  const div = document.createElement("div");
  div.innerHTML = /*html*/ `
  <h2>Resultados del quiz</h2>
  <h3> ${nombre}. De ${json.length} preguntas obtuviste un total de ${c} aciertos</h3>
  `;

  div.insertAdjacentHTML("beforeend", `<button>Regresar</button>`)

  ROOT.appendChild(div)
  return;
}
