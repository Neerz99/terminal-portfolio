let terminalInput = document.getElementById("terminalInput");
let terminalOutput = document.getElementById("terminalOutput");
let commandHistory = [];
let currentIndex = 0;
let helpList = ['help', 'clear', 'about', 'contact', 'projects', 'skills', 'education', 'experience', 'resume', 'github', 'linkedin', 'email', 'phone', 'links'];


terminalInput.addEventListener("keydown", function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        history();
        document.getElementById("submitHidden").click();
        helpCommand();
        aboutCommand();
        linksCommand();
        unknownCommand();
        clearCommand();
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

// Adds the command to the command history
function history() {
    commandHistory.push(terminalInput.value);
    currentIndex = commandHistory.length;
}



// Clears the input field after submitting
function clearInput() {
    terminalInput.value = "";
}

// Returns a error message if the command is not recognized
function unknownCommand() {
    if (!helpList.includes(terminalInput.value)) {
        terminalOutput.innerHTML += "<br><br><p>Unknown command, type 'help' to see available commands.</p>"
    }
}


// Commands
// Because of column-reverse, the first element is the last child

function helpCommand() {
    if (terminalInput.value == 'help') {
        terminalOutput.innerHTML += "<br><br><p>Available commands: " + helpList + "</p><br><p>Help:</p>"
    }
}

function clearCommand() {
    if (terminalInput.value == 'clear') {
        terminalOutput.innerHTML = "";
    }
}

function aboutCommand() {
    if (terminalInput.value == 'about') {
        terminalOutput.innerHTML += "<br><p>I am Enzo ILO, passionate web developer from France. Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore unde, laudantium deleniti beatae et cupiditate nihil voluptatum exercitationem rem rerum quis, esse aspernatur incidunt. Commodi repellendus nihil quam sapiente labore.</p><br><pre>########## ###    #### ######### ########          ########### ########## ######## </pre><pre> #+#        #+#   #+#+#  #+#     #+#    #+#             #+#     #+#       #+#    #+#     </pre><pre>  +#+        +#+  +#+#+#   +#+    +#+    +#+             +#+     +#+       +#+    +#+    </pre><pre></pre   +#++:++#   +#+ +:+ +#+    +#+   +#+    +:+             +#+     +#+       +#+    +:+   ><pre>    +:+:+      :+:+:+  +:+     +:+  +:+    +:+             +:+     +:+       +:+    +:+  </pre><pre>     :+:        :+:+:   :+:      :+: :+:    :+:             :+:     :+:       :+:    :+: </pre><pre>      :::::::::: ::::    ::: ::::::::: ::::::::          ::::::::::: :::        :::::::: </pre><br><p>About:</p>"
    }
}

function linksCommand() {
    if (terminalInput.value == 'links') {
        terminalOutput.innerHTML += "<br><br><p>Github: <a href='https://www.github.com/Neerz99' target='_blank'><u>github.com/Neerz99</u></a></p><p>Linkedin: <a href='linkedin.com'><u>linkedin.com</u></a></p><br><p>Links:</p>"
    }
}

