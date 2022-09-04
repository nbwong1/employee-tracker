const inquirer = require('inquirer');

console.log(',-----------------------------------------------------.');
console.log('|   _____                 _                           |');
console.log('|  | ____|_ __ ___  _ __ | | ___  _   _  ___  ___     |');
console.log("|  |  _| | '_ ` _ \| '_ \| |/ _ \| | | |/ _ \/ _ \    |");
console.log('|  | |___| | | | | | |_) | | ( ) | |_| |  __/  __/    |');
console.log('|  |_____|_| |_| |_| .__/|_|\___/ \__, |\___|\___|    |');
console.log('|                  |_|            |___/               |');
console.log('|   __  __                                            |');
console.log('|  |  \/  | __ _ _ __   __ _  __ _  ___ _ __          |');
console.log("|  | |\/| |/ _` | '_ \ / _` |/ _` |/ _ \ '__|         |");
console.log('|  | |  | | (_| | | | | (_| | (_| |  __/ |            |');
console.log('|  |_|  |_|\__,_|_| |_|\__,_|\__, |\___|_|            |');
console.log('|                            |___/                    |');
console.log('|                                                     |');
console.log('|                                                     |');
console.log("`-----------------------------------------------------'");

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
        console.info('Answer:', answers.mainMenuLov);
      });