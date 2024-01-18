import inquirer from "inquirer";
import chalk from "chalk"
import chalkAnimation from "chalk-animation"

const sleep=()=>{
  return new Promise((res)=>{
    setTimeout(res,2000)
  })
}
async function welcome(){
  let rainbowTitle= chalkAnimation.karaoke(`--Lets start Calculation--`)
  await sleep()
  rainbowTitle.stop()
}
welcome()
async function calculator() {
  await inquirer
    .prompt([
      {
        type: "list",
        name: "operator",
        message: "Enter your operator",
        choices: ["Addition", "Substract", "Multiplication", "Division"],
      },
      {
        type: "number",
        name: "num1",
        message: "Enter your first number",
      },
      {
        type: "number",
        name: "num2",
        message: "Enter your second number",
      },
    ])
    .then((answers) => {
      //console.log(answers)
      if (answers.operator == "Addition") {
        console.log(
          `${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`
        );
      } else if (answers.operator == "Substract") {
        console.log(
          `${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`
        );
      } else if (answers.operator == "Multiplication") {
        console.log(
          `${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`
        );
      } else if (answers.operator == "Division") {
        console.log(
          `${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`
        );
      }
    });
}
calculator()

async function startAgain(){
  do{
    await calculator()
    var again = await inquirer
    .prompt({
      type:"input",
      name:"restart",
      message:"Do you want to continue? press y or n"
    })
  }while(again.restart=="Y"||again.restart=="y"||again.restart=="yes"||again.restart=="YES")
}
startAgain()