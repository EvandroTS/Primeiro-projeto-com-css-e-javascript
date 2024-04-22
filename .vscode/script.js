function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a atag amg
  const img = document.querySelector("#profile img")
  //substituir a imagem
  if (html.classList.contains("light")) {
    //se estiver light mode , adicionarr a imagem light
    img.setAttribute("src", "./assets/scorpion.jpg.jpg")
  } else {
    //se estiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/black.panther.jpg")
  }
}
