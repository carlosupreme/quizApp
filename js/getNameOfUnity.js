export default function getNameOfUnity(matter, unity) {
  let name = "";
  if (matter == "matematicas") {
    switch (Number(unity)) {
      case 1:
        name = "Sistemas numericos";
        break;
      case 2:
        name = "Conjuntos y relaciones";
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
  }
  return name;
}
