document.addEventListener("DOMContentLoaded", function () {
    var nameElement = document.getElementById("resume-name");
    if (nameElement) {
        var text_1 = nameElement.textContent || "";
        var words = text_1.split(" ");
        var first = words[0];
        var rest = words.slice(1).join(" ");
        var changeColor = "<span style=\"color: #242424de;\">".concat(first, "</span>");
        nameElement.innerHTML = "".concat(changeColor, " ").concat(rest);
    }
    var educationIndex = 1;
    var workIndex = 1;
    var educationCol = document.getElementById("repeat-col-education");
    var addEducationBtn = document.getElementById("add-btn-education");
    addEducationBtn.addEventListener("click", function () {
        duplicateSection(educationCol, "education", educationIndex++);
    });
    var workCol = document.getElementById("repeat-col-work");
    var addWorkBtn = document.getElementById("add-btn-work");
    addWorkBtn.addEventListener("click", function () {
        duplicateSection(workCol, "work", workIndex++);
    });
    function duplicateSection(container, type, index) {
        var newCol = container.firstElementChild.cloneNode(true);
        newCol.querySelectorAll("input").forEach(function (input) {
            input.value = "";
        });
        var closeBtn = document.createElement("button");
        closeBtn.innerText = "-";
        closeBtn.classList.add("close-btn");
        closeBtn.addEventListener("click", function () {
            var id = "".concat(type, "-").concat(index);
            newCol.remove();
            removeResumeSection(id);
        });
        newCol.appendChild(closeBtn);
        //   newCol.setAttribute("data-id", `${type}-${index}`);
        container.appendChild(newCol);
    }
    // Function to remove the corresponding resume section
    function removeResumeSection(id) {
        var resumeEntry = document.getElementById(id);
        if (resumeEntry) {
            resumeEntry.remove();
        }
    }
});
function text() {
    var firstName = document.getElementById("firstName");
    var firstNameText = firstName.value;
    var lastName = document.getElementById("lastName");
    var lastNameText = lastName.value;
    var designation = document.getElementById("designation");
    var designationText = designation.value;
    var address = document.getElementById("Address");
    var addressText = address.value;
    var email = document.getElementById("email");
    var emailText = email.value;
    var phoneno = document.getElementById("phoneno");
    var phonenoText = phoneno.value;
    var summary = document.getElementById("summary");
    var summaryText = summary.value;
    var skills = document.getElementById("skills");
    var skillsText = skills.value;
    var skillDOM = showList(skillsText);
    var lang = document.getElementById("lang");
    var langText = lang.value;
    var langDOM = showList(langText);
    var educationDOM = showEducation();
    var experienceDOM = showExperience();
    var resume = {
        firstname: firstNameText,
        lastname: lastNameText,
        designation: designationText,
        address: addressText,
        email: emailText,
        phoneno: phonenoText,
        summary: summaryText,
        skillsElements: skillDOM,
        langElements: langDOM,
        educationElements: educationDOM,
        experienceElements: experienceDOM,
    };
    generateResume(resume);
}
function showList(val) {
    var arr = val.split(",");
    var res = arr.map(function (item) { return "<li> ".concat(item.trim().toUpperCase(), " </li>"); });
    return res.join("");
}
function showEducation() {
    var educationSections = document.querySelectorAll("#repeat-col-education .col");
    var educationList = "";
    educationSections.forEach(function (section, index) {
        var institute = section.querySelector('input[name="institute"]');
        var field = section.querySelector('input[name="field"]');
        var duration = section.querySelector('input[name="duration"]');
        var educationEntry = "\n      <div class=\"flex div\" id=\"education-".concat(index, "\">\n        <div class=\"year\">\n          <p>").concat(duration.value, "</p>\n        </div>\n        <div class=\"institude-name\">\n          <p>").concat(field.value, "</p>\n          <p>").concat(institute.value, "</p>\n        </div>\n      </div>\n    ");
        educationList += educationEntry;
    });
    return educationList;
}
function showExperience() {
    var experienceSections = document.querySelectorAll("#repeat-col-work .col");
    var experienceList = "";
    experienceSections.forEach(function (section, index) {
        var company = section.querySelector('input[name="company"]');
        var designation = section.querySelector('input[name="designation"]');
        var duration = section.querySelector('input[name="duration"]');
        var experienceEntry = "\n      <div class=\"flex div\" id=\"work-".concat(index, "\">\n        <div class=\"year\">\n          <p>").concat(duration.value, "</p>\n        </div>\n        <div class=\"institude-name\">\n          <p>").concat(designation.value, " at ").concat(company.value, "</p>\n        </div>\n      </div>\n    ");
        experienceList += experienceEntry;
    });
    return experienceList;
}
function generateResume(obj) {
    var resumePhoneno = document.getElementById("resume-phoneno");
    var resumeEmail = document.getElementById("resume-email");
    var resumeAddress = document.getElementById("resume-address");
    var resumeName = document.getElementById("resume-name");
    var resumeTitle = document.getElementById("resume-title");
    var resumeSummary = document.getElementById("resume-summary");
    var resumeSkills = document.getElementById("resume-skills");
    var resumeLang = document.getElementById("resume-lang");
    var resumeEducation = document.getElementById("resume-education");
    var resumeExperience = document.getElementById("resume-experience");
    resumePhoneno.textContent = obj.phoneno;
    resumeEmail.textContent = obj.email;
    resumeAddress.textContent = obj.address;
    resumeName.textContent = obj.firstname + " " + obj.lastname;
    resumeTitle.textContent = obj.designation;
    resumeSummary.textContent = obj.summary;
    resumeSkills.innerHTML = obj.skillsElements;
    resumeLang.innerHTML = obj.langElements;
    resumeEducation.innerHTML = obj.educationElements;
    resumeExperience.innerHTML = obj.experienceElements;
}
function showResume() {
    var container = document.querySelector(".container");
    container.style.display = "none";
    var resume = document.querySelector(".resume");
    resume.style.display = "block";
}
function editResume() {
    var container = document.querySelector(".container");
    container.style.display = "block";
    var resume = document.querySelector(".resume");
    resume.style.display = "none";
}
