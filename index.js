const inquirer = require('inquirer');
const { stringify } = require('nodemon/lib/utils');

console.log(',------------------.');
console.log('|                  |');
console.log('| Employee Tracker |');
console.log('|                  |');
console.log("`------------------'");

inquirer
    .prompt([
        {
            type: "list",
            name: "mainMenuLov",
            message: "What would you like to do?",
            choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role'],
        }
    ])
    .then(answers => {
        const { choices } = answers;        
        console.info('Answer:', answers.mainMenuLov);

        if (choices === 'View All Departments') {
            showDepartments();
        }

        if (choices === 'View All Roles') {
            showRoles();
        }

        if (choices === 'View All Employees') {
            showEmployees();
        }
        
        if (choices === 'Add a Department') {
            addDepartment();
        }

        if (choices === 'Add a Role') {
            addRole();
        }

        if (choices === 'Add an Employee') {
            addEmployee();
        }

        if (choices === 'Update an Employee') {
            updateEmployee();
        }

// function for addDepartment
addDepartment = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'deptName',
                message: 'What is the new department name?'
            }
        ]);
};
