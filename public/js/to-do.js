let taskAdder=document.querySelector("#task-adder");
let ulToday=document.querySelector("#today");
let ulTomorrow=document.querySelector("#tomorrow");
let ulUpcoming=document.querySelector("#upcoming");
let btnToday=document.querySelector("btn-today");
let btnTomorrow=document.querySelector("btn-tomorrow");
let btnUpcoming=document.querySelector("btn-upcoming");

function addToday(){
    let li=document.createElement("li");
    li.className="list-group-item";
    let text = document.createTextNode(taskAdder.value);
    let button = document.createElement('button'); 
    button.id="delete";
    button.className="float-right btn btn-outline-dark"; 
    let buttonText = document.createTextNode("Delete"); 
    button.appendChild(buttonText);
    li.appendChild(text);
    li.appendChild(button);
    ulToday.appendChild(li);
    taskAdder.value=" ";
}
function addTomorrow(){
    let li=document.createElement("li");
    li.className="list-group-item";
    let text = document.createTextNode(taskAdder.value);
    let button = document.createElement('button'); 
    button.id="delete";
    button.className="float-right btn btn-outline-dark"; 
    let buttonText = document.createTextNode("Delete"); 
    button.appendChild(buttonText);
    li.appendChild(text);
    li.appendChild(button);
    ulTomorrow.appendChild(li);
    taskAdder.value=" ";
}
function addUpcoming(){
    let li=document.createElement("li");
    li.className="list-group-item";
    let text = document.createTextNode(taskAdder.value);
    let button= document.createElement("button");
    button.id="delete";
    button.className="float-right btn btn-outline-dark";
    let buttonText=document.createTextNode("Delete");
    button.appendChild(buttonText);
    li.appendChild(text);
    li.appendChild(button);
    ulUpcoming.appendChild(li);
    taskAdder.value=" ";
}

ulToday.addEventListener("click", deleteItem1);
ulTomorrow.addEventListener("click", deleteItem2);
ulUpcoming.addEventListener("click", deleteItem3);

function deleteItem1(event){
    if(event.target.id == "delete"){
        let parent = event.target.parentNode;
        ulToday.removeChild(parent)
    }
}

function deleteItem2(event){
    if(event.target.id == "delete"){
        let parent = event.target.parentNode;
        ulTomorrow.removeChild(parent)
    }
}


function deleteItem3(event){
    if(event.target.id == "delete"){
        let parent = event.target.parentNode;
        ulUpcoming.removeChild(parent)
    }
}

