/**
 * server.js
 * 
 * @author {put-your-name-here}
 * @since {put-todays-date-here}
 */
"use strict";

const express = require("express");
const path = require("path");

const homepageRoutes = require("./routes/public/home/index");

const registrationRoutes = require("./routes/registration/registrationRoutes");
const registrationAPIRoutes = require("./routes/api/registration/registrationAPIRoutes");

const app = express();

// Define middlewares

// Setup the views folder and the view template engine middleware
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// setup the express HttpRequest data parser middlewares
// parse application/x-www-form-urlencoded (e.g. web form data)
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

// Set static-assets folder as source for all static content 
// e.g. scripts, images, stylesheets etc.
app.use("/static", express.static(path.join(__dirname, "static-assets")));

// Setup routes for homepage
app.use("", homepageRoutes);

// Setup routes for registration-related pages
app.use("/registration", registrationRoutes);

// Setup routes for registration-related api endpoints
app.use("/api/registration", registrationAPIRoutes);

// middleware for PageNotFound Error 404 
app.use((req, res) => {
    console.log(`Responding with the 404 Error page`);
    res.status(404);
    res.sendFile(path.join(__dirname, "views/public/error", "404.html"));
});

const PORT_NUMBER = 8080;

app.listen(PORT_NUMBER, () => {
    console.log(`Server started. Listening on port ${PORT_NUMBER}`);
});
