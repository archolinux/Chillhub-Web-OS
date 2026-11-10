// Function to launch specific app modules
function openApp(appId) {
    // Optional: Hide other active apps if you want a single focus layout
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
