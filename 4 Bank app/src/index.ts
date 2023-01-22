#! /usr/bin/env node
import inquirer from "inquirer";

console.clear();

console.log("+++++++++++++++++++++++");
console.log("| Welcome to Our Bank |");
console.log("+++++++++++++++++++++++\n");

let users = {
  bilal: {
    password: "xyz",
    balance: 1000,
  },
  sohaib: {
    password: "abc",
    balance: 5000,
  },
  azeem: {
    password: "dba",
    balance: 7000,
  },
};

async function login() {
  console.log("\nEnter Your Credentials\n");
  let answers = await inquirer.prompt([
    {
      name: "name",
      type: "input",
      message: "Enter your username:",
    },
    {
      name: "password",
      type: "input",
      message: "Enter your password:",
    },
  ]);

  let username: string = answers.name;
  let password = answers.password;

  let validUser = true;
  if (!users.hasOwnProperty(username)) {
    validUser = false;
  } else {
    let user = eval(`users["${username}"]`);
    if (user.password != password) {
      validUser = false;
    }
  }

  if (validUser) {
    console.log(`\nWelcome ${username}`);
    askUserWhatToDo(username);
  } else {
    console.log("\nInvalid User\n");
    login();
  }
}

login();

async function askUserWhatToDo(user: string) {
  console.log("\n");
  let answers = await inquirer.prompt([
    {
      name: "choice",
      type: "list",
      message: "Select Options:",
      choices: ["check balance", "withdraw", "transfer", "logout"],
    },
  ]);
  let choice = answers.choice;
  if (choice == "check balance") {
    balanceCheck(user);
  } else if (choice == "withdraw") {
    withdraw(user);
  } else if (choice == "transfer") {
    transfer(user);
  } else if (choice == "logout") {
    login();
  }
}

function balanceCheck(username: string) {
  console.log("\n");
  let user = eval(`users["${username}"]`);
  console.log(`${username}, Your balance is ${user.balance}\n`);
  askUserWhatToDo(username);
}
async function withdraw(username: string) {
  console.log("\n");
  let user = eval(`users["${username}"]`);
  let answers = await inquirer.prompt([
    {
      name: "amount",
      type: "number",
      message: "Enter the amount you want to withdraw:",
    },
  ]);
  let amount = answers.amount;
  if (amount <= user.balance) {
    user.balance -= amount;
    console.log("Success\n");
    askUserWhatToDo(username);
  } else {
    console.log("Your balance is less\n");
  }
}

async function transfer(username: string) {
  console.log("\n");
  let user = eval(`users["${username}"]`);
  let answers = await inquirer.prompt([
    {
      name: "account",
      type: "input",
      message: "Enter the account username:",
    },
    {
      name: "amount",
      type: "number",
      message: "Enter the amount you want to transfer:",
    },
  ]);
  let receiver_username = answers.account;
  let receiver_amount = answers.amount;

  if (users.hasOwnProperty(receiver_username)) {
    console.log("\nreceiver found\n");
    if (receiver_amount <= user.balance) {
      let receiver = eval(`users["${receiver_username}"]`);
      user.balance -= receiver_amount;
      receiver.balance += receiver_amount;
      console.log("Success\n");
      askUserWhatToDo(username);
    } else {
      console.log("Your balance is less\n");
    }
  } else {
    console.log("receiver not found\n");
  }
}
