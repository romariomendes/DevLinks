function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  //   Exemplo de classlist JavaScript
  //   if (html.classList.contains("light")) {
  //     html.classList.remove("light");
  //   } else {
  //     html.classList.add("light");
  //   }

  //   pegar a tag img
  const img = document.querySelector("#profile img");

  // substituir a imagem
  if (html.classList.contains("light")) {
    // ser tiver light mode, adicionar a imagem light.
    img.setAttribute("src", "./assests/avatar-light.png");
  } else {
    img.setAttribute("src", "./assests/avatar.svg");
    // ser tiver sem light mode, manter a imagem normal.
  }
}
