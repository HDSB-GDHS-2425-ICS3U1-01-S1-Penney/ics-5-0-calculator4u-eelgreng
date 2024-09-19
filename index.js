let num1;
let operator;
let num2;
let result;

function Calculator() {
    num1 = parseFloat(prompt("Enter First Number"));
    operator = prompt("Choose An Operation");
    num2 = parseFloat(prompt("Enter Second Number"));


    if (operator == 'add') {
        result = num1 + num2;
    }

    else if (operator == 'subtract') {
        result = num1 - num2;
    }

    else if (operator == 'multiply') {
        result = num1 * num2;
    }

    else if (operator == 'divide')
        if (num2 != 0) {
            result = num1 / num2;
        }
    if (num2 == 0) {
        result = "Error: Division by zero!";
    }


    console.log("Result:" + result);
}

Calculator();
