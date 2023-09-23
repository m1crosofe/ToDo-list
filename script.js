const inputEL = document.getElementById('input')
const btnEL = document.querySelector('.todo-list__btn')
const fieldEL = document.querySelector('.todo-list__field')

function onBTNclick(){
   if (inputEL.value.length) {

    const divEL = document.createElement('div')
    divEL.classList.add('todo-list__item')

    const check = document.createElement('input')
    check.type = 'checkbox'
    
    const text = document.createElement('p')    
    text.classList.add('todo-list__item_text')
    text.innerText = inputEL.value
    
    const img = document.createElement('img')
    img.src = '/img/trash.svg'
    img.classList.add('.trash-closed')

    divEL.appendChild(check )
    divEL.appendChild(text)
    divEL.appendChild(img)
    
    fieldEL.appendChild(divEL)
    inputEL.value = ''
  }
}

btnEL.addEventListener("click", onBTNclick)
