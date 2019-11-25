let lightButton = document.getElementById('button-light')
let darkButton = document.getElementById('button-dark')

lightButton.addEventListener("click", lightsOn);
darkButton.addEventListener("click", lightsOff);
 
function lightsOn() {
        document.body.style.background = 'white'
    }

function lightsOff() {
        document.body.style.background = '#333'
}

