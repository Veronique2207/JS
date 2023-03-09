

function addMore() 
{
document.getElementById('error').innerHTML='';

let name = document.getElementById('name').value;
if(name == '')

{
document.getElementById('error').innerHTML='Please enter value';
}

else{
let box = document.getElementById('box');
let li = document.createElement('li');
li.textContent = name;

let a=document.createElement('a');
a.textContent='X';
a.href='javascript:void(0)';
a.className = "remove";
li.appendChild(a);



let position = box?.firstElementChild;
if(position==null){
box.appendChild(li);
}else{
box?.insertBefore(li,position)
}

}
document.getElementById('name').value="";
}

let btn = document.querySelector('ul');
btn.addEventListener('click', function(e){
let box = document.getElementById('box');
let li=e.target.parentNode;
box.removeChild(li);
})


const task_actions_el=document.createElement("div");
      task_actions_el.classList.add("actions");

     const task_edit_el=document.createElement("button");
     task_edit_el.classList.add("edit");
     task_edit_el.innerHTML="edit";

     const task_delete_el=document.createElement("button");
     task_delete_el.classList.add("delete");
     task_delete_el.innerHTML="delete";

     task_actions_el.appendChild(task_edit_el);
     task_actions_el.appendChild(task_delete_el);

     task_el.appendChild(task_actions_el);

     list_el.appendChild(task_el);

     input.value="";


     task_edit_el.addEventListener('click',() => {
        if (task_edit_el.innerText.toLowerCase()=="edit") {
           task_input_el.removeAttribute("readonly");
           task_input_el.focus();
           task_edit_el.innerText="Save";
           } else{
           task_input_el.setAttribute("readonly","readonly");
           task_edit_el.innerText="edit"
               }
          });
   