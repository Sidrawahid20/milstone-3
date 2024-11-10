"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addSkill = exports.addEducation = exports.addExperience = exports.updateHeader = void 0;
// Select header elements
var nameInput = document.getElementById("name");
var titleInput = document.getElementById("title");
var emailInput = document.getElementById("email");
var phoneInput = document.getElementById("phone");
// Select section lists
var experienceList = document.getElementById("experience-list");
var educationList = document.getElementById("education-list");
var skillsList = document.getElementById("skills-list");
// Update header with user input
function updateHeader() {
    document.querySelector(".header").innerHTML = "\n    <h1>".concat(nameInput.value, "</h1>\n    <h2>").concat(titleInput.value, "</h2>\n    <p>Email: ").concat(emailInput.value, " | Phone: ").concat(phoneInput.value, "</p>\n  ");
}
exports.updateHeader = updateHeader;
// Add a new experience item
function addExperience() {
    var jobTitle = document.getElementById("jobTitle").value;
    var company = document.getElementById("company").value;
    var responsibility = document.getElementById("responsibility").value;
    var newExperience = document.createElement("div");
    newExperience.classList.add("experience-item");
    newExperience.innerHTML = "\n    <h3>".concat(jobTitle, " - ").concat(company, "</h3>\n    <p>").concat(responsibility, "</p>\n  ");
    experienceList.appendChild(newExperience);
}
exports.addExperience = addExperience;
// Add a new education item
function addEducation() {
    var degree = document.getElementById("degree").value;
    var institution = document.getElementById("institution").value;
    var newEducation = document.createElement("div");
    newEducation.classList.add("education-item");
    newEducation.innerHTML = "\n    <h3>".concat(degree, " - ").concat(institution, "</h3>\n  ");
    educationList.appendChild(newEducation);
}
exports.addEducation = addEducation;
// Add a new skill item
function addSkill() {
    var skill = document.getElementById("skill").value;
    var newSkill = document.createElement("div");
    newSkill.classList.add("skill-item");
    newSkill.textContent = skill;
    skillsList.appendChild(newSkill);
}
exports.addSkill = addSkill;
