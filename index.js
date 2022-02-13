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

function addTeamMember() {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'teamMember',
            message: "Which type of team member would you like to add?",
            choices: ["Engineer", "Intern", "I don't want to add any more team members"],
        }
    ])
        .then(answers => {
            if (answers.teamMember === 'Engineer') {
                engineerQuestions()
                    .then(answers => {
                        let engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub)
                        employees.push(engineer)
                        addTeamMember()
                    })

            } else if (answers.teamMember === "Intern") {
                internQuestions()
                    .then(answers => {
                        let intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool)
                        employees.push(intern)
                        addTeamMember()
                    })

            } else {
                console.log("Team profile page has been created! Check the dist folder.")
                console.log(employees)
                createTeam()
            }
        })
}

