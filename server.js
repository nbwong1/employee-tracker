// required packages express and mysql //
const express = require('express');
const mysql = require('mysql');

// establish PORT //
const PORT = process.env.PORT || 3001;
const app = express();