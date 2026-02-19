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
    img.setAttribute("src", "./assets/sadsadsda.png")

} else {
    img.setAttribute("src", "./assets/yvar.png")
}


// mudar o texto
const p = document.querySelector("#profile p")
if (html.classList.contains("light")) {
    p.innerText = "Lua, a Grandiosa"

} else {
    p.innerText = "Yvar, o Guerreiro"
}



}