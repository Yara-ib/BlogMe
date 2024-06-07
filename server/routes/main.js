// ~ The main file to handle routes of the main page ~

// Importing Express.Js to handle routes
const express = require('express');

// Saving the Router function in constant to be used later in handling routes
const app = express.Router();


// ~ The Main Routes ~

// Handing the GET Request when trying to access the Home page
app.get('/', (request, response) => {
    response.render('index', { title: 'Home' });
});

// Handing the GET Request when trying to access the About page
app.get('/about', (request, response) => {
    response.render('about', { title: 'About' });
});

// Handing the GET Request when trying to access the Contact US page
app.get('/contactUs', (request, response) => {
    response.render('contactUs', { title: 'Contact Us' });
});

// Handing the GET Request when trying to access some unknown page
app.use((request, response) => {
    response.status(404).render('404', { title: '404' });
  });


// Exporting the router handler to be accessed from outside
module.exports = app;
