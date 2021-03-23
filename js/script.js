let link = document.getElementById("popup-js__link")
let link2 = document.getElementById("popup-js__link2")
let title = document.getElementById("popup-title")
let text = document.getElementById("popup-text")
const area = document.getElementById("popup-area")
const close = document.getElementById("popup-close")
let pop = document.getElementById("popup-js")
let cont = document.getElementById("popup-content")


link.addEventListener("click", function() {showPopUp(1)})
link2.addEventListener("click", function() {showPopUp(2)})
area.addEventListener("click", closePopUp)
close.addEventListener("click", closePopUp)

function showPopUp(parameter) {
    pop.style.visibility = "visible"
    pop.style.opacity = "1"
    cont.style.opacity = "1"
    document.addEventListener("keydown", function(event) {
        if(event.key = "Escape"){
            closePopUp()
        }
    })
    if (parameter == 1){
        title.innerHTML = "Заголовок 1"
        text.innerHTML = "Текст 1"
    } else if (parameter == 2) {
        title.innerHTML = "Заголовок 2"
        text.innerHTML = "Текст 2"
    } else return           
}

function closePopUp() {
    pop.style.visibility = "hidden"
    pop.style.opacity = "0"
    cont.style.opacity = "0"
}