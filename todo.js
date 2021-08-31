window.onload = function() {

 let newtask = document.getElementById('newtask')
 let addtask = document.getElementById('addtask')
 let todolist = document.getElementById('todolist')

    addtask.onclick = function(){
    
     let li =document.createElement('li')

     let xbtn = document.createElement('button')
     xbtn.innerText = '❎'
     xbtn.onclick = function(event){
         event.target.parentElement.remove()
     }

     let upbtn = document.createElement('button')
     upbtn.innerText= '⬆'   
     upbtn.onclick = function(event){
      event.target.parentElement.parentElement.insertBefore(
        event.target.parentElement,
        event.target.parentElement.previousElementSibling 
      )
     }

     let dnbtn = document.createElement('button')
     dnbtn.innerText= '⬇'   
     dnbtn.onclick = function(event){
      event.target.parentElement.parentElement.insertBefore(
        event.target.parentElement.nextElementSibling,
        event.target.parentElement 
      )
     }

     let taskSpan = document.createElement('span')
     taskSpan.innerText = newtask.value

     if(newtask.value != "")
        {
   
        li.appendChild(upbtn)
        li.appendChild(taskSpan)
        li.appendChild(dnbtn)
        li.appendChild(xbtn)
        todolist.appendChild(li)
        newtask.value = "";
        }
 }

}