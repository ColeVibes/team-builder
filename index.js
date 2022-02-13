const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const inquirer = require('inquirer');
const fs = require('fs');

const generatePage = require('./src/page-template');

const employees = [];

function managerQuestions() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "What is the team manager's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("\n" + "Please enter manager's name.")
                    return false;
                }
            }
        },
        {
            type: 'number',
            name: 'managerId',
            message: "What is the team manager's id number?",
            validate: idNumber => {
                if (idNumber) {
                    return true;
                } else {
                    console.log("\n" + "Please enter manager's id number.")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is the team manager's email?",
            validate: emailInput => {
                if (emailInput.includes("@")) {
                    return true;
                } else {
                    console.log("\n" + "Please enter a valid email.")
                    return false;
                }
            }
        },
        {
            type: 'number',
            name: 'managerOfficeNum',
            message: "What is the team manager's office number?",
            validate: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    console.log("\n" + "Please enter manager's office number.")
                    return false;
                }
            }
        }
    ])
}