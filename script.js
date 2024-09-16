const rest =document.getElementById("rest");
const buttons=document.getElementById("buttons");

function appendToDisplay(input){
    rest.value+=input;
}

function clearDisplay(){
    rest.value=" ";
}

function calculate(){
    try{
        rest.value=eval(rest.value);
    }
    catch(E){
        rest.value=`invalid Syntax!`
    }
  
}