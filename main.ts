#! /usr/bin/env node

import inquirer from "inquirer";

let accountBalnce: number = 10000;
const accountNumber: string = "1234567890";

console.log("Welcome to Meezan Bank ATM!");
console.log("Hello Malik Hunain,\nYour Account Number: " + accountNumber);
console.log("Here Is Your Account Balance: " + accountBalnce);

let userInput = await inquirer.prompt([
    {
        name: "id",
        type: "input",
        message: "Please Enter Your ID Number To Confirm.",
    },
    {
        name: "pin",
        type: "password",
        message: "Please Enter Your Pin Number To Confirm.",
    }
]); 

if (userInput.id === "Malik Hunain" && userInput.pin == "12345") {

    let accountType = await inquirer.prompt(
        {
            name: "acc_type",
            type: "list",
            message: "Select Account Type",
            choices: ["Savings", "Current"],
        }
    );

    if (accountType.acc_type === "Current" || accountType.acc_type === "Savings")
    {
        let transactionType = await inquirer.prompt(
            {
               name: "trans_type",
               type: "list",
               message: "Please Select Any Option",
               choices: ["Balance Inquiry", "Cash Withdraw"],
        });

    if (transactionType.trans_type === "Balance Inquiry")
    {
        console.log("Here Is Your Account Balance: " + accountBalnce);
    }
    else 
    {
        let withOptions = await inquirer.prompt(
            {
            name: "withdrawal_options",
            type: "list",
            message: "Please Select Any One Option",
            choices: ["1000", "2000", "3000", "4000", "5000", "10000", "OTHER AMOUNT"],
        });

        if (accountBalnce >= parseInt(withOptions.withdrawal_options) && parseInt(withOptions.withdrawal_options))
        {
            switch(withOptions.withdrawal_options) {
                case "1000":
                accountBalnce -= parseInt(withOptions.withdrawal_options);
                console.log("Please Take Your Card.");
                console.log("Please Collect Your Cash.");
                console.log("Your Remaining Account Balance: " + accountBalnce);
                break;

                case "2000":
                accountBalnce -= parseInt(withOptions.withdrawal_options);
                console.log("Please Take Your Card.");
                console.log("Please Collect Your Cash.");
                console.log("Your Remaining Account Balance: " + accountBalnce);
                break;

                case "3000":
                accountBalnce -= parseInt(withOptions.withdrawal_options);
                console.log("Please Take Your Card.");
                console.log("Please Collect Your Cash.");
                console.log("Your Remaining Account Balance: " + accountBalnce);
                break;

                case "4000":
                accountBalnce -= parseInt(withOptions.withdrawal_options);
                console.log("Please Take Your Card.");
                console.log("Please Collect Your Cash.");
                console.log("Your Remaining Account Balance: " + accountBalnce);
                break;

                case "5000":
                accountBalnce -= parseInt(withOptions.withdrawal_options);
                console.log("Please Take Your Card.");
                console.log("Please Collect Your Cash.");
                console.log("Your Remaining Account Balance: " + accountBalnce);
                break;

                case "10000":
                accountBalnce -= parseInt(withOptions.withdrawal_options);
                console.log("Please Take Your Card.");
                console.log("Please Collect Your Cash.");
                console.log("Your Remaining Account Balance: " + accountBalnce);
                break;

                default:
                let otherAmount = await inquirer.prompt(
                    {
                        name: "amount",
                        type: "number",
                        message: "Please Enter Amount:",
                });
                accountBalnce -= parseInt(otherAmount.amount);
                console.log("Please Take Your Card.");
                console.log("Please Collect Your Cash.");
                console.log("Your Remaining Account Balance: " + accountBalnce);
                break;
            }
        } else 
        {
            console.log("Sorry, Insufficient Balance.");
        }
    }
}

console.log("Thanks You For Using Meezan Bank Services!");
}



