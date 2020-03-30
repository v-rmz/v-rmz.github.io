function multiplyBy()
{ var num1,num2;
        num1 = document.getElementById("firstInput").value;
        num2 = document.getElementById("secondInput").value;
        window.alert("result: " + (num1* num2));
}

function divideBy()
{
        num1 = document.getElementById("firstInput").value;
        num2 = document.getElementById("secondInput").value;
        document.getElementById("result").innerHTML = "result: " + num1 / num2;
}
