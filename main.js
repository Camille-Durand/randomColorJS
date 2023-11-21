const characters ='0123456789ABCDEF';

const squared = document.querySelectorAll("div");
const body = document.querySelector('body');
const title = document.querySelector('h1');
const coloring = document.querySelector('h2');
const saving = document.querySelector("h4");

let night = 0;

function randomColor(length) {   
    result = '';
    
    const charactersLength = characters.length;
    for ( let i = 0; i < 6; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    coloring.textContent = "#"+ result;
    coloring.style.color = result;

    squared[1].style.backgroundColor = result;   

    return result;
}

function saveColor() {
    squared[3].style.backgroundColor = result;
    saving.textContent = "#" + result;
    saving.style.color = result;
}

function nightMode() {
    if (night == 0) {
        title.style.color = "#fff"
        body.style.backgroundColor = "#2b2b2b";
        night = 1;
        return;
    } else if (night == 1) {
        title.style.color = "#000"
        body.style.backgroundColor = "#fff";
        night = 0;
        return;
    }
}