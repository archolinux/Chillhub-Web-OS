// Function to launch specific app modules and update taskbar indicator lines
function openApp(appId) {
    let windows = document.querySelectorAll('.app-window');
    windows.forEach(win => win.classList.remove('active'));
    
    // Toggle active window view
    document.getElementById(appId).classList.add('active');
    
    // Add active indicator styling bar to taskbar item
    if (appId === 'gameApp') {
        document.getElementById('taskbarGames').classList.add('active-tab');
    }
}

// Function to shut down or close desktop apps
function closeApp(appId) {
    document.getElementById(appId).classList.remove('active');
    
    // Remove active bar formatting indicator from taskbar target
    if (appId === 'gameApp') {
        document.getElementById('taskbarGames').classList.remove('active-tab');
    }
}

// Action to run the virtual dashboard reboot loop
function triggerRestart() {
    document.getElementById("restartScreen").style.display = "flex";
    
    setTimeout(function() {
        window.location.reload();
    }, 2000);
}

// System Start Menu Navigation Toggles
function toggleStartMenu(event) {
    event.stopPropagation();
    let menu = document.getElementById("startMenu");
    
    if (menu.style.display === "flex") {
        closeStartMenu();
    } else {
        menu.style.display = "flex";
        // Force browser to register layout before initializing opacity styles for animations
        setTimeout(() => menu.classList.add("active"), 10);
    }
}

function closeStartMenu() {
    let menu = document.getElementById("startMenu");
    menu.classList.remove("active");
    setTimeout(() => {
        if (!menu.classList.contains("active")) menu.style.display = "none";
    }, 200);
}

// Live Windows System Tray Real-Time Clock Processor
function updateSystemClock() {
    const now = new Date();
    
    // Process formatted text elements for Time
    let hours = now.getHours();
    let minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // Converts '0' hour markers to '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    const timeString = `${hours}:${minutes} ${ampm}`;
    
    // Process formatted text elements for Date
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const year = now.getFullYear();
    const dateString = `${month}/${day}/${year}`;
    
    // Print lines directly down to the tray element target container split layout
    document.getElementById('liveClock').innerHTML = `${timeString}<br>${dateString}`;
}

// Boot up clock loop sequence and tick refresh rate every second
setInterval(updateSystemClock, 1000);
updateSystemClock();
