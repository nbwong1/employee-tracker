// required packages express and mysql //
const express = require('express');
const inquirer = require('inquirer');
const mysql = require('mysql2');

// establish PORT //
const PORT = process.env.PORT || 3001;
const app = express();

