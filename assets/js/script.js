//Initial Data
let currentColor = 'black';
let canDraw = false;
let mouseX = 0;
let mouseY = 0;

let screen = document.querySelector('#tela');
let ctx = screen.getContext('2d');

//Events
document.querySelectorAll('.colorArea .color').forEach(item => {
    item.addEventListener('click', colorClickEvent);
});
screen.addEventListener('mousedown', mouseDownEvent);
screen.addEventListener('mousemove', mouseMoveEvent);
screen.addEventListener('mouseUp', mouseUpEvent);

//Functions
 function colorClickEvent(e){
    let color = e.target.getAttribute('data-color');
    currentColor = color;

    document.querySelector('.color.active').classList.remove('active');
    e.target.classList.add('active');
    
 }

 function mouseDownEvent(){
    canDraw = true;
 }

 function mouseMoveEvent(){

 }

 function mouseUpEvent(){
    canDraw = false;
 }