const Display = document.getElementById("Display");

function AppendtoDisplay(input){
    Display.value += input;
}

function Calculate(){
    Display.value = eval(Display.value);
}

function Reset(){
    Display.value = "";
}