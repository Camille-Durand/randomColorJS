const characters ='0123456789ABCDEF';
const squared = document.querySelectorAll("div");

function randomColor(length) {   
    result = '';
    
    const charactersLength = characters.length;
    for ( let i = 0; i < 6; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    const coloring = document.querySelector('h2');
    coloring.textContent = "#"+ result;
    coloring.style.color = result;

    squared[1].style.backgroundColor = result;   

    return result;
}

function saveColor() {
    squared[3].style.backgroundColor = result;
    const saving = document.querySelector("h4");
    saving.textContent = "#" + result;
    saving.style.color = result;
}