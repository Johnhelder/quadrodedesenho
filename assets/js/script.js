let currentColor = 'black';

document.querySelector('.colorArea .color').forEach(item => {
    item.addEventListener('click', colorClickEvent);
});

 function colorClickEvent(e){
    let color = e.target.getAttibute('data-color');
    currentColor = color;

    document.querySelector('.color.active').classList.remove('active');
    e.target.classList.add('active');
 
 }