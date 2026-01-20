// Sample JavaScript file for CodeQL analysis testing
// Contains intentional security issues for testing purposes

const express = require('express');
const { exec } = require('child_process');

const app = express();

// Intentional command injection vulnerability
app.get('/exec', (req, res) => {
    const cmd = req.query.cmd;
    // CodeQL should flag this as command injection
    exec(cmd, (error, stdout, stderr) => {
        res.send(stdout);
    });
});

// Intentional XSS vulnerability
app.get('/greet', (req, res) => {
    const name = req.query.name;
    // CodeQL should flag this as reflected XSS
    res.send('<h1>Hello ' + name + '</h1>');
});

// Intentional SQL injection (simulated)
app.get('/user', (req, res) => {
    const id = req.query.id;
    // CodeQL should flag this as SQL injection
    const query = "SELECT * FROM users WHERE id = " + id;
    res.send(query);
});

module.exports = app;
