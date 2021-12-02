let weight = document.querySelector('#weight')
let tall = document.querySelector('#tall')

let iconImg = document.querySelector('#icon')
let msg = document.querySelector('#status')

function calcIMC() {
  weightvalue = Number(weight.value.replace(",", "."))
  tallvalue = Number(tall.value.replace(",", "."))

  if ( ( weight.value.trim() === '' ) || ( tall.value.trim() === '' ) ) {
    return
  } 
  else if ( ( weightvalue <= 0 ) || ( tallvalue <= 0 ) ) {
    return
  }

  let imc = (weightvalue / (tallvalue **2)).toFixed(2)
  document.getElementById("result").innerHTML = imc

  if (imc < 18.50) {
    iconImg.setAttribute('src', 'alert.svg')
    msg.innerHTML = "Abaixo do peso"
  } 
  else if ( ( imc >= 18.50 ) && ( imc < 25.00) ) {
    iconImg.setAttribute('src', 'ok.svg')
    msg.innerHTML = "Peso normal"
  } 
  else if ( ( imc >= 25.00 ) && ( imc < 30.00) ) {
    iconImg.setAttribute('src', 'ok.svg')
    msg.innerHTML = "Pouco acima do peso"
  } 
  else if ( ( imc >= 30.00 ) && ( imc < 35.00) ) {
    iconImg.setAttribute('src', 'alert.svg')
    msg.innerHTML = "Obesidade grau 1"
  } 
  else if ( ( imc >= 35.00 ) && ( imc < 40.00) ) {
    iconImg.setAttribute('src', 'alert.svg')
    msg.innerHTML = "Obesidade grau 2"
  } 
  else if ( imc >= 40.00 ) {
    iconImg.setAttribute('src', 'alert.svg')
    msg.innerHTML = "Obesidade grau 3"
  }
}