var calculation=[];
var i=0, j=0, k=1;
var numbers=[];
var operators=[];
var entireEquation=" ";
var entireEquation1=" ";
var count=0;
var result=0;


$(".btn").click(function()
{   
    $("hr").removeClass("hrheight");
    var buttonPressed=$(this).attr("id");
    var buttonPressedClass=$(this).attr("class");
    calculation.push(buttonPressed);
    // console.log(calculation);
    if($("#reset").attr("id")==buttonPressed) //comparing ids to reset if AC is pressed
    {
       startOver(); 
    }
    else
    {
        calculate(buttonPressed,buttonPressedClass); //to show value on screen
    }
});

function startOver() //resetting the calculator
{
    $("hr").addClass("hrheight");

    i=0;j=0,count=0;
    calculation=[];
    i=0, j=0, k=1;
    numbers=[];
    operators=[];
    entireEquation=" ";
    entireEquation1=" ";
    $(".para").text(entireEquation);
    $(".para1").text(entireEquation1);
    count=0;
    result=0;
}

function calculate(buttonPressed,buttonPressedClass) //Lower and Upper line of the calculator for display
{
    entireEquation=entireEquation + (calculation[i]);  //lower line
    entireEquation1=entireEquation1 + (calculation[i]);  //upper line
    i++;
    if(calculation.length==0)
    {
        $("hr").addClass("hrheight");
    }

    if($(".sign").attr("class")==buttonPressedClass || $("#equals").attr("id")==buttonPressed)
    {
        $(".para").text(entireEquation);
        num1=parseFloat(entireEquation1);
        numbers[count]=num1;
        operators[count]=buttonPressed;
        entireEquation1="";
        console.log(numbers);
        console.log(operators);
        count++;
    }

    else
    {
        $(".para").text(entireEquation);
        $(".para1").text(entireEquation1);
    }

    if($("#equals").attr("id")==buttonPressed || count==2)
    {
        var op=operators.shift();
        switch(op)
        {
            case "+":
                result=numbers[k-1]+numbers[k];
                entireEquation1=result;
                $(".para1").text(entireEquation1);
                break;
            case "-":
                result=numbers[k-1]-numbers[k];
                entireEquation1=result;
                $(".para1").text(entireEquation1);
                break;
            case "x":
                result=numbers[k-1]*numbers[k];
                entireEquation1=result;
                $(".para1").text(entireEquation1);
                break;
            case "÷":
                result=numbers[k-1]/numbers[k];
                entireEquation1=result;
                $(".para1").text(entireEquation1);
                break;  
            case "%":
                result=(numbers[k-1]/numbers[k])*100;
                entireEquation1=result;
                $(".para1").text(entireEquation1);
                break;  
        }
        k++;
        numbers[0]=result;
        count=1;
    }
}

$(document).keydown(function(event){
    console.log(event.key);
})


// Work left 
// Working the calculator using keyboard
// Get backspace working

// Possible solution, take last element and check if number, if it is then we pop the value from numbers and when the number is typed and operator is entered it will give the vorrect value of number
// If it is not a digit then we pop from operator and when new operator is added it will push it using further code already written.

// change the line equals with symbol


// function calculate(buttonPressed,buttonPressedClass) //Lower and Upper line of the calculator for display
// {
//     entireEquation=entireEquation + (calculation[i]);  //lower line
//     entireEquation1=entireEquation1 + (calculation[i]);  //upper line
//     i++;
//     if($("#backspace").attr("id")==buttonPressed)    // Backspace to remove last number entered in array
//     {
//        calculation.pop();
//        calculation.pop();
//         entireEquation=" ";
//         entireEquation1=" ";
//        for(var val=0;val<calculation.length;val++)
//        {
//             entireEquation= entireEquation + calculation[val];
//             entireEquation1=entireEquation1 + calculation[val];
//        }
//        i=i-2;
//        $(".para").text(entireEquation);
//        $(".para1").text(entireEquation1);
//         if(calculation.length==0)
//         {
//             $("hr").addClass("hrheight");
//         }
//     }

//     else if($(".sign").attr("class")==buttonPressedClass)
//     {
//         $(".para").text(entireEquation);
//         num1=parseFloat(entireEquation1);
//         numbers[count]=num1;
//         operators[count]=buttonPressed;
//         entireEquation1="";
//         console.log(numbers);
//         console.log(operators);
//         count++;
//     }

//     else
//     {
//         $(".para").text(entireEquation);
//         $(".para1").text(entireEquation1);
//     }
// }