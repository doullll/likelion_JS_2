let el = document.getElementById('color');

function colorChange(e) {
    let newColor = e.target.value;
    let target = document.querySelector('h1');
    target.style.color = newColor;
}

el.addEventListener('change', colorChange);