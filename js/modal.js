export const modal = {
  wrapper: document.querySelector(".modal-wrapper"),
  message: document.querySelector(".modal-wrapper span"),
  buttonClose: document.querySelector(".modal-wrapper .close"),
  open() {
    this.wrapper.classList.add("open")
  },
  close() {
    this.wrapper.classList.remove("open")
  }
}

modal.buttonClose.onclick = () => {
  modal.close()
}

window.addEventListener('keydown', handleKeydown)

function handleKeydown(event) {
  if(event.key === 'Escape') {
  modal.close()
  }
}