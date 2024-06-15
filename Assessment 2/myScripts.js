   //////////////////////////////////////////////////////////////////////////////////////////////
  /////////// Benjamin Bowering ////////////// 04-06-2024 //////////////myScripts.js////////////
 // This is my own work as defined by the university's academic integrity policy. /////////////
//////////////////////////////////////////////////////////////////////////////////////////////

// Establishes list globally for use in the to do tasks page/functions
let tasks = ["[DEMO] Complete Information Technology Fundamentals Assignment", "[DEMO] Learn how to Write Code", "[DEMO] Learn how to Charge Laptop"];

// Show image 1 button
function showLogo(p1, img1){
    document.getElementById('img1').src = "https://pbs.twimg.com/profile_images/1366305040420380673/C5dVrQWd_400x400.jpg";
    document.getElementById('img1').style = "border: 15px solid orange;"
    document.getElementById('p1').innerHTML = "An image of the logo of UniSA where i attend. Available at:<a href='https://www.facebook.com/UniSA/'>https://www.facebook.com/UniSA/</a>";
}
// Show image 2 button
function showCampus(p1, img1){
    document.getElementById('img1').src = "https://www.saibt.sa.edu.au/content/dam/navitas/upa/saibt/images/web/spotlight-3-col/unisa-mawson-lakes-campus.jpg";
    document.getElementById('img1').style = "border: 15px solid orange;"
    document.getElementById('p1').innerHTML = "An image of the campus i attend. Available at: <a href='https://www.saibt.sa.edu.au/about/unisa/city-mawson-lakes-campus'>https://www.saibt.sa.edu.au/about/unisa/city-mawson-lakes-campus</a>";
}
// toggles the theme
function toggleThatTheme(){
    var activeTheme = document.documentElement.getAttribute("data-theme");
    var desiredTheme = "light-mode";

    // if in dark or init mode switch to dark mode
    if (activeTheme === "light-mode") {
        desiredTheme = "dark-mode";
    }

    if (activeTheme == null){
        desiredTheme = "dark-mode";
    }
    
    document.documentElement.setAttribute('data-theme', desiredTheme)
    localStorage.setItem('theme', desiredTheme); // saves to local storage to persist
}
// Gets and creates the clock on the header and updates every 1 second
function getDateTime(){
    const theDateTime = new Date();
    const currentDateTime = theDateTime.toLocaleString();
    document.getElementById("dateTime").innerHTML = currentDateTime;
}
setInterval(getDateTime, 1000);


function showName(){
    // Checks theme from local storage and switches if necessary
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    }
    // Checks if there is a usersname saved in local storage and updates if necessary
    const savedName = localStorage.getItem('name');
    if(savedName){
        document.getElementById("usersName").innerHTML = "Hello, " + savedName
    }
    // Checks if there is a url paramater for the users name and updates if there is
    const queryString = window.location.search;
    if (queryString){
    const urlParams = new URLSearchParams(queryString);
    const usersName = urlParams.get('user_name');
    document.getElementById("usersName").innerHTML = "Hello, " + usersName;
    localStorage.setItem('name', usersName)
    }
    // Updates the to do list to the saved version on load
    load()
    displayTasks();
}

const dasParswort = ""; // Sets to do list password (unencrypyted)

// Validates the inputed password against var dasParswort
function validatePassword() {
  const enteredPassword = document.getElementById("password-input").value;

  if (enteredPassword === dasParswort) {
    document.getElementById("password").style.display = "none";
    document.getElementById("toDoList").style.display = "block";
  } 

  else {
    alert("Incorrect password, please try again") // Browser error msg for wrong password
  }
}
// Function to add a task to the to do list
function addItem (){
    const taskName = document.getElementById("taskInput").value;
    // If a valid string is entered in box add to the list and call display
    if (taskName.trim() !== "") {
        tasks.push(taskName);
        document.getElementById('taskInput').value = "";
        displayTasks();
    }
}
// Func. to save the list to local storage in javascript object notation
function save (){
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
// Func. to load and decode js. obj. notation of tasklist and update display
function load(){
    let savedTaskList = localStorage.getItem('tasks');
    if (savedTaskList) {
        tasks = JSON.parse(savedTaskList);
        displayTasks();
    }
}
// Powers button that as child object of task li elements allows for their removal
function remItem(index){
    tasks.splice(index, 1);
    displayTasks();
}
// Updates display of the task list
function displayTasks() {
    let tasksList = document.getElementById('tasks');
    tasksList.innerHTML = "";
    // Creates a li el. for each task in the list
    tasks.forEach((task, index) => {
        let li = document.createElement('li');
        li.textContent = task;
        let remButton = document.createElement('button');
        remButton.textContent = "Remove";
        remButton.onclick = function() {
            remItem(index);
        };
        li.appendChild(remButton); // adds remove button as child of li el.
        tasksList.appendChild(li); // adds li el. as child of the tasksList element
    });
}
