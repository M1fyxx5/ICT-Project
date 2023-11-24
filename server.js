const express = require('express');
const path = require('path');

const app = express();
const port = 8000;

// static files
app.use(express.static('public'));

// home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

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
