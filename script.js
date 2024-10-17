const usernameInput = document.getElementById('username');
const saveBtn = document.getElementById('save-btn');
const clearBtn = document.getElementById('clear-btn');
const displayName = document.getElementById('display-name');

// time of day (took way to long to understand but got it lol) //
function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) {
        return 'Good Morning';
    } else if (hour < 18) {
        return 'Good Afternoon';
    } else {
        return 'Good Evening';
    }
}

// name local storage //
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed");
    const savedName = localStorage.getItem('username');
    if (savedName) {
        const greeting = getGreeting();
        displayName.textContent = `${greeting}, ${savedName}!`;
        console.log("Saved name found:", savedName);
    } else {
        console.log("No name found in localStorage");
    }
});

// Save name //
saveBtn.addEventListener('click', () => {
    console.log("Save button clicked");
    const name = usernameInput.value.trim(); 
    if (name) {
        localStorage.setItem('username', name);
        const greeting = getGreeting();
        displayName.textContent = `${greeting}, ${name}!`;
        usernameInput.value = '';
        console.log("Name saved:", name);
    } else {
        console.log("No name entered");
    }
});

// Clear name //
clearBtn.addEventListener('click', () => {
    console.log("Clear button clicked");
    localStorage.removeItem('username');
    displayName.textContent = '';
    console.log("Name cleared from localStorage");
});
