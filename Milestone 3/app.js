document.addEventListener("DOMContentLoaded", function () {
    var _a, _b;
    var nameElement = document.getElementById("resume-name");
    function nameColor() {
        var text = nameElement.textContent || "";
        var words = text.split(" ");
        var first = words[0];
        var rest = words.slice(1).join(" ");
        var changeColor = "<span style=\"color: #242424de;\">".concat(first, "</span>");
        nameElement.innerHTML = "".concat(changeColor, " ").concat(rest);
    }
    nameColor();
    var educationIndex = 1;
    var workIndex = 1;
    var educationCol = document.getElementById("repeat-col-education");
    var addEducationBtn = document.getElementById("add-btn-education");
    function attachEducationInputEvents() {
        educationCol.querySelectorAll("input").forEach(function (input) {
            input.addEventListener("keyup", function (e) {
                text();
            });
        });
    }
    attachEducationInputEvents();
    addEducationBtn.addEventListener("click", function () {
        duplicateSection(educationCol, "education", educationIndex++);
        attachEducationInputEvents();
    });
    var workCol = document.getElementById("repeat-col-work");
    var addWorkBtn = document.getElementById("add-btn-work");
    function attachWorkInputEvents() {
        workCol.querySelectorAll("input").forEach(function (input) {
            input.addEventListener("keyup", function (e) {
                text();
            });
        });
    }
    attachWorkInputEvents();
    addWorkBtn.addEventListener("click", function () {
        duplicateSection(workCol, "work", workIndex++);
        attachWorkInputEvents();
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
    var textFields = [
        "firstName",
        "lastName",
        "designation",
        "phoneno",
        "email",
        "Address",
        "summary",
        "skills",
        "lang",
        "institute",
        "field",
        "peroid",
        "company",
        "designation",
        "duration",
    ];
    textFields.forEach(function (id) {
        var _a;
        (_a = document.getElementById(id)) === null || _a === void 0 ? void 0 : _a.addEventListener("keyup", text);
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
            var institute = section.querySelector('input[id="institute"]');
            var field = section.querySelector('input[id="field"]');
            var duration = section.querySelector('input[id="peroid"]');
            var educationEntry = "\n                <div class=\"flex div\" id=\"education-".concat(index, "\">\n                    <div>\n                        <h3>").concat(field.value, "</h3>\n                        <h4>").concat(institute.value, "</h4>\n                        <p>\n                        <i class=\"fa-regular fa-calendar-days\"></i>\n                          ").concat(duration.value, "\n                        </p>\n                    </div>\n                </div>\n            ");
            educationList += educationEntry;
        });
        return educationList;
    }
    function showExperience() {
        var experienceSections = document.querySelectorAll("#repeat-col-work .col");
        var experienceList = "";
        experienceSections.forEach(function (section, index) {
            var company = section.querySelector('input[id="company"]');
            var designation = section.querySelector('input[id="designation"]');
            var duration = section.querySelector('input[id="duration"]');
            var experienceEntry = "\n                <div class=\"flex div\" id=\"work-".concat(index, "\">\n                    <div>\n                        <h3>").concat(designation.value, "</h3>\n                        <h4>").concat(company.value, "</h4>\n                        <p>\n                        <i class=\"fa-regular fa-calendar-days\"></i>\n                        ").concat(duration.value, "\n                        </p>\n                    </div>\n                </div>\n            ");
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
        resumeName.textContent = "".concat(obj.firstname, " ").concat(obj.lastname);
        resumeTitle.textContent = obj.designation;
        resumeSummary.textContent = obj.summary;
        resumeSkills.innerHTML = obj.skillsElements;
        resumeLang.innerHTML = obj.langElements;
        resumeEducation.innerHTML = obj.educationElements;
        resumeExperience.innerHTML = obj.experienceElements;
        nameColor();
    }
    (_a = document.getElementById("show-resume")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
        var container = document.querySelector(".container");
        var resume = document.querySelector(".resume");
        var inputs = document.querySelectorAll("input, textarea");
        var allFieldsFilled = true;
        inputs.forEach(function (item) {
            var inputElement = item;
            if (inputElement.value.trim() === "") {
                allFieldsFilled = false;
            }
        });
        if (!allFieldsFilled) {
            alert("All fields are required");
        }
        else {
            if (container)
                container.style.display = "none";
            if (resume)
                resume.style.display = "block";
        }
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
