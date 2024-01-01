import inquirer from "inquirer";
function main() {
    inquirer
        .prompt([
        { type: "input", name: "num1", meassage: "Enter first number" },
        { type: "input", name: "num2", meassage: "Enter second number" },
        {
            type: "list",
            name: "operator",
            choices: ["+", "-", "*", "/"],
            meassage: "Enter your operator",
        },
    ])
        .then((answers) => {
        console.log(answers);
        /*if (operator == "+") {
          sum(num1, num2);
        } else if (operator == "-") {
          substract(num1, num2);
        } else if (operator == "*") {
          multiplication(num1, num2);
        } else if (operator == "/") {
          division(num1, num2);
        } else {
          console.log("Invalid Operator");
        }*/
        // Use user feedback for... whatever!!
    })
        .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        }
        else {
            // Something else went wrong
        }
    });
}
function sum(num1, num2) {
    const result = num1 + num2;
    console.log("Sum", result);
}
function substract(num1, num2) {
    const result = num1 - num2;
    console.log("Substraction", result);
}
function multiplication(num1, num2) {
    const result = num1 * num2;
    console.log("Multiply", result);
}
function division(num1, num2) {
    const result = num1 / num2;
    console.log("Divide", result);
}
main();
