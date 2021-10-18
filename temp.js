let initialBill = document.getElementById("initial-bill").value; //number
let numberOfPerson =document.getElementById("number-of-person").value; //number
let radios=document.getElementsByName("tipPercent"); // radio nodeList

let tipAmount =document.getElementById("tip-amount");//element
let totalAmount = document.getElementById("total-amount") //element
let submitBtn = document.getElementById("submit");
let percent;


 function getTipPercent(){

    radios.forEach(radio =>{
        radio.addEventListener('click',function(){
            percent= radio.value;
        });
    });
 
 }
 let tipPercent = getTipPercent(); //number

 tipAmount.innerHTML=tipPercent;

// function calculateBill(a,b,c){
//     let tip = (a*b)/100;
//     let totalBill = (a+tip)*c;

//     // set values to tip amount and total amount elements

//     tipAmount.innerHTML="tip";
//     totalAmount.innerHTML= totalBill;

// }

// submitBtn.addEventListener('click',function(){
//     calculateBill(initialBill,tipPercent,numberOfPerson);
// });



// let radios=document.getElementsByName("tipPercent");
// let tipAmount = document.getElementById("tipAmount");
// let selectedPercentageDiv = document.getElementsByClassName("percent-item");
// radios.forEach(element => {
//     element.addEventListener('click',function(){
//         element.setAttribute("checked","true");
//      for (let i = 0; i < selectedPercentageDiv.length; i++) {
//          if(selectedPercentageDiv[i].firstElementChild.getAttribute("checked")){
//             selectedPercentageDiv[i].classList.add("percent-item-selected");
//          }    
//      }
//     })
// });

// let radios=document.getElementsByName("tipPercent");
// let tipAmount = document.getElementById("tipAmount");
// radios.forEach(radio =>{
//     radio.onclick = function(){
//         tipAmount.innerHTML= this.value;
//     }
// })