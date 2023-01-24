let btnArray = document.querySelectorAll(".focus");
let input = document.getElementById("display");
let deleteBtn = document.getElementById("delete");
let resetBtn = document.getElementById("reset");
let equalsBtn = document.getElementById("equal");

let add = document.getElementsByClassName("addition");
let subtract = document.getElementsByClassName("subtraction");
let multiply = document.getElementsByClassName("multiply");
let divide = document.getElementsByClassName("divide");
let modulo = document.getElementsByClassName("mod");

let string = "";
// console.log (btn[2]);
btnArray.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        // input.focus();
        console.log(e.target);
        string = string + e.target.value;
        input.value = string;
        // console.log(btn.innerHTML);
        input.focus();
        console.log(e.target.innerHTML)
    })
})
 deleteBtn.addEventListener("click",()=>{
    input.focus();
    string = input.value.toString().slice(0,-1);
    input.value = string;
    input.focus();
    
})
resetBtn.addEventListener("click",()=>{
    string = "";
    input.value = string;
})
equalsBtn.addEventListener("click",()=>{
    string = eval(input.value);
    input.value = string; 
    string == "0" ? string = "" : string = string;
})
add[0].addEventListener("click",()=>{
    string = string + "+";
    input.value = string; 
    input.focus();
})
subtract[0].addEventListener("click",()=>{
    string = string + "-";
    input.value = string; 
    input.focus();
})
multiply[0].addEventListener("click",()=>{
    string = string + "*";
    input.value = string; 
    input.focus();
})
divide[0].addEventListener("click",()=>{
    string = string + "/";
    input.value = string; 
    input.focus();
})
modulo[0].addEventListener("click",()=>{
    string = string + "%";
    input.value = string; 
    input.focus();
})
