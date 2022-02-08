import getNameOfUnity from "./getNameOfUnity.js";

export default function renderQuiz(matter, unity) {
  const nameOfUnity = getNameOfUnity(matter, unity);
  const $div = document.createElement("div");

  let html = `
    <h1>${nameOfUnity}</h1>
    <p>Empieza el quiz de ${matter}</p>
  `;

  $div.innerHTML = html;
  document.body.innerHTML = ""; // remove children
  document.body.appendChild($div); // add the current element
  return;
}
