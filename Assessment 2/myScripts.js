function showLogo(p1, img1){
    document.getElementById('img1').src = "https://pbs.twimg.com/profile_images/1366305040420380673/C5dVrQWd_400x400.jpg";
    document.getElementById('p1').innerHTML = "An image of the logo of UniSA where i attend. Available at:<a href='https://www.facebook.com/UniSA/'>https://www.facebook.com/UniSA/</a>";
}
function showCampus(p1, img1){
    document.getElementById('img1').src = "https://www.saibt.sa.edu.au/content/dam/navitas/upa/saibt/images/web/spotlight-3-col/unisa-mawson-lakes-campus.jpg";
    document.getElementById('p1').innerHTML = "An image of the campus i attend. Available at: <a href='https://www.saibt.sa.edu.au/about/unisa/city-mawson-lakes-campus'>https://www.saibt.sa.edu.au/about/unisa/city-mawson-lakes-campus</a>";
}
function toggleThatTheme(){
    var activeTheme = document.documentElement.getAttribute("data-theme");
    var desiredTheme = "light-mode";

    if (activeTheme === "light-mode") {
        desiredTheme = "dark-mode";
    }

    document.documentElement.setAttribute('data-theme', desiredTheme)
    localStorage.setItem('theme', desiredTheme);
}