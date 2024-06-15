   //////////////////////////////////////////////////////////////////////////////////////////////
  /////////// Benjamin Bowering ////////////// 04-06-2024 //////////////myScripts.js////////////
 // This is my own work as defined by the university's academic integrity policy. /////////////
//////////////////////////////////////////////////////////////////////////////////////////////

// Establishes list globally for use in the to do tasks page/functions
let tasks = ["[DEMO] Complete Information Technology Fundamentals Assignment", "[DEMO] Learn how to Write Code", "[DEMO] Learn how to Charge Laptop"];


function showLogo(p1, img1){
    document.getElementById('img1').src = "https://pbs.twimg.com/profile_images/1366305040420380673/C5dVrQWd_400x400.jpg";
    document.getElementById('img1').style = "border: 15px solid orange;"
    document.getElementById('p1').innerHTML = "An image of the logo of UniSA where i attend. Available at:<a href='https://www.facebook.com/UniSA/'>https://www.facebook.com/UniSA/</a>";
}
function showCampus(p1, img1){
    document.getElementById('img1').src = "https://www.saibt.sa.edu.au/content/dam/navitas/upa/saibt/images/web/spotlight-3-col/unisa-mawson-lakes-campus.jpg";
    document.getElementById('img1').style = "border: 15px solid orange;"
    document.getElementById('p1').innerHTML = "An image of the campus i attend. Available at: <a href='https://www.saibt.sa.edu.au/about/unisa/city-mawson-lakes-campus'>https://www.saibt.sa.edu.au/about/unisa/city-mawson-lakes-campus</a>";
}
function toggleThatTheme(){
    var activeTheme = document.documentElement.getAttribute("data-theme");
    var desiredTheme = "light-mode";

    if (activeTheme === "light-mode") {
        desiredTheme = "dark-mode";
    }

    if (activeTheme == null){
        desiredTheme = "dark-mode";
    }
    
    document.documentElement.setAttribute('data-theme', desiredTheme)
    localStorage.setItem('theme', desiredTheme);
}

function getDateTime(){
    const theDateTime = new Date();
    const currentDateTime = theDateTime.toLocaleString();
    document.getElementById("dateTime").innerHTML = currentDateTime;
}
setInterval(getDateTime, 1000);


function showName(){

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    }

    const savedName = localStorage.getItem('name');
    if(savedName){
        document.getElementById("usersName").innerHTML = "Hello, " + savedName
    }

    const queryString = window.location.search;
    if (queryString){
    const urlParams = new URLSearchParams(queryString);
    const usersName = urlParams.get('user_name');
    document.getElementById("usersName").innerHTML = "Hello, " + usersName;
    localStorage.setItem('name', usersName)
    }
    displayTasks();
}

const PASSWORD = "";
function validatePassword() {
  const enteredPassword = document.getElementById("password-input").value;

  if (enteredPassword === PASSWORD) {
    document.getElementById("password").style.display = "none";
    document.getElementById("toDoList").style.display = "block";
  } 

  else {
    alert("Incorrect password, please try again")
  }
}

function addItem (){
    const taskName = document.getElementById("taskInput").value;
    if (taskName.trim() !== "") {
        tasks.push(taskName);
        document.getElementById('taskInput').value = "";
        displayTasks();
    }
    else{displayTasks();}
}

function save (){
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function load(){
    let savedTaskList = localStorage.getItem('tasks');
    if (savedTaskList) {
        tasks = JSON.parse(savedTaskList);
        displayTasks();
    }
}

function remItem(index){
    tasks.splice(index, 1);
    displayTasks();
}

function displayTasks() {
    let tasksList = document.getElementById('tasks');
    tasksList.innerHTML = "";

    tasks.forEach((task, index) => {
        let li = document.createElement('li');
        li.textContent = task;
        let remButton = document.createElement('button');
        remButton.textContent = "Remove";
        remButton.onclick = function() {
            remItem(index);
        };
        li.appendChild(remButton);
        tasksList.appendChild(li);
    });
}
