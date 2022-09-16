//connect node modules inquirer and filesystem 
const inquirer = require('inquirer');
const fs = require('fs');

//Team profiles
const Employee = require('./lib/Employee');

//Employee questions/prompts
const addEmployee = () => {

    console.log(`
    ===============
    Adding employees to team
    ===============
    `)
    
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the employee?'
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email"
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee's ID"
        }
    ])
}