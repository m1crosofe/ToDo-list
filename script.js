const inputEL = document.getElementById('input')
const btnEL = document.querySelector('.todo-list__btn')
const fieldEL = document.querySelector('.todo-list__field')

function onBTNclick(){
   if (inputEL.value.length) {

    const divEL = document.createElement('div')
    divEL.classList.add('todo-list__item')

    const check = document.createElement('input')
    check.type = 'checkbox'
    check.classList.add('todo-list__check')
    
    const text = document.createElement('p')    
    text.classList.add('todo-list__item_text')
    text.innerText = inputEL.value
    
    const img = document.createElement('img')
    img.src = '/img/trash.svg'
    img.classList.add('trash-closed')
  
    divEL.appendChild(check)
    divEL.appendChild(text)
    divEL.appendChild(img)
    
    fieldEL.appendChild(divEL)
    inputEL.value = ''
    
  }
}
btnEL.addEventListener("click", onBTNclick)
function del(){
  const trash = document.querySelectorAll('.trash-closed');
  trash.forEach((img) => {
    img.addEventListener("click", () => {
      const parent = img.parentNode;
      parent.parentNode.removeChild(parent);  
    })
  })
}
fieldEL.addEventListener("click", del)


// клик на кнопку, текст зачеркнутый, бекграунд зеленый
function aaa(){
  const chk = document.querySelectorAll('.todo-list__check')
  for (i = 0; i < chk.length; i++){
    if (chk[i].checked){
      fieldEL.children[i].style.background = '#EBFFED'
      fieldEL.children[i].style.textDecoration = 'line-through'
    }
    else{
      fieldEL.children[i].style.background = "#ffebeb"
      fieldEL.children[i].style.textDecoration = "None"
    }
  }
}
fieldEL.addEventListener("click", aaa)

