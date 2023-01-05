#! /usr/bin/env node
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";

console.clear();

let welcome = chalkAnimation.karaoke("\nWelcome to my calculator\n");
setTimeout(() => {
  welcome.stop();
  startOver();
}, 2300);

function startOver() {
  askForInputs().then((inputs) => {
    let num1 = inputs.num1;
    let num2 = inputs.num2;
    if (Number.isNaN(num1) || Number.isNaN(num2)) {
      console.log("\nPlease enter a valid number\n");
      startOver();
    } else {
      console.log("\n");
      calculate(num1, num2);
    }
  });
}

function calculate(num1: number, num2: number) {
  askUserChoice().then((a) => {
    let choice = a.choice;
    switch (choice) {
      case "Addition":
        console.log(`\n${num1} + ${num2} = ${num1 + num2}\n`);
        break;

      case "Multiplication":
        console.log(`\n${num1} * ${num2} = ${num1 * num2}\n`);
        break;

      case "Subtraction":
        console.log(`\n${num1} - ${num2} = ${num1 - num2}\n`);
        break;

      case "Division":
        console.log(`\n${num1} / ${num2} = ${(num1 / num2).toFixed(3)}\n`);
        break;
    }

    askForRestart().then((a) => {
      let choice = a.choice;
      switch (choice) {
        case "Yes":
          console.log("\n");
          startOver();
          break;

        case "No":
          console.log("\nThank you for using my calculator\n");
          break;
      }
    });
  });
}

async function askForInputs() {
  return await inquirer.prompt([
    {
      name: "num1",
      message: "Enter number 1:",
      type: "number",
    },
    {
      name: "num2",
      message: "Enter number 2:",
      type: "number",
    },
  ]);
}

async function askUserChoice() {
  return await inquirer.prompt([
    {
      name: "choice",
      message: "Choose your operation:",
      type: "list",
      choices: ["Addition", "Multiplication", "Subtraction", "Division"],
    },
  ]);
}

async function askForRestart() {
  return await inquirer.prompt([
    {
      name: "choice",
      message: "Do you want to perform another operation?",
      type: "list",
      choices: ["Yes", "No"],
    },
  ]);
}
