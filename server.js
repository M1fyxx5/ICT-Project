const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Обработка статических файлов
app.use(express.static('public'));

// Главная страница
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Страница "/newest"
app.get('/newest', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'newest.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
