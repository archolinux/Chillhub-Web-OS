// Function to launch specific app modules
function openApp(appId) {
    let windows = document.querySelectorAll('.app-window');
    windows.forEach(win => win.classList.remove('active'));
    
    // Toggle active window view
    document.getElementById(appId).classList.add('active');
}

// Function to shut down or close desktop apps
function closeApp(appId) {
    document.getElementById(appId).classList.remove('active');
}

// Action to run the virtual dashboard reboot loop
function triggerRestart() {
    document.getElementById("restartScreen").style.display = "flex";
    
    setTimeout(function() {
        window.location.reload();
    }, 2200);
}

// System Start Menu Navigation Toggles
function toggleStartMenu(event) {
    event.stopPropagation(); // Prevents clicking the button from triggering a background click close
    let menu = document.getElementById("startMenu");
    menu.classList.toggle("active");
}

function closeStartMenu() {
    let menu = document.getElementById("startMenu");
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
    }
}
