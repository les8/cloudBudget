const link = [...document.getElementsByClassName("popup-js__link")]
let title = document.getElementById("popup-title")
let text = document.getElementById("popup-text")
const area = document.getElementById("popup-area")
const close = document.getElementById("popup-close")
let pop = document.getElementById("popup-js")
let cont = document.getElementById("popup-content")


link.forEach((element, index) => {
    element.addEventListener("click", function(){
        showPopUp(index)
    })
})

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
    if (parameter == 0){
        title.innerHTML = "Заголовок 1"
        text.innerHTML = "Текст 1"
    } else if (parameter == 1) {
        title.innerHTML = "Заголовок 2"
        text.innerHTML = "Текст 2"
    } else {
        title.innerHTML = "Заголовок 3"
        text.innerHTML = "Текст 3"
    }          
}

function closePopUp() {
    pop.style.visibility = "hidden"
    pop.style.opacity = "0"
    cont.style.opacity = "0"
}