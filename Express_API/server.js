const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
// const {PythonShell} = require('python-shell');
// const {spawn} = require('child_process');

const db = mysql.createPool({
    host: 'localhost', // the host name MYSQL_DATABASE: node_mysql
    user: 'root', // database user MYSQL_USER: MYSQL_USER
    password: '1234', // database user password MYSQL_PASSWORD: MYSQL_PASSWORD
    database: 'multidisease_db' // database name MYSQL_HOST_IP: mysql_db
});

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const signin = require('./controllers/signin');
const signup = require('./controllers/signup');
const heart = require('./controllers/Heart/heart');
const diabetes = require('./controllers/Diabetes/diabetes');

// client side request
app.post('/signin', (req,res) => {signin.handleSignin(req,res,db)});
app.post('/signup', (req,res) => {signup.handleSignup(req,res,db)});
app.post('/heart/insert', (req,res) => {heart.handleInsert(req,res,db)});
app.post('/diabetes/insert', (req,res) => {diabetes.handleInsert(req,res,db)});


// admin side request
const signinAdmin = require('./controllers/Admin/signin');
app.post('/admin/signin', (req,res) => {signinAdmin.handleSignin(req,res,db)});


const userAdmin = require('./controllers/Admin/userDetails');
app.get('/admin/getUserCount', (req,res) => {userAdmin.handleGetUserCount(req,res,db)});
app.get('/admin/getUsers', (req,res) => {userAdmin.handleGetUser(req,res,db)});
app.delete('/admin/deleteUser', (req,res) => {userAdmin.handleDeleteUser(req,res,db)});


const heartAdmin = require('./controllers/Admin/heart');
app.get('/admin/getHeartCount', (req,res) => {heartAdmin.handleGetHeartCount(req,res,db)});
app.get('/admin/getHeartRecords', (req,res) => {heartAdmin.handleGetHeartRecord(req,res,db)});
app.delete('/admin/deleteHeartRecord', (req,res) => {heartAdmin.handleDeleteHeartRecord(req,res,db)});


const diabetesAdmin = require('./controllers/Admin/diabetes');
app.get('/admin/getDiabetesCount', (req,res) => {diabetesAdmin.handleGetDiabetesCount(req,res,db)});
app.get('/admin/getDiabetesRecords', (req,res) => {diabetesAdmin.handleGetDiabetesRecord(req,res,db)});
app.delete('/admin/deleteDiabetesRecord', (req,res) => {diabetesAdmin.handleDeleteDiabetesRecord(req,res,db)});


// const python = spawn('python', ['Diabetes.py']);
// data = '';
// python.stdout.on("data", (response) => {
//     // Keep collecting the data from python script
//     data += response;
// });

// python.on('exit', function(code, signal) {
//     console.log(data);
//     console.log('Python process is now completed send data as response');
// });

// python.stderr.on('data', data => {
//     console.log(data.toString());
// })

app.listen(3001, ()=>{
    console.log(`Server has started at port 3001`);
});


