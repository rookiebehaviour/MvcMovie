function toggleTheme() {
    let element = document.querySelector("body");
    let button = document.getElementById("toggle");

    if (element.classList.contains("dark-mode")) {
        button.innerText = "Dark Mode";
        element.classList.remove("dark-mode");
        localStorage.setItem("theme", "light");
    } else {
        button.innerText = "Light Mode";
        element.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
    }
}

// When the page loads, check the theme from localStorage
document.addEventListener("DOMContentLoaded", function () {
    let savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.querySelector("body").classList.add("dark-mode");
        document.getElementById("toggle").innerText = "Light Mode";
    }
});


