import { modal } from './modal.js'
import { alertError } from './alert-error.js'
import { notNumber, calculateImc } from './utils.js'

const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

form.onsubmit = (event) => {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const weightOrHeightIsNotANUmber = notNumber(weight) || notNumber(height)

  if(weightOrHeightIsNotANUmber) {
    alertError.open()
    return
  }

  alertError.close()
  const result = calculateImc(weight, height)
  const message = `Seu IMC é de ${result}`

  modal.message.innerText = message
  modal.open()
}

inputWeight.addEventListener('input', closeOnInput)
inputHeight.addEventListener('input', closeOnInput)

function closeOnInput() {
  alertError.close()
}