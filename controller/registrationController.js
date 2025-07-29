/**
 * reg
 */
"use strict";

const dataStore = require("../datastore/datastore");
const Student = require("../model/student");

const registrationController = (function() {
    
    const getStudents = function() {
        return dataStore.getData();
    }

    const registerNewStudent = function(req, res) {
        const newStudent = new Student(req.body.studentId, req.body.fullName, req.body.level);
        dataStore.registerNewStudent(newStudent);
    }

    return {
        getStudents: getStudents,
        registerNewStudent: registerNewStudent
    }

})();

module.exports = registrationController;