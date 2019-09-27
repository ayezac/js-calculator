let storedValue = ''
let result = '0'


function isOperator(value){
    return (value ==='*'||value==='/'||value==='*'||value==='-'||value=='+'||value==='%'||value==='=')
}

function isEmptyScreen(){
    return document.getElementById("screen").value === ''
}

function isDisplayingResult(){
    return document.getElementById("screen").value == result;  
}

function displayValue(val){
    let display = document.getElementById("screen")
    //if first input is an operator return an empty string;
    if(isEmptyScreen() && isOperator(val)){
            display.value ='';
        }
        //if the result is displayed and the next input is not an operator
    else if(isDisplayingResult() && !isOperator(val)){
        result = '0';
        storedValue = val;
        display.value = val;
    }
    else {
        storedValue += val;
        display.value += val;
    }
}

function clearScreen(val){
    let display = document.getElementById("screen")
    storedValue='';
    currentValue = '';
    display.value = val;
}


function getResult(){
    let display = document.getElementById("screen")
    if(isEmptyScreen()){
        display.value = '';
    }
    //using the JS eval function
    else {
        result = eval(storedValue)
        display.value = result;
        storedValue=result;
    }
}

function getPercentage(){
    let x = document.getElementById("screen");
    let y = eval(x.value);
    if(isEmptyScreen()){
        x.value = '';  
    }
    else{
        result = y/100
        x.value = result;
        storedValue=result;  
    };
}

