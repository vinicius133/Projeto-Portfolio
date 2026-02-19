function toggleMode(){
   const html = document.documentElement

//    if(html.classList.contains('light')){

//     html.classList.remove('light')
//    } else {
//     html.classList.add('light')
//    }

html.classList.toggle('light') // substitui toda a lógica dos comentados acima


// trocar imagem

const img = document.querySelector("#profile img")

if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/light.jpeg")

} else {
    img.setAttribute("src", "./assets/dark.jpeg")
}



}