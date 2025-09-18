console.log(5*4);


//TOP BUTTONS//
let btnDo = document.querySelector('.dobut');
btnDo.addEventListener('click', run1);

let btnDelay = document.querySelector('.delaybut');
btnDelay.addEventListener('click', run2);

let btnDelegate = document.querySelector('.delegatebut');
btnDelegate.addEventListener('click', run3);


let btnDisregard = document.querySelector('.disregardbut');
btnDisregard.addEventListener('click', run4);

//TOP BUTTONS//


//CLEAR CHECK BUTTONS//

let btnclearCheck1 = document.getElementById('clearchecked1');
btnclearCheck1.addEventListener ('click', clearcheck1);

let btnclearCheck2 = document.getElementById('clearchecked2');
btnclearCheck2.addEventListener ('click', clearcheck2);

let btnclearCheck3 = document.getElementById('clearchecked3');
btnclearCheck3.addEventListener ('click', clearcheck3);

let btnclearCheck4 = document.getElementById('clearchecked4');
btnclearCheck4.addEventListener ('click', clearcheck4);


//CLEAR CHECK BUTTONS//


//CLEAR ALL BUTTONS//


let btnclearAll1 = document.getElementById('clearall1');
btnclearAll1.addEventListener ('click', clearall1);

let btnclearAll2 = document.getElementById('clearall2');
btnclearAll2.addEventListener ('click', clearall2);

let btnclearAll3 = document.getElementById('clearall3');
btnclearAll3.addEventListener ('click', clearall3);

let btnclearAll4 = document.getElementById('clearall4');
btnclearAll4.addEventListener ('click', clearall4);

let btnclearEverything = document.getElementById('cleareverything');
btnclearEverything.addEventListener ('click', clearall);


//CLEAR ALL BUTTONS//



//CONSTS//

const inputBox = document.getElementById("submittask")
console.log(inputBox);


//CONSTS//


//DO NOW FUNCS//

function run1 () {
    if(inputBox.value === ""){
        alert('Make sure to add your task!');
    }else{
        let listContainer = document.getElementById("docheck");
        let li = document.createElement("li");
       let newCheckBoxID = 'checkbox_' + li.innerHTML;
        let newCheckBox = document.createElement("INPUT");
        newCheckBox.setAttribute("type", "checkbox");
        newCheckBox.setAttribute("id", newCheckBoxID);
        newCheckBox.setAttribute("class", 'item');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        li.appendChild(newCheckBox);
        console.log(document.querySelector("#docheck"));
    }
}

function clearcheck1 () {
    const childCheckboxes = document.querySelectorAll("#docheck li");
    console.log(childCheckboxes);
    for(let i = 0; i<=childCheckboxes.length; i++){
       console.log(childCheckboxes.innerHTML);
        if (childCheckboxes[i].querySelector('input[type="checkbox"]').checked) childCheckboxes[i].remove();
    }
    
    document.querySelector('#docheck').replaceChildren(childCheckboxes);
}

function clearall1 () {
    const childCheckboxes = document.querySelectorAll("#docheck li");
    console.log(childCheckboxes);
    for(let i = 0; i<=childCheckboxes.length; i++){
       console.log(childCheckboxes.innerHTML);
       childCheckboxes[i].remove()
    }
}

//DO NOW FUNCS//



//DELAY FUNCS//

function run2 () {
    console.log('buttons');
    if(inputBox.value === ""){
        alert('Make sure to add your task!');
    }else{
        let listContainer = document.getElementById("delaycheck");
        let li = document.createElement("li");
       li.innerHTML = inputBox.value;
       listContainer.appendChild(li);
       let newCheckBoxID = 'checkbox_' + li.innerHTML;
        let newCheckBox = document.createElement("INPUT");
        newCheckBox.setAttribute("type", "checkbox");
        newCheckBox.setAttribute("id", newCheckBoxID);
        newCheckBox.setAttribute("class", 'item');
        li.appendChild(newCheckBox);
    }
}

function clearcheck2 () {
    const childCheckboxes = document.querySelectorAll("#delaycheck li");
    console.log(childCheckboxes);
    for(let i = 0; i<=childCheckboxes.length; i++){
       console.log(childCheckboxes.innerHTML);
        if (childCheckboxes[i].querySelector('input[type="checkbox"]').checked) childCheckboxes[i].remove();
    }
    document.querySelector('#delaycheck').replaceChildren(childCheckboxes);
}

function clearall2 () {
    const childCheckboxes = document.querySelectorAll("#delaycheck li");
    console.log(childCheckboxes);
    for(let i = 0; i<=childCheckboxes.length; i++){
       console.log(childCheckboxes.innerHTML);
       childCheckboxes[i].remove()
    }
}

//DELAY FUNCS//


//DELEGATE FUNCS//

function run3 () {
    console.log('buttons');
    if(inputBox.value === ""){
        alert('Make sure to add your task!');
    }else{
        let listContainer = document.getElementById("delegatecheck");
        let li = document.createElement("li");
       li.innerHTML = inputBox.value;
       listContainer.appendChild(li);
       let newCheckBoxID = 'checkbox_' + li.innerHTML;
        let newCheckBox = document.createElement("INPUT");
        newCheckBox.setAttribute("type", "checkbox");
        newCheckBox.setAttribute("id", newCheckBoxID);
        newCheckBox.setAttribute("class", 'item');
        li.appendChild(newCheckBox);
    }
}

function clearcheck3 () {
    const childCheckboxes = document.querySelectorAll("#delegatecheck li");
    console.log(childCheckboxes);
    for(let i = 0; i<=childCheckboxes.length; i++){
       console.log(childCheckboxes.innerHTML);
        if (childCheckboxes[i].querySelector('input[type="checkbox"]').checked) childCheckboxes[i].remove();
    }
    document.querySelector('#delaycheck').replaceChildren(childCheckboxes);
}

function clearall3 () {
    const childCheckboxes = document.querySelectorAll("#delegatecheck li");
    console.log(childCheckboxes);
    for(let i = 0; i<=childCheckboxes.length; i++){
       console.log(childCheckboxes.innerHTML);
       childCheckboxes[i].remove()
    }
}

//DELEGATE FUNCS//

function run3 () {
    console.log('buttons');
    if(inputBox.value === ""){
        alert('Make sure to add your task!');
    }else{
        let listContainer = document.getElementById("delegatecheck");
        let li = document.createElement("li");
       li.innerHTML = inputBox.value;
       listContainer.appendChild(li);
       let newCheckBoxID = 'checkbox_' + li.innerHTML;
        let newCheckBox = document.createElement("INPUT");
        newCheckBox.setAttribute("type", "checkbox");
        newCheckBox.setAttribute("id", newCheckBoxID);
        newCheckBox.setAttribute("class", 'item');
        li.appendChild(newCheckBox);
    }
}

function clearcheck3 () {
    const childCheckboxes = document.querySelectorAll("#delegatecheck li");
    console.log(childCheckboxes);
    for(let i = 0; i<=childCheckboxes.length; i++){
       console.log(childCheckboxes.innerHTML);
        if (childCheckboxes[i].querySelector('input[type="checkbox"]').checked) childCheckboxes[i].remove();
    }
    document.querySelector('#delaycheck').replaceChildren(childCheckboxes);
}

function clearall3 () {
    const childCheckboxes = document.querySelectorAll("#delegatecheck li");
    console.log(childCheckboxes);
    for(let i = 0; i<=childCheckboxes.length; i++){
       console.log(childCheckboxes.innerHTML);
       childCheckboxes[i].remove()
    }
}

//DELEGATE FUNCS//


//DO NOT FUNCS//

function run4 () {
    console.log('buttons');
    if(inputBox.value === ""){
        alert('Make sure to add your task!');
    }else{
        let listContainer = document.getElementById("disregardcheck");
        let li = document.createElement("li");
       li.innerHTML = inputBox.value;
       listContainer.appendChild(li);
       let newCheckBoxID = 'checkbox_' + li.innerHTML;
        let newCheckBox = document.createElement("INPUT");
        newCheckBox.setAttribute("type", "checkbox");
        newCheckBox.setAttribute("id", newCheckBoxID);
        newCheckBox.setAttribute("class", 'item');
        li.appendChild(newCheckBox);
    }
}

function clearcheck4 () {
    const childCheckboxes = document.querySelectorAll("#disregardcheck li");
    console.log(childCheckboxes);
    for(let i = 0; i<=childCheckboxes.length; i++){
       console.log(childCheckboxes.innerHTML);
        if (childCheckboxes[i].querySelector('input[type="checkbox"]').checked) childCheckboxes[i].remove();
    }
    document.querySelector('#delaycheck').replaceChildren(childCheckboxes);
}

function clearall4 () {
    const childCheckboxes = document.querySelectorAll("#disregardcheck li");
    console.log(childCheckboxes);
    for(let i = 0; i<=childCheckboxes.length; i++){
       console.log(childCheckboxes.innerHTML);
       childCheckboxes[i].remove()
    }
}

//DO NOT FUNCS//

function clearall (){
    const listItems = document.querySelectorAll('li');

    listItems.forEach(listItem => {
      listItem.parentNode.removeChild(listItem);
    });
}

//What Do I Need To Do//
/*
Create an event listener for all of the buttons
Find a way to have an li checklist item be created inside their boxes and send them there
Add event listeners to each container button
Find a way to have event listener identify checked items and clear them
Find a way for event listener to clear all
Find a way for an additional input to pop up when you hit delegate

/*
clear checked = clear ones that have a check mark next to them
document.querySelectorAll('input[type="checkbox"]') - do something to target just the container 
removeChild & target all who are checked



const checkedChildCheckboxes = document.querySelectorAll("#parentContainer input[type='checkbox']:checked");
*/