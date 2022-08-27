let darkMode = false;

function changeDarkMode() {
    if(darkMode) {
        // Light mode
darkMode = false;
document.documentElement.style.setProperty("--text-color", "black");
document.documentElement.style.setProperty("--background-color", "#efe7e5");
   document.getElementById("dark-light-mode").innerHTML = "Dark mode";
} else {
// Dark mode 
darkMode = true;
document.documentElement.style.setProperty("--text-color", "white");
document.documentElement.style.setProperty("--background-color", "black");
   document.getElementById("dark-light-mode").innerHTML = "Light mode";
    }
}