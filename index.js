//index
const express = require('express');
const ejs = require('ejs');
const app = express();
const port = 8000;

// Middleware to parse POST request bodies (needed for forms later) [cite: 321]
app.use(express.urlencoded({ extended: true }));

// Set EJS as the view engine 
app.set('view engine', 'ejs');

// Import the routes
const mainRoutes = require('./routes/main');
app.use('/', mainRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Thirsty Student app listening on port ${port}!`);
});

// Serve static files
app.use(express.static('public')); 