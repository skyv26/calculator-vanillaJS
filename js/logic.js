
let digits="";
let loggerText="";
let finalResult=0;
let operationButton=false;
let point_onetime=true;
// let string_expression="25*10-50+100/3"

const integerList=[];
const clr_btn = () => {
    document.getElementsByClassName("button-dot")[0].disabled=false;
    document.querySelector(".out-val span").innerHTML="0";
    document.querySelector(".logger span").innerHTML="";
    loggerText="";  
    digits="";
    finalResult=0;
}

const customCal = (string_expression) => {
    return Function(`'use strict'; return (${string_expression})`)();
}

const result = () => {
    let data;
    loggerText+=digits;
    data=customCal(loggerText).toFixed(6);
    if(data.toString().split(".")[1]=="000000"){
        document.querySelector(".out-val span").innerHTML=data.toString().split(".")[0];
    }
    else{
        if(data.toString().split(".")[0].length>6){
            data=customCal(loggerText).toFixed(3);
        }
        document.querySelector(".out-val span").innerHTML=data;
    }
}


const input_val = (object) => {
    if(object.innerHTML=="."){
        document.getElementsByClassName("button-dot")[0].disabled=true;
    }
    digits+=object.innerHTML;
    document.querySelector(".logger span").innerHTML+=object.innerHTML;
    document.querySelector(".out-val span").innerHTML=digits;
    operationButton=true;
}


const additions = (object) => {
    document.getElementsByClassName("button-dot")[0].disabled=false;
    if(digits.length==0){
        // console.log("Please enter number");
        return;
    }
    loggerText+=digits+object.innerHTML;
    digits="";
    document.querySelector(".logger span").innerHTML=loggerText;
}

const substractions = (object) => {
    document.getElementsByClassName("button-dot")[0].disabled=false;
    point_onetime=true;
    if(digits.length==0){
        // console.log("Please enter number");
        return;
    }    
    loggerText+=digits+object.innerHTML;
    digits="";
    document.querySelector(".logger span").innerHTML=loggerText;
}

const divides = (object) => {
    document.getElementsByClassName("button-dot")[0].disabled=false;
    point_onetime=true;
    if(digits.length==0){
        // console.log("Please enter number");
        return;
    }
    loggerText+=digits+object.innerHTML;
    digits="";
    document.querySelector(".logger span").innerHTML=loggerText;

}

const percentages = (object) => {
    document.getElementsByClassName("button-dot")[0].disabled=false;
    point_onetime=true;
    if(digits.length==0){
        // console.log("Please enter number");
        return;
    }
    loggerText+=digits+object.innerHTML;
    digits="";
    document.querySelector(".logger span").innerHTML=loggerText;
}

const multiplys = (object) => {
    document.getElementsByClassName("button-dot")[0].disabled=false;
    point_onetime=true;
    if(digits.length==0){
        // console.log("Please enter number");
        return;
    }
    loggerText+=digits+object.innerHTML;
    digits="";
    document.querySelector(".logger span").innerHTML=loggerText;
}

document.getElementsByClassName("button-clear")[0].addEventListener('click',clr_btn);