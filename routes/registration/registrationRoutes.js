/**
 * 
 */
"use strict";

const express = require("express");

const registrationController = require("../../controller/registrationController");

const registrationRouter = express.Router();

registrationRouter.get("/form", (req, res) => {
    const students = registrationController.getStudents();
    res.render("registration/registration", { students: students});
});

registrationRouter.post("/form", (req, res) => {
    registrationController.registerNewStudent(req, res);
    res.redirect(303, "/registration/form");
});

module.exports = registrationRouter;

