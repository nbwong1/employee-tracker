const inquirer = require('inquirer');

// console.log(',------------------.');
// console.log('|                  |');
// console.log('| Employee Tracker |');
// console.log('|                  |');
// console.log("`------------------'");

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
      })

// 'View All Departments' will show the table: 'departments'; and have columns: 'department' and 'department id'
    .then((answers) => {
        const { choices } = answers;

        if (choices === "View All Departments") {
            viewAllDepartments();
        };
// 'View All Roles' will show the table: 'roles'; and have columns: 'job title', 'role id', 'department', and 'salary'
        if (choices === "View All Roles") {
            viewAllRoles();
        };
// 'View All Employees' will show the table: 'employees'; and have columns: 'employee id', 'first name', 'last name', 'job title', 'department', 'salaries, and 'managers'
        if (choices === "View All Employees") {
            viewAllEmployees();
        };
// 'Add a Department' will ask to enter the name of the Department
        if (choices === "Add a Department") {
            then.prompt ([
                {
                    type: "text",
                    message: "What is the name of the Department?"
                }
            ])
            // addDepartment();
        }; 
        //  => prompt ([
        //             {
        //                 name: 'dept_name',
        //                 type: 'text',
        //                 message: 'What is the Department name?' 
        //             },
        //             {
        //                 name: 'dept_id',
        //                 type: 'text',
        //                 message: 'What is the Department ID?'
        //             }
        //         ]);

// 'Add a Role' will add a 'name', 'salary', and 'department' for the role
        if (choices === "Add a Role") {
            addRole();
        };
    // .prompt ([
    //     {
    //         name: 'role_name',
    //         type: 'text',
    //         message: 'What is the role name?'
    //     },
    //     {
    //         name: 'role_salary',
    //         type: 'text',
    //         message: 'What is the Salary?'
    //     },
    // maybe make the list of departments become a list instead of text answer.
    //     {
    //         name: 'role_dept',
    //         type: 'text',
    //         message: 'What Department is the role in?'
    //     }
    // ])

// 'Add an Employee' will 'first name', 'last name', 'role', and 'manager'
        if (choices === "Add a Employee") {
            addEmployee();
        };
    // .prompt ([
    //     {
    //         name: 'employee_fn',
    //         type: 'text',
    //         message: "What is the new Employee's first name?"
    //     },
    //     {
    //         name: 'employee_ln',
    //         type: 'text',
    //         message: "What is the new Employee's last name?"
    //     },
    // make role's based on the existing roles
    //     {
    //         name: 'employee_role',
    //         type: 'text',
    //         message: "What is the new employee's role?"
    //     }
    // ])
// Also add that employee to the database.

// 'Update an Employee Role' will allow me to select an employee and update their 'role'
        if (choices === "Update an Employee Role") {
            updateEmployeeRole();
        };
