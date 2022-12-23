
const express = require('express');

const fs = require('fs');

const bodyParser = require('body-parser');

const chatApp = express();

chatApp.use(bodyParser.urlencoded({ extended: false }));

chatApp.get("/login", (req, res, next) => {
    res.send(`<form action="/" method="GET" 
    onSubmit= "localStorage.setItem('username', document.getElementById('username').value)">
    <input id="username" type="text" name="username"><br><button type="submit">Login</button></form>`);
});

chatApp.get("/", (req, res, next) => {

    fs.readFile('groupChat.txt', (err, data) => {
        if(err) {
            data='No Chat Exist!';
        }
        res.send(`${data}<form action="/" method="POST" 
        onSubmit= "document.getElementById('username').value = localStorage.getItem('username')">
        <input id="message" type="text" name="message"><input id="username" type="hidden" name="username"><br>
        <button type="submit">Send</button></form>`);
    });
});

chatApp.post("/", (req, res, next) => {
    console.log(req.body.username);
    console.log(req.body.message);
    fs.writeFile('groupChat.txt', ` ${req.body.username} : ${req.body.message};  `, { flag: 'a' }, (err) =>
        err ? console.log(err) : res.redirect("/")
    );
});



chatApp.listen(3000);