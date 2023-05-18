let el = document.getElementById('color');

function colorChange(e) {
    console.log(e);
    let newColor = el.options[el.selectedIndex].value ;
    let target = document.querySelector('h1');

    if (newColor=='red') {
        target.style.color='red';
    } else if (newColor=='orange') {
        target.style.color='orange';
    } else if (newColor=='yellow') {
        target.style.color='yellow';
    } else if (newColor=='green') {
        target.style.color='green';
    } else if (newColor=='blue') {
        target.style.color='blue';
    } else if (newColor=='navy') {
        target.style.color='navy';
    } else if (newColor=='black') {
        target.style.color='black';
    } else {
        target.style.color='purple';
    }
}

el.addEventListener('change',colorChange);