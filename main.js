const characters ='0123456789ABCDEF';
let wait = "??????";
document.body.innerHTML = document.body.innerHTML.replace("?", wait);

function randomColor(length) {   
    result = '';
    
    const charactersLength = characters.length;
    for ( let i = 0; i < 6; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    document.body.innerHTML = document.body.innerHTML.replace(wait, result);
    document.getElementById("color").style.color = result;
}