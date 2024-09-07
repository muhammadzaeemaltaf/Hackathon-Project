var nameElement = document.getElementById("name");
if (nameElement) {
    var text = nameElement.textContent || "";
    var words = text.split(" ");
    var first = words[0];
    var rest = words.slice(1).join(" ");
    var changeColor = "<span style=\"color: #242424de;\">".concat(first, "</span>");
    nameElement.innerHTML = "".concat(changeColor, " ").concat(rest);
}
var btn = document.getElementById("btn");
var skills = document.getElementById("skills");
btn.addEventListener("click", function () {
    skills.classList.toggle("show");
    if (skills.classList.contains("show")) {
        skills.style.height = skills.scrollHeight + "px";
        btn.innerHTML = "Hide Skills";
    }
    else {
        skills.style.height = "0px";
        btn.innerHTML = "Show Skills";
    }
});
