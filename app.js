const btn = document.getElementById('myBtn');
const splr = document.getElementById('spoiler');

btn.addEventListener('click', handlerOpenClose);
//console.log(Boolean(splr.classList.value));
function attach() {
    document.addEventListener('keydown', handleEscape);
}
function dettach() {
    document.removeEventListener('keydown', handleEscape);
}

function handlerOpenClose () {
    splr.classList.toggle('closed');
    splr.classList.contains('closed') ? dettach() : attach();
}


function handleEscape(event) {
    if(event.key === 'Escape') {
        handlerOpenClose();
    }
}

