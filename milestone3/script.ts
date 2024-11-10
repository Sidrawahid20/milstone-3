
// Select header elements
const nameInput = document.getElementById("name") as HTMLInputElement;
const titleInput = document.getElementById("title") as HTMLInputElement;
const emailInput = document.getElementById("email") as HTMLInputElement;
const phoneInput = document.getElementById("phone") as HTMLInputElement;

// Select section lists

const experienceList = document.getElementById("experience-list")!;
const educationList = document.getElementById("education-")!;
const skillsList = document.getElementById("skills")!;

 
// Update header with user input
export function updateHeader() {
  document.querySelector(".header")!.innerHTML = `
    <h2>${nameInput.value}</h2>
    <h3tt>${titleInput.value}</h3>
    <p>Email: ${emailInput.value} | Phone: ${phoneInput.value}</p>
  `;
}

// Add a new experience item
export function addExperience() {
  const jobTitle = (document.getElementById("jobTitle") as HTMLInputElement).value;
  const company = (document.getElementById("company") as HTMLInputElement).value;
  const responsibility = (document.getElementById("responsibility") as HTMLTextAreaElement).value;

  const newExperience = document.createElement("div");
  newExperience.classList.add("experience-item");
  newExperience.innerHTML = `
    <h3>${jobTitle} - ${company}</h3>
    <p>${responsibility}</p>
  `;
  experienceList.appendChild(newExperience);
}

// Add a new education item
export function addEducation() {
  const degree = (document.getElementById("degree") as HTMLInputElement).value;
  const institution = (document.getElementById("institution") as HTMLInputElement).value;

  const newEducation = document.createElement("div");
  newEducation.classList.add("education-item");
  newEducation.innerHTML = `
    <h3>${degree} - ${institution}</h3>
  `;
  educationList.appendChild(newEducation);
}

// Add a new skill item
export function addSkill() {
  const skill = (document.getElementById("skill") as HTMLInputElement).value;

  const newSkill = document.createElement("div");
  newSkill.classList.add("skill-item");
  newSkill.textContent = skill;
  skillsList.appendChild(newSkill);
}



