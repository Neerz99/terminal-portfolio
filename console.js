let terminalInput = document.getElementById("terminalInput");
let terminalOutput = document.getElementById("terminalOutput");
let commandHistory = [];
let currentIndex = 0;

terminalInput.addEventListener("keydown", function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        history();
        document.getElementById("submitHidden").click();
        helpCommand();
        aboutCommand();
        linksCommand();
        clearInput();
    } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        if (currentIndex > 0) {
            currentIndex--;
            terminalInput.value = commandHistory[currentIndex];
        }
    } else if (event.key === 'ArrowDown') {
        event.preventDefault();
        if (currentIndex < commandHistory.length - 1) {
            currentIndex++;
            terminalInput.value = commandHistory[currentIndex];
        } else {
            currentIndex = commandHistory.length;
            terminalInput.value = "";
        }
    }
});

function history() {
    commandHistory.push(terminalInput.value);
    currentIndex = commandHistory.length;
}

let helpList = ['help', 'clear', 'about', 'contact', 'projects', 'skills', 'education', 'experience', 'resume', 'github', 'linkedin', 'email', 'phone'];

function clearInput() {
    terminalInput.value = "";
}

// Commands
// Because of column-reverse, the first element is the last child
function helpCommand() {
    if (terminalInput.value == 'help') {
        terminalOutput.innerHTML += "<br><p>Available commands: " + helpList + "</p><br><p>Help</p>"
    }
}

function aboutCommand() {
    if (terminalInput.value == 'about') {
        terminalOutput.innerHTML += "<br><p>I am Enzo ILO, passionate web developer from France. Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore unde, laudantium deleniti beatae et cupiditate nihil voluptatum exercitationem rem rerum quis, esse aspernatur incidunt. Commodi repellendus nihil quam sapiente labore.</p><br><p>About</p>"
    }
}

function linksCommand() {
    if (terminalInput.value == 'links') {
        terminalOutput.innerHTML += "<br><p>Github: <a href='https://www.github.com/Neerz99' target='_blank'><u>github.com/Neerz99</u></a></p><p>Linkedin: <a href='linkedin.com'><u>linkedin.com</u></a></p><br><p>Links</p>"
    }
}