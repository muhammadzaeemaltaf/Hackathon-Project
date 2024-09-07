const nameElement: HTMLElement = document.getElementById("name") as HTMLElement;

if(nameElement){
    const text: string = nameElement.textContent || "";
    const words: string[] = text.split(" ");
    const first: string = words[0];
    const rest: string = words.slice(1).join(" ");

    const changeColor = `<span style="color: #242424de;">${first}</span>`

    nameElement.innerHTML= `${changeColor} ${rest}`
}

const btn: HTMLElement = document.getElementById("btn") as HTMLElement;
const skills: HTMLElement = document.getElementById("skills") as HTMLElement;

btn.addEventListener("click", () => {
    skills.classList.toggle("show")
    if (skills.classList.contains("show")) {
    skills.style.height = skills.scrollHeight + "px" 
    btn.innerHTML = "Hide Skills"
    }else{
    skills.style.height = "0px"
    btn.innerHTML = "Show Skills"
    }
})