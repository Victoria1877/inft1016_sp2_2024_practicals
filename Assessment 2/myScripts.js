   //////////////////////////////////////////////////////////////////////////////////////////////
  /////////// Benjamin Bowering ////////////// 04-06-2024 //////////////myScripts.js////////////
 // This is my own work as defined by the university's academic integrity policy. /////////////
//////////////////////////////////////////////////////////////////////////////////////////////


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
        desiredTheme = "dark-mode";}

    if (activeTheme == null){
        desiredTheme = "dark-mode"}

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
    const queryString = window.location.search;
    if (queryString){
    const urlParams = new URLSearchParams(queryString);
    const usersName = urlParams.get('user_name');
    document.getElementById("usersName").innerHTML = "Hello, " + usersName;
    }
}