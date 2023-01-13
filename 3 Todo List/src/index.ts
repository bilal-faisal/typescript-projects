#! /usr/bin/env node
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";

console.clear();

let tasks: string[] = [];

let welcome = chalkAnimation.karaoke("\nWelcome to Todo List\n");
setTimeout(() => {
  welcome.stop();
  startOver();
}, 2000);

function startOver() {
  askUserChoice().then((c) => {
    let choice: string = c.choice;
    switch (choice) {
      case "Add Task":
        addTask();
        break;

      case "Show Tasks":
        showTasks();
        break;

      case "Edit Task":
        editTask();
        break;

      case "Remove Task":
        removeTask();
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

function addTask() {
  askForTask().then((c) => {
    let newTask: string = c.task;
    tasks.push(newTask);
    let newTaskId: number = tasks.length;
    console.log(`\nTask Added\n`);
    startOver();
  });
}
async function askForTask() {
  return await inquirer.prompt([
    {
      name: "task",
      message: `Add New Task:`,
      type: "input",
    },
  ]);
}

async function askUserChoice() {
  return await inquirer.prompt([
    {
      name: "choice",
      message: "MENU:",
      type: "list",
      choices: ["Add Task", "Show Tasks", "Edit Task", "Remove Task", "Exit"],
    },
  ]);
}

function showTasks() {
  console.log("\n");
  if (tasks.length === 0) {
    console.log("Your todo list is empty!");
  } else {
    tasks.forEach((task, id) => {
      console.log(`${id + 1}: ${task}`);
    });
  }
  console.log("\n");
  startOver();
}

function editTask() {
  askForId("edit").then((c) => {
    let editId = c.id;
    if (editId > 0 && editId <= tasks.length) {
      getupdatedTask().then((c) => {
        let updatedTask = c.task;
        tasks[editId - 1] = updatedTask;
        console.log("\nTask Edited Successfully!\n");
        startOver();
      });
    } else {
      console.log(`\nNo task with id ${editId} exists.\n`);
      startOver();
    }
  });
}

function removeTask() {
  askForId("remove").then((c) => {
    let delId = c.id;
    if (delId > 0 && delId <= tasks.length) {
      // confirmation
      confirmDel().then((c) => {
        let choice = c.choice;
        if (choice === "yes") {
          tasks.splice(delId - 1, 1);
          console.log("\nTask Deleted Successfully!\n");
          startOver();
        } else {
          console.log("\nTask Deletion Terminated\n");
          startOver();
        }
      });
    } else {
      console.log(`\nNo task with id ${delId} exists.\n`);
      startOver();
    }
  });
}

async function askForId(operation: string) {
  return await inquirer.prompt([
    {
      name: "id",
      message: `Enter Task id you want to ${operation}:`,
      type: "number",
    },
  ]);
}
async function confirmDel() {
  return await inquirer.prompt([
    {
      name: "choice",
      message: `Enter Task id you want to delete:`,
      type: "list",
      choices: ["yes", "no"],
    },
  ]);
}

async function getupdatedTask() {
  return await inquirer.prompt([
    {
      name: "task",
      message: `Update your task:`,
      type: "input",
    },
  ]);
}
