#! /usr/bin/env node
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";

console.clear();

let difficultyLevel = 10;

let welcome = chalkAnimation.karaoke("\nWelcome to my Guess Game\n");
setTimeout(() => {
  welcome.stop();
  startOver();
}, 2300);

function startOver() {
  askUserChoice().then((c) => {
    let choice: string = c.choice;
    switch (choice) {
      case "Play Game!":
        let randomNum = Math.floor(Math.random() * difficultyLevel) + 1;
        console.log("\nGOOD LUCK :)\n");
        play(randomNum);
        break;

      case "Difficulty Level":
        setDifficultyLevel();
        break;

      case "How to play?":
        console.log(
          `\nComputer will think of a number\nand you have to guess it right\nNumber will be between \n1-10 - Easy mode\n1-20 - Medium mode\n1-30 - Hard mode\n`
        );
        startOver();
        break;

      case "Exit":
        let goodbye = chalkAnimation.karaoke("\nThanks for paying us visit!\n");
        setTimeout(() => {
          goodbye.stop();
        }, 2500);
        break;
    }
  });
}

function setDifficultyLevel() {
  console.log("\n");
  askDifficultyLevel().then((c) => {
    let level: string = c.level;
    switch (level) {
      case "Easy":
        difficultyLevel = 10;
        break;

      case "Medium":
        difficultyLevel = 20;
        break;

      case "Hard":
        difficultyLevel = 50;
        break;
    }

    console.log("\n");
    startOver();
  });
}

function play(randomNo: number) {
  askForInput().then((c) => {
    let userGuess: number = c.num;

    if (Number.isNaN(userGuess)) {
      console.log("\nPlease enter a valid number\n");
      play(randomNo);
    } else {
      if (userGuess === randomNo) {
        console.log("\nCongrats mate!\nYou got it right :)\n");
        startOver();
      } else if (userGuess > randomNo) {
        console.log("Oops! Maybe a bit lower!");
        play(randomNo);
      } else if (userGuess < randomNo) {
        console.log("Oops! Maybe a bit higher!");
        play(randomNo);
      }
    }
  });
}

async function askUserChoice() {
  return await inquirer.prompt([
    {
      name: "choice",
      message: "MENU:",
      type: "list",
      choices: ["Play Game!", "Difficulty Level", "How to play?", "Exit"],
    },
  ]);
}

async function askForInput() {
  return await inquirer.prompt([
    {
      name: "num",
      message: `Guess the number in my mind (1-${difficultyLevel}):`,
      type: "number",
    },
  ]);
}

async function askDifficultyLevel() {
  return await inquirer.prompt([
    {
      name: "level",
      message: "Choose Difficulty Level:",
      type: "list",
      choices: ["Easy", "Medium", "Hard"],
    },
  ]);
}
