//connect node modules inquirer and filesystem 
const inquirer = require('inquirer');
const fs = require('fs');

//Link to generateHTML for page creation
const generateHTML = require('./src/generateHTML')

//Team profiles
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');


//Create array to hold a team
const teamArray = [];



// Manager questions/prompts
const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the manager of this team?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter a manager's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the email address for the manager',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's email address!");
                    return false;
                }
            }
        },
        {
            typ: 'input',
            name: 'id',
            message: "What is the manager's ID number?",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's ID.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager's office number?",
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's office number!");
                    return false;
                }
            }
        }
    ])
    .then(managerInput => {
        const {name, email, id, officeNumber} = managerInput;
        const manager = new Manager (name, email, id, officeNumber);

        teamArray.push(manager);
        console.log(manager);

    })
};




//Employee questions/prompts
const addEmployee = () => {

    console.log(`
    ===============
    Adding employees to team
    ===============
    `);
    
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Please choose your employee's role",
            choices: ['Engineer', 'Intern']
        },
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
        },
        {
            type: 'input',
            name: 'gitHub',
            message: "Please enter the engineer's GitHub username (no @ needed)",
            when: (input) => input.role === "Engineer",
            validate: gitHubInput => {
                if (gitHubInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's GitHub username!");
                    return false;
                }
            }

        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school",
            when: (input) => input.role === "Intern",
            validate: schoolInput => {
                if(schoolInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's school!");
                    return false;
                }
            }

        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members?',
            default: false
        },
        // {
        //     type: 'confirm',
        //     name: 'confirmAddNewTeam',
        //     message: 'Would you like to add another team?',
        //     default: false
        // },  
    ])
    .then(employeeData => {
        // data for employees 

        let { name, email, id, role, gitHub, school, confirmAddEmployee } = employeeData; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, email, id, gitHub);

            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, email, id, school);

            console.log(employee);
        }

        teamArray.push(employee); 
    
        if (confirmAddEmployee) {
            return addEmployee(teamArray); 
        } else {
            return teamArray;
        }
    })
};


const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        // when the profile has been created 
        } else {
            console.log("Your team profile has been successfully created and added to the index.html!")
        }
    })
}; 


addManager()
.then(addEmployee)
.then(teamArray => {
    return generateHTML(teamArray);
})
.then(pageHTML => {
    return writeFile(pageHTML);
})
.catch(err => {
    console.log(err);
});