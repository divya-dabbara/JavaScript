// Function to display the current date and time in the format YYYY-MM-DD HH:MM:SS:

function getCurrentDateTime() {
    const now = new Date();
    
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const day = String(now.getDate()).padStart(2, '0');
    
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

// Example usage:
console.log(getCurrentDateTime());


// Function to calculate the number of days between two dates:

function calculateDaysBetweenDates(date1, date2) {
    // Parse the dates to get milliseconds
    const date1Ms = new Date(date1).getTime();
    const date2Ms = new Date(date2).getTime();
    
    // Calculate the difference in milliseconds
    const differenceMs = Math.abs(date2Ms - date1Ms);
    
    // Convert milliseconds to days
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    return Math.floor(differenceMs / millisecondsPerDay);
}

// Example usage:
console.log(calculateDaysBetweenDates('2024-01-01', '2024-07-29'));


// Function to return the day of the week for a given date:

function getDayOfWeek(date) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dateObj = new Date(date);
    
    // Get the day of the week (0-6) and map to the day name
    return daysOfWeek[dateObj.getDay()];
}

// Example usage:
console.log(getDayOfWeek('2024-07-29'));