const characters ='0123456789ABCDEF';
let wait = "??????";
document.body.innerHTML = document.body.innerHTML.replace("?", wait);

let resultTyped = '';

function randomColor(length) {   
    result = '';
    
    const charactersLength = characters.length;
    for ( let i = 0; i < 6; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    document.body.innerHTML = document.body.innerHTML.replace(wait, result);
    document.getElementById("color").style.color = result;
}

function getYourColor() {
    let getColor = document.getElementById("yourColor");
    resultTyped = getColor.value;

    document.body.innerHTML = document.body.innerHTML.replace("??????", resultTyped);
    document.getElementById("getHere").style.color = resultTyped;
}