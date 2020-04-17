const container = document.querySelector('#container');
const buttons = document.querySelectorAll('button');
let containerSize=16;
for (i=0;i<containerSize*containerSize;i++){
    const item = document.createElement('div');
    item.classList.add("item");
    container.appendChild(item);
}
function change(e) {
    console.log(e);
    e.target.style.background = 'black';


}


const items = document.querySelectorAll('.item');
items.forEach(item => item.addEventListener('mouseover', change));
