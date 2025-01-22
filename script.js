let ham = document.querySelector(".hamburger")
let links = document.querySelector(".links")

let header = document.getElementsByTagName("header")[0]
let home = document.getElementById("home")
let project = document.getElementById("project")
let skill = document.getElementById("skill")
let contact = document.getElementById("contact")
let footer = document.getElementsByTagName("footer")[0]
let mode = document.getElementById("mode")
let mode_circle = document.querySelector(".mode_circle")
let move_bubble = document.querySelector(".move_bubble")
let color_black = Array.from(document.querySelectorAll(".color_black"))
let ham_line = Array.from(document.getElementsByClassName("ham_line"))

// for hamburger 

ham.addEventListener("click", () => {
    links.classList.toggle("disp_flex")
})


// For dark theme and localStorage
if (localStorage.getItem("theme") == null) {
    localStorage.setItem("theme", "light")
}

function theme() {
    if (localStorage.getItem("theme") == "dark") {
        header.classList.add("bg_black")
        home.classList.add("light_black")
        project.classList.add("bg_black")
        skill.classList.add("light_black")
        contact.classList.add("bg_black")
        footer.classList.add("light_black")

        mode.classList.add("bg_white")
        mode_circle.classList.add("light_black")
        links.classList.add("links_dark_theme")

        move_bubble.classList.add("move_bubble_bgChange")

        for (value of color_black) {
            value.classList.add("color_white")
        }
        for (key in ham_line) {
            ham_line[key].classList.add("bg_white")
        }
    }
    else if (localStorage.getItem("theme") == "light") {
        header.classList.remove("bg_black")
        home.classList.remove("light_black")
        project.classList.remove("bg_black")
        skill.classList.remove("light_black")
        contact.classList.remove("bg_black")
        footer.classList.remove("light_black")

        mode.classList.remove("bg_white")
        mode_circle.classList.remove("light_black")
        links.classList.remove("links_dark_theme")

        move_bubble.classList.remove("move_bubble_bgChange")

        for (value of color_black) {
            value.classList.remove("color_white")
        }
        for (key in ham_line) {
            ham_line[key].classList.remove("bg_white")
        }
    }
}

theme()

mode.addEventListener("click", () => {
    if (localStorage.getItem("theme") == "light") {
        localStorage.setItem("theme", "dark")
    }
    else {
        localStorage.setItem("theme", "light")
    }
    theme()
})



// to click anywhere to close hamburger 

home.addEventListener("click", () => {
    links.classList.remove("disp_flex")
})
project.addEventListener("click", () => {
    links.classList.remove("disp_flex")
})
skill.addEventListener("click", () => {
    links.classList.remove("disp_flex")
})
contact.addEventListener("click", () => {
    links.classList.remove("disp_flex")
})
footer.addEventListener("click", () => {
    links.classList.remove("disp_flex")
})


// resume btn download

function resumeDownloadBtn() {
    const link = document.createElement('a');
    link.href = './My_Resume.pdf';
    link.download = 'Avinash_Resume.pdf';
    link.click();
}

// send message btn click

function sendMessageBtnClick(e) {
    alert('Unable to send right now')
}

// project btns click

function project_btn1Click() {
    window.location.href = "https://medium-blog-frontend.vercel.app"
}
function project_btn2Click() {
    window.location.href = "https://github.com/avinashsinghwk/Authentication_In_Next_Using_Cookies"
}
function project_btn3Click() {
    window.location.href = "https://sistya-tic-tac-toe.netlify.app/"
    
}
function project_btn4Click() {
    window.location.href = "https://sistya-todolist.netlify.app/"

}