//get display input elem
const display = document.getElementById("display");
let displayValue = "";

//get button 
const buttons = document.querySelectorAll("button");
for(const key of buttons){
    key.addEventListener("click",function(event){
        // console.log(event.target.innerText);
        let buttonText = event.target.innerText;
          if(buttonText == "x"){
              buttonText = "*"
            displayValue += buttonText;
            display.value = displayValue;
        }
        else if(buttonText == "C"){
           let displayNumber = display.value;
          let removeLastItem = displayNumber.slice(0,-1);
          displayValue = removeLastItem;
           display.value = displayValue;
        }
        else if(buttonText == "AC"){
            buttonText = "";
            displayValue = buttonText;
            display.value = displayValue;
        }
        else if(buttonText == "="){
            displayValue = eval(displayValue);
            display.value = displayValue;
        }
       
        else{
            displayValue += buttonText;
            display.value = displayValue ;
        }


    })
}