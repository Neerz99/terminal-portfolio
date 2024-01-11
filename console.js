let terminalInput = document.getElementById("terminalInput");
terminalInput.addEventListener("keydown", function (event) {
    if (event.key === 'Enter') { // Enter key
        event.preventDefault(); // Prevent form submission
        history()
        document.getElementById("submitHidden").click(); // Trigger the hidden submit button
        helpCommand()
        aboutCommand()
        linksCommand()
        clearInput()
    }
});

let terminalOutput = document.getElementById("terminalOutput");

let commandHistory = [];

// only goes back to the latest command for now !!!
terminalInput.addEventListener("keydown", function (event) {
    if (event.key === 'ArrowUp') {
        event.preventDefault();
        terminalInput.value = commandHistory[commandHistory.length - 1]

    }
});

function history() {
    commandHistory.push(terminalInput.value)
    console.log(commandHistory)
}

let helpList = ['help', 'clear', 'about', 'contact', 'projects', 'skills', 'education', 'experience', 'resume', 'github', 'linkedin', 'email', 'phone'];

function clearInput() {
    terminalInput.value = "";
}

// Commands
// Because of column-reverse, the first element is the last child
function helpCommand() {
    if (terminalInput.value == 'help') {
        terminalOutput.innerHTML += "<br><p>Available commands: " + helpList + "</p><br><p>help</p>"
    }
}

function aboutCommand() {
    if (terminalInput.value == 'about') {
        terminalOutput.innerHTML += "<br><p>I am Enzo ILO, passionate web developer from France. Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore unde, laudantium deleniti beatae et cupiditate nihil voluptatum exercitationem rem rerum quis, esse aspernatur incidunt. Commodi repellendus nihil quam sapiente labore.</p><br><p>about</p>"
    }
}

function linksCommand() {
    if (terminalInput.value == 'links') {
        terminalOutput.innerHTML += "<br><p>Github: <a href='https://www.github.com/Neerz99' target='_blank'><u>github.com/Neerz99</u></a></p><p>Linkedin: <a href='linkedin.com'><u>linkedin.com</u></a></p><br><p>links</p>"
    }
}