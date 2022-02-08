import FormFinal from "./FormFinal.js";
import getData from "./getData.js";

const ROOT = document.querySelector(".quiz");
let counter = 0;
let preguntasCorrectas = [];
export default async function FormPregunta(nombre, unidad, pos) {
  let json = await getData(unidad);
  let html = pregunta(nombre, unidad, json, pos); // --> Nodo
  if (!json[pos]) return;
  ROOT.innerHTML = "";
  ROOT.appendChild(html);
  return;
}

function pregunta(nombre, unidad, json, pos) {
  if (!json[pos]) {
    ROOT.setAttribute("c", counter);
    preguntasCorrectas.forEach((el, i) => {
      ROOT.setAttribute(`p${i}`, el.question);
      ROOT.setAttribute(`p${i}a`, el.a);
      ROOT.setAttribute(`p${i}b`, el.b);
      ROOT.setAttribute(`p${i}c`, el.c);
    })
    FormFinal(nombre, unidad);
    return;
  }
  let { question, a, b, c, correct, number } = json[pos];
  let html = /*html*/ ` 
    <span class="counter"> ${number}</span>
    <h2>${question}</h2>
    <form class="form" id="form-question">
      <label>
        <input required value="a" type="radio" name="question"/>
        ${a}
        </label>
        <label>
        <input required value="b" type="radio" name="question"/>
        ${b}
      </label>
      <label>
        <input required value="c" type="radio" name="question"/ >
        ${c}
      </label>
      <input type="submit" value="Siguiente" />
    </form>
  `;

  const div = document.createElement("div");
  div.classList = "quiz-question";
  div.innerHTML = html;

  document.addEventListener("submit", (e) => {
    if (e.target !== div.querySelector("form")) return false;

    e.preventDefault();

    if (e.target.question.value === correct) {
      counter += 1;
      preguntasCorrectas.push({
        question,
        a,
        b,
        c,
      });
    }

    pos += 1;
    FormPregunta(nombre, unidad, pos);
  });

  return div;
}
