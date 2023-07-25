// Function to update the clock
function showTime() {
    const myClockDiv = document.getElementById("myClock");
    const now = new Date();

    // Format the time as HH:mm:ss
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    // Get the day as a string
    const day = now.toLocaleDateString(undefined, { weekday: 'long' });

    // Update the content of the div
    myClockDiv.textContent = `${time} ${day}`;
}
const userName = prompt("Adınız Nedir:");
const userNameDoc = document.getElementById("myName");
userNameDoc.textContent = userName;

// Call the function once to display the initial time
showTime();

// Update the clock every second
setInterval(showTime, 1000);
