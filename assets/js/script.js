let currentColor = 'black';

document.querySelector('.colorArea .color').forEach(item => {
    item.addEventListener('click', colorClickEvent);
});

 function colorClickEvent(e){
    let color = e.target.getAttibute('data-color');

    console.log('cor clicada', color);
 }