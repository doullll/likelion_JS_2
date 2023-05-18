let el = document.getElementById('login-form');
let greetingText = document.getElementById('greeting');


function submit(e) {
    e.preventDefault();
    var target = document.getElementById('text-input').value
    greetingText.innerText = `Hello ${target}`

    greetingText.classList.remove('hidden');
    el.classList.add('hidden');
}

el.addEventListener('submit',submit);


