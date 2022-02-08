import initQuiz from "./init_quiz.js";

export default function FormInicio(selectorLogIn) {
  const $form = document.querySelector(selectorLogIn);

  document.addEventListener("submit", (e) => {
    if (e.target !== $form) return false;

    e.preventDefault();
    let playerName = e.target.nombre.value;
    let matter = e.target.materia.value;
    let unity = e.target.unidad.value; // this is a number
    const data = { playerName, matter, unity };

    initQuiz(data);
  });
}
