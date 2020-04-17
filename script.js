const container = document.querySelector('#container');
const buttons = document.querySelectorAll('button');
let containerSize=16;
let color=false;
function createGrid(){
    container.style.gridTemplateColumns= `repeat(${containerSize}, 1fr)`;
    container.style.gridTemplateRows= `repeat(${containerSize}, 1fr)`;
    for (i=0;i<containerSize*containerSize;i++){
        const item = document.createElement('div');
        item.classList.add("item");
        //item.classList.add('isColored');
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
    if (color && e.target.classList == "item"){
        let randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        e.target.style.background = randomColor;
        e.target.classList.add("isColored");
        e.target.style.filter= 'brightness(100%)';
        
    }
    else if (!color){
        e.target.style.background = 'black';
    }
    else if ( e.target.classList!== "item"){
        const filter = getComputedStyle(e.target);
        let brightness = filter.filter.match(/(\d+)/g);
        brightness= brightness.join('.');
        e.target.style.filter = `brightness(${brightness-.1})`
    }

}

function btnclick(e){
    console.log(e.target.value);
    const items = document.querySelectorAll('.item');
    if (e.target.value == "clear"){
        items.forEach(item => item.style.background = 'white');
        if(e.target.classList!== "item"){
            items.forEach(item => { 
                item.style.filter = 'brightness(1)';
                item.classList.remove('isColored')});

        }
    }
    else if (e.target.value == "changeGrid"){
        const newSize= prompt("New Grid Size(positive numbers only)");
        if (!isNaN(parseInt(newSize)) && newSize>0) {
            containerSize= newSize;
            console.log(containerSize);
            items.forEach(item => container.removeChild(item));
            createGrid(containerSize);
        }
    }
    else{
        items.forEach(item => item.style.background = 'white');
        color=true;
    }
}

createGrid(containerSize);
buttons.forEach(btn => btn.addEventListener('click',btnclick));