var problemSelected =
document.getElementById('selectProblem');
//default index
var problemIndex = 1;
//inputs
number1 = document.getElementById('number1');
number2 = document.getElementById('number2');
//h2 text
var titleOfProblem =
document.getElementById('titleOfProblem');
//form
var form = document.getElementById('problemToResolve');
var resultText = document.getElementById('resultText');

function selection(){
  var problemText = problemSelected.options[problemSelected.selectedIndex].text;
  problemIndex = problemSelected.value;
  //alert(problemText+" "+problemIndex);
  titleOfProblem.innerText = problemText;
};
//OJO NO ACTUALIZA!!!
function Calculate(){
  console.log("ADENTRO");
  var x = parseFloat(number1.value);
  var y = parseFloat(number2.value);
  var result;
  var p;
  console.log(problemIndex);
  i = parseInt(problemIndex);
  switch (i) {
    case 1:
        console.log("case 1");
        result = (y * x)/100;
        resultText.innerText =
        "Answer: "+result+" is " + y + "% "+" of "+x;
      break;
    case 2:
        console.log("case 2");
        p = x/100;
        //p = p/100;
        result = y / p;
        resultText.innerText =
        "Answer: "+y+" is "+x+" % of " + result;
      break;
    case 3:
        p = y/100;
        result = p*x;
        resultText.innerText =
        "Answer: "+y+"% of "+x+" is "  + result;
      break;
    case 4:
        p = x/100;
        result =  y/p;
        resultText.innerText =
        "Answer: "+x+"% of "+y+" is "  + result;
      break;
    case 5:
        console.log("case 5");
        p = y/100;
        result = p*x;
        resultText.innerText =
        "Answer: "+y+"% of "+x+" is "  + result;
      break;
    default:

  }
}

/*
form.addEventListener('submit', function(event){
  var x = parseFloat(number1.value);
  var y = parseFloat(number2.value);
  var result;
  console.log(problemIndex);
  switch (problemIndex) {
    case 1:
        console.log("case 1");
        result = (y * x)/100;
        resultText.innerText =
        "Respuesta: "+result+" is " + y + "% "+" of "+x;
      break;
    case 2:
        console.log("case 2");
        var p = x/y;
        p = p/100;
        result = x / p;
        resultText.innerText ="Respuesta: " + result;
      break;
    case 3:

      break;
    case 4:

      break;
    case 5:

      break;
    default:

  }
  event.preventDefault();
});*/
