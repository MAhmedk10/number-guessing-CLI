#! /usr/bin/env node
import inquirer from "inquirer";
// 1) computer will generate a number, done
// 2) user input for guessing number, done
// 3) compare user input with computer generated number and show result
let randomNumber = Math.floor(Math.random() * 6 + 1);
const number = await inquirer.prompt([
    {
        name: "guessednumber",
        type: "number",
        message: "Please guess a number between 1-6: ",
    },
]);
if (number.guessednumber === randomNumber) {
    console.log(`Congratulations! You guessed the right number`);
}
else {
    console.log("you guessed a wrong number, Please try again");
}
