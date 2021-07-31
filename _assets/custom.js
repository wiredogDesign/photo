var trigger = document.querySelector('footer');
var info = document.querySelector('.info');

function toggleClass() {
    info.classList.toggle('show-info');
}
trigger.addEventListener('click', toggleClass)