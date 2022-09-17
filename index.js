//connect node modules inquirer and filesystem 
const inquirer = require('inquirer');
const fs = require('fs');

//Team profiles
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');



// Manager questions/prompts
const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the manager of this team?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the email address for the manager'
        },
        {
            typ: 'input',
            name: 'id',
            message: "What is the manager's ID number?"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager's office number?"
        }
    ])

};





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
            message: 'What is the name of the employee?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter an email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee's ID",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter an ID number!');
                    return false;
                }
            }
        }
    ])
};

addEmployee();
