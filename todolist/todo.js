const listitem=document.querySelector("#submit");
const inputItem=document.querySelector("#todoitem")
const displayList=document.querySelector("#userlist")

listitem.addEventListener("click",formSubmit)
displayList.addEventListener('click', clearTodo);


function formSubmit(e){
    
    e.preventDefault();
    const isEmpty = str => !str.trim().length;

    if (isEmpty(inputItem.value)) {
        var y = document.getElementById("snackbarFailed");
        y.className = "show";
        setTimeout(function(){ y.className = y.className.replace("show", ""); }, 3000);
    }
    else {
        additem(inputItem.value)
        inputItem.value="";
        var x = document.getElementById("snackbarSuccess");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
      
    }    
}

function additem(item){
    const listdom=document.createElement('li')
    listdom.classList.add('todo')
    
    const todoDiv=document.createElement('div')
    todoDiv.innerHTML=`${item}`
    listdom.appendChild(todoDiv)

    const delButton=document.createElement('button')
    delButton.classList.add('clearButton')
    
    delButton.innerHTML='<i class="fa-solid fa-xmark "></i>';
    
    listdom.appendChild(delButton);
    displayList.appendChild(listdom)
       
}


function clearTodo(e) {
    const item = e.target;
    
    if (item.classList[0] === 'clearButton') {
        const todo = item.parentElement;
        todo.remove();
    }
}
