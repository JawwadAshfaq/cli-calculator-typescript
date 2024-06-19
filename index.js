#! /usr/bin/env node 
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter your First Number", type: "number", name: "firstnumber" },
    { message: "Enter you Second Number", type: "number", name: "secondnumber" },
    { message: "Select any operator to perform action", type: "list", name: "operator", choices: ["Addition", "Subtraction", "Multiplication", "Division"] }
]);
//Condtional Statement
if (answer.operator === "Addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstnumber / answer.secondnumber);
}
/*What is inquirer? inquirer ek nodejs module hai jo CLI applications mai user se input mai value lene mai madad krta
hai*/
//Await kia hai? Await se program wait krta hai typescript k operations k result ka
