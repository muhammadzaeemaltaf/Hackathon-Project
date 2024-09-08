document.addEventListener("DOMContentLoaded", function () {
    var _a, _b;
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
        container.appendChild(newCol);
    }
    function removeResumeSection(id) {
        var resumeEntry = document.getElementById(id);
        if (resumeEntry) {
            resumeEntry.remove();
        }
    }
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
        localStorage.setItem("resumeData", JSON.stringify(resume));
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
            var educationEntry = "\n                <div class=\"flex div\" id=\"education-".concat(index, "\">\n                    <div class=\"year\">\n                        <p>").concat(duration.value, "</p>\n                    </div>\n                    <div class=\"institude-name\">\n                        <p>").concat(field.value, "</p>\n                        <p>").concat(institute.value, "</p>\n                    </div>\n                </div>\n            ");
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
            var experienceEntry = "\n                <div class=\"flex div\" id=\"work-".concat(index, "\">\n                    <div class=\"year\">\n                        <p>").concat(duration.value, "</p>\n                    </div>\n                    <div class=\"institude-name\">\n                        <p>").concat(designation.value, " at ").concat(company.value, "</p>\n                    </div>\n                </div>\n            ");
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
        if (resumePhoneno)
            resumePhoneno.textContent = obj.phoneno;
        if (resumeEmail)
            resumeEmail.textContent = obj.email;
        if (resumeAddress)
            resumeAddress.textContent = obj.address;
        if (resumeName)
            resumeName.textContent = "".concat(obj.firstname, " ").concat(obj.lastname);
        if (resumeTitle)
            resumeTitle.textContent = obj.designation;
        if (resumeSummary)
            resumeSummary.textContent = obj.summary;
        if (resumeSkills)
            resumeSkills.innerHTML = obj.skillsElements;
        if (resumeLang)
            resumeLang.innerHTML = obj.langElements;
        if (resumeEducation)
            resumeEducation.innerHTML = obj.educationElements;
        if (resumeExperience)
            resumeExperience.innerHTML = obj.experienceElements;
    }
    (_a = document.getElementById("show-resume")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
        var container = document.querySelector(".container");
        var resume = document.querySelector(".resume");
        if (container)
            container.style.display = "none";
        if (resume)
            resume.style.display = "block";
    });
    (_b = document.getElementById("edit-resume")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
        var container = document.querySelector(".container");
        var resume = document.querySelector(".resume");
        if (container)
            container.style.display = "block";
        if (resume)
            resume.style.display = "none";
    });
});
