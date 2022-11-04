

function generateNumber() {
  // generate a random integer(hint : Math.random)
  var num = Math.floor(Math.random() * 101);
  document.querySelector("#number").innerHTML=num;
  console.log(num)
  checkOddEven(num)
}

function checkOddEven(num) {
  // logic for even / odd
  
  if(num%2==0)
  {
    document.querySelector("#odd-even").innerHTML="Even - The number is even"
  }
  else{
    document.querySelector("#odd-even").innerHTML="Odd - The number is odd"
  }
  
}

window.onload = function () {
  // add event listeners to the button here
  var button = document.querySelector("#generate-number");
button.addEventListener("click",generateNumber);

};

// donot change the following export statement

if (typeof exports !== "undefined") {
  module.exports = {
    generateNumber,
    checkOddEven,
  };
}
