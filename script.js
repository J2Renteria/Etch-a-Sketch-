const container = document.querySelector('#container');
const buttons = document.querySelectorAll('button');
let containerSize=16;
function createGrid(){
    container.style.gridTemplateColumns= `repeat(${containerSize}, 1fr)`;
    container.style.gridTemplateRows= `repeat(${containerSize}, 1fr)`;
    for (i=0;i<containerSize*containerSize;i++){
        const item = document.createElement('div');
        item.classList.add("item");
        item.style.background= 'white';
        container.appendChild(item);
    }
    childlistener();
}

function childlistener(){
    const items = document.querySelectorAll('.item');
    items.forEach(item => item.addEventListener('mouseover', change));

}
function change(e) {
    e.target.style.background = 'black';


}

function btnclick(e){
    console.log(e.target.value);
    const items = document.querySelectorAll('.item');
    if (e.target.value == "clear"){
        items.forEach(item => item.style.background = 'white');
    }
    else{
        containerSize= prompt("New Grid Size(only numbers)");
        console.log(containerSize);
        items.forEach(item => container.removeChild(item));
        createGrid(containerSize);
        }

    }


createGrid(containerSize);
buttons.forEach(btn => btn.addEventListener('click',btnclick));