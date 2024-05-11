//calcuclator function
const display = document.getElementById("display");


function appendToDisplay(input){
    display.value += input;

}

function clearDisplay(){
    display.value = "";

}

function calculate(){

    try{
    display.value = eval(display.value);
}
catch(error){
    display.value = "Error!";
}
}

function changeStyle(){
    document.body.style.backgroundColor = 'green';
}
    //document.getElementById("keys").style.color = "yellow";document.getElementById("keys").style.color = "yellow";

    function changeColor() {
        var colors = document.getElementById("display");
        colors.style.color = "green";}

    function calcuclator() {
        var backgroundColor = document.getElementById("calculator")
        backgroundColor.style.backgroundColor = 'blue';
    }