const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// static files
app.use(express.static('public'));

// logging

app.use((req, res, next) => {
    console.log(`Received request for ${req.url}`);
    next();
});

// home page
app.get('/', (req, res) => {
    console.log('Request for the home page received.');
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// /about-us
app.get('/about_us', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'info', 'about_us.html'));
})

// /newest page
app.get('/newest', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'newest.html'));
});

// /popular page
app.get('/popular', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'popular.html'));
});

// /rated page
app.get('/rated', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'rated.html'));
});

// waking up
app.listen(port, () => {
    console.log(`Server woke up on http://localhost:${port}`);
});
