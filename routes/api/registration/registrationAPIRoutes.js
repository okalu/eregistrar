/**
 * registrationAPIRoutes.js
 * 
 * @author okalu
 * @since 2022-11-23
 */
 "use strict";

 const express = require("express");
 
 const registrationController = require("../../../controller/registrationController");
 
 const registrationAPIRouter = express.Router();
 
 // Web API endpoint
 registrationAPIRouter.get("/student/list", (req, res) => {
     const students = registrationController.getStudents();
     res.json(students);
 });
 
 module.exports = registrationAPIRouter;
 
 