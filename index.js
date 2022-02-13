const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const inquirer = require('inquirer');
const fs = require('fs');

const generatePage = require('./src/page-template');

const employees = [];