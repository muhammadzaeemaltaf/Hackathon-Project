document.addEventListener("DOMContentLoaded", () => {
  const nameElement: HTMLElement = document.getElementById(
    "resume-name"
  ) as HTMLElement;

  if (nameElement) {
    const text: string = nameElement.textContent || "";
    const words: string[] = text.split(" ");
    const first: string = words[0];
    const rest: string = words.slice(1).join(" ");

    const changeColor = `<span style="color: #242424de;">${first}</span>`;

    nameElement.innerHTML = `${changeColor} ${rest}`;
  }

  let educationIndex = 1;
  let workIndex = 1;

  const educationCol = document.getElementById(
    "repeat-col-education"
  ) as HTMLElement;
  const addEducationBtn = document.getElementById(
    "add-btn-education"
  ) as HTMLButtonElement;

  addEducationBtn.addEventListener("click", () => {
    duplicateSection(educationCol, "education", educationIndex++);
  });

  const workCol = document.getElementById("repeat-col-work") as HTMLElement;
  const addWorkBtn = document.getElementById(
    "add-btn-work"
  ) as HTMLButtonElement;

  addWorkBtn.addEventListener("click", () => {
    duplicateSection(workCol, "work", workIndex++);
  });

  function duplicateSection(
    container: HTMLElement,
    type: string,
    index: number
  ) {
    const newCol = container.firstElementChild!.cloneNode(true) as HTMLElement;

    newCol.querySelectorAll("input").forEach((input) => {
      (input as HTMLInputElement).value = "";
    });

    const closeBtn = document.createElement("button");
    closeBtn.innerText = "-";
    closeBtn.classList.add("close-btn");

    closeBtn.addEventListener("click", () => {
      const id = `${type}-${index}`;
      newCol.remove();
      removeResumeSection(id);
    });

    newCol.appendChild(closeBtn);
    container.appendChild(newCol);
  }

  function removeResumeSection(id: string) {
    const resumeEntry = document.getElementById(id) as HTMLElement;
    if (resumeEntry) {
      resumeEntry.remove();
    }
  }

  interface Resume {
    firstname: string;
    lastname: string;
    designation: string;
    address: string;
    email: string;
    phoneno: string;
    summary: string;
    skillsElements: string;
    langElements: string;
    educationElements: string;
    experienceElements: string;
  }

  function text(): void {
    const firstName = document.getElementById("firstName") as HTMLInputElement;
    const firstNameText = firstName.value;
    const lastName = document.getElementById("lastName") as HTMLInputElement;
    const lastNameText = lastName.value;
    const designation = document.getElementById(
      "designation"
    ) as HTMLInputElement;
    const designationText = designation.value;
    const address = document.getElementById("Address") as HTMLInputElement;
    const addressText = address.value;
    const email = document.getElementById("email") as HTMLInputElement;
    const emailText = email.value;
    const phoneno = document.getElementById("phoneno") as HTMLInputElement;
    const phonenoText = phoneno.value;
    const summary = document.getElementById("summary") as HTMLInputElement;
    const summaryText = summary.value;
    const skills = document.getElementById("skills") as HTMLInputElement;
    const skillsText = skills.value;
    const skillDOM = showList(skillsText);
    const lang = document.getElementById("lang") as HTMLInputElement;
    const langText = lang.value;
    const langDOM = showList(langText);
    const educationDOM = showEducation();
    const experienceDOM = showExperience();

    const resume: Resume = {
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

  function showList(val: string): string {
    const arr = val.split(",");
    const res = arr.map(
      (item: string) => `<li> ${item.trim().toUpperCase()} </li>`
    );
    return res.join("");
  }

  function showEducation(): string {
    const educationSections = document.querySelectorAll(
      "#repeat-col-education .col"
    ) as NodeListOf<HTMLElement>;
    let educationList = "";

    educationSections.forEach((section, index) => {
      const institute = section.querySelector(
        'input[name="institute"]'
      ) as HTMLInputElement;
      const field = section.querySelector(
        'input[name="field"]'
      ) as HTMLInputElement;
      const duration = section.querySelector(
        'input[name="duration"]'
      ) as HTMLInputElement;

      const educationEntry = `
                <div class="flex div" id="education-${index}">
                    <div class="year">
                        <p>${duration.value}</p>
                    </div>
                    <div class="institude-name">
                        <p>${field.value}</p>
                        <p>${institute.value}</p>
                    </div>
                </div>
            `;

      educationList += educationEntry;
    });

    return educationList;
  }

  function showExperience(): string {
    const experienceSections = document.querySelectorAll(
      "#repeat-col-work .col"
    ) as NodeListOf<HTMLElement>;
    let experienceList = "";

    experienceSections.forEach((section, index) => {
      const company = section.querySelector(
        'input[name="company"]'
      ) as HTMLInputElement;
      const designation = section.querySelector(
        'input[name="designation"]'
      ) as HTMLInputElement;
      const duration = section.querySelector(
        'input[name="duration"]'
      ) as HTMLInputElement;

      const experienceEntry = `
                <div class="flex div" id="work-${index}">
                    <div class="year">
                        <p>${duration.value}</p>
                    </div>
                    <div class="institude-name">
                        <p>${designation.value} at ${company.value}</p>
                    </div>
                </div>
            `;

      experienceList += experienceEntry;
    });

    return experienceList;
  }

  function generateResume(obj: Resume) {
    const resumePhoneno = document.getElementById(
      "resume-phoneno"
    ) as HTMLElement;
    const resumeEmail = document.getElementById("resume-email") as HTMLElement;
    const resumeAddress = document.getElementById(
      "resume-address"
    ) as HTMLElement;
    const resumeName = document.getElementById("resume-name") as HTMLElement;
    const resumeTitle = document.getElementById("resume-title") as HTMLElement;
    const resumeSummary = document.getElementById(
      "resume-summary"
    ) as HTMLElement;
    const resumeSkills = document.getElementById(
      "resume-skills"
    ) as HTMLElement;
    const resumeLang = document.getElementById("resume-lang") as HTMLElement;
    const resumeEducation = document.getElementById(
      "resume-education"
    ) as HTMLElement;
    const resumeExperience = document.getElementById(
      "resume-experience"
    ) as HTMLElement;

    if (resumePhoneno) resumePhoneno.textContent = obj.phoneno;
    if (resumeEmail) resumeEmail.textContent = obj.email;
    if (resumeAddress) resumeAddress.textContent = obj.address;
    if (resumeName) resumeName.textContent = `${obj.firstname} ${obj.lastname}`;
    if (resumeTitle) resumeTitle.textContent = obj.designation;
    if (resumeSummary) resumeSummary.textContent = obj.summary;
    if (resumeSkills) resumeSkills.innerHTML = obj.skillsElements;
    if (resumeLang) resumeLang.innerHTML = obj.langElements;
    if (resumeEducation) resumeEducation.innerHTML = obj.educationElements;
    if (resumeExperience) resumeExperience.innerHTML = obj.experienceElements;
  }

  function showResume() {
    let container = document.querySelector(".container") as HTMLElement;
    let resume = document.querySelector(".resume") as HTMLElement;
    if (container) container.style.display = "none";
    if (resume) resume.style.display = "block";
  }

  function editResume() {
    let container = document.querySelector(".container") as HTMLElement;
    let resume = document.querySelector(".resume") as HTMLElement;
    if (container) container.style.display = "block";
    if (resume) resume.style.display = "none";
  }

});
