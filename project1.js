let display = document.getElementById("display");
let result;
function input(value) {
    if (value == 'clear') {
        display.value = '';    }
    else if(value=='delete') {
        let str=display.value;
        let len=str.length;
        display.value=str.substring(0, len-1);
    }
    else {
        display.value += value;
    }
}
function output() {
    display.value = eval(display.value);
}
function clear() {
    display.value = '';
}
function leftbracket() {
    display.value+='(';
}
function rightbracket() {
    display.value+=')';
}