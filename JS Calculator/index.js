// <⚠️ DONT DELETE THIS ⚠️>
// import "styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
// const calculatorDiv=document.querySelector(".calculator");
// const calculatorColumn=calculatorDiv.querySelectorAll(".calculator__column");
const buttons = document.querySelectorAll("button");
const result=document.querySelector(".result");

let currentOper="";
let currentVal=0;
let checknum=false;
let checkequal =false;

function NumberBtn(number){
    if (currentOper!=""){
        if(checknum){
            if (checkequal===true){
                result.innerHTML="";
                result.innerHTML += number;
                checkequal=false;
            }
            else{
                result.innerHTML += number;
            }
        }
       else{
           result.innerHTML="";
           result.innerHTML += number;
           checknum=true;
       }
    }
    else{
        if (checkequal===true){
            result.innerHTML="";
            result.innerHTML += number;
            checkequal=false;
        }
        else{
            result.innerHTML += number;
        }
    }
    // result.innerHTML += number;
}

function OperatorBtn(oper){
    let displayVal=result.innerHTML;
    if(currentOper===""){
        currentVal=Number(displayVal);
    }
    else{
        alert("Error!!!");
        // currentVal=Calculate(currentOper,currentVal,displayVal);
    }
    // result.innerHTML="";
    // tempResult=result.
    currentOper = oper;
    checknum=false;
}
function Equal(){
    if(result.innerHTML===""){
        Reset();
        return;
    }
    if(checknum===false){
        return;
    }
    let displayValue=result.innerHTML;
    result.innerHTML=Calculate(currentOper,currentVal,displayValue);
    currentOper="";
    checkequal=true;
}

function Reset(){
    result.innerHTML="";
    currentOper="";
    currentVal=0;
}
function Dot(){
    let disValue=result.innerHTML;
    if(!disValue.includes(".")){
        let addvalue=disValue+".";
        result.innerHTML=addvalue;
    }
}

function Calculate(_Oper,_currentVal,_Val){
    const curVAL = Number(_currentVal);
    const __VAL=Number(_Val);
    if (_Oper === "+"){
        return curVAL + __VAL;
    }
    else if (_Oper === "-"){
        return curVAL - __VAL;
    }
    else if (_Oper === "/"){
        return curVAL /__VAL;
    }
    else if (_Oper === "*"){
        return curVAL * __VAL;
    }
}

function init(){

    buttons.forEach(function(button){
       
       button.addEventListener("click",function(){
            const Btntype=button.getAttribute("datatype");
            // 버튼 타입이 operation +-*/
            if (Btntype==="operations"){
                const oper=button.innerText;
                OperatorBtn(oper);
            }
            // 버튼 타입이 C
            else if(Btntype=="reset"){
                Reset();
            }
            // 버튼 타입이 =
            else if(Btntype =="equal")
            {
                Equal();
            }
            else if(Btntype=="dot"){
                Dot();
            }
            // 버튼 타입 number
            else{
                const number=button.innerText;
                NumberBtn(number);
            }
       })
    });
}

init();


// let ShowNumber=""
// let operCheck=false;
// let NumberCheck=false;
// let equalCheck=false;


// function CalNumber(number){
//     operCheck=false;
//     // console.log(ShowNumber);
//     const CurrentNumber=result.innerHTML;
//     console.log("current :",CurrentNumber);
//     // 계산 계속 하는 경우
//     if(equalCheck){
//         //  9 --> 8  이런 경우.
//         if(!NumberCheck){
//             if(CurrentNumber==="0"){
//                 result.innerHTML=`${number}`;
//             }
//             else{
//                 // const tempNumber=CurrentNumber+number;
//                 const tempNumber=CurrentNumber+number;
//                 console.log(tempNumber);
//                 result.innerHTML=`${tempNumber}`;
//             }
//         }
//         // + -> 9  or 9
//         else{
//             NumberCheck=false;
//             result.innerHTML=`${number}`;
//             // operCheck=false;
//         }
//         ShowNumber+=number;
//         // console.log(ShowNumber);
//     }
//     // 계산 끝난 경우
//     else{
//         console.log(ShowNumber);
//         equalCheck=true;
//         result.innerHTML=`${number}`;
//         ShowNumber=number;
//     }
// }

// function Operator(oper){
//     // 연산자 앞에 숫자가 아닌 경우
//     if(operCheck){
//         alert("ERROR!")
//     }
//     else{
//         operCheck=true;
//         NumberCheck=true;
//         ShowNumber+=oper;
//     }
// }

// function Reset(){
//     result.innerHTML="0"
//     ShowNumber="";
//     operCheck=false;
//     equalCheck=true;
    
// }

// function Calculation(){
//     const resultNumber=eval(ShowNumber);
//     if(result.innerHTML=="0"){
//         Reset();
//     }
//     else{
//         if(operCheck){
//             alert("Error!")
//         }
//         else{
//             if(equalCheck){
//                 result.innerHTML=`${resultNumber}`;
//                 ShowNumber="";
//                 equalCheck=false;
//                 operCheck=false;
                
//             }
//             else{
//                 Reset();
//             }
//         }
//     }
// }

