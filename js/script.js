const link = document.getElementById("popup-js__link")
const area = document.getElementById("popup-area")
const close = document.getElementById("popup-close")
let pop = document.getElementById("popup-js")
let cont = document.getElementById("popup-content")

link.addEventListener("click", showPopUp)
area.addEventListener("click", closePopUp)
close.addEventListener("click", closePopUp)

function showPopUp() {
    pop.style.visibility = "visible"
    pop.style.opacity = "1"
    cont.style.opacity = "1"
    document.addEventListener("keydown", function(event) {
        if(event.key = "Escape"){
            closePopUp()
        }
    })
}

function closePopUp() {
    pop.style.visibility = "hidden"
    pop.style.opacity = "0"
    cont.style.opacity = "0"
}