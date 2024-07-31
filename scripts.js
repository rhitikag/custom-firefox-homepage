
document.addEventListener("DOMContentLoaded", function() {
    function updateClock() {
        var now = new Date();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var timeString = hours + ':' + minutes + ' ' + ampm;

        document.querySelector('.clock').textContent = timeString;

        // Update greeting
        var greetingText = hours < 12 ? 'Good Morning!' : hours < 18 ? 'Good Afternoon!' : 'Good Evening!';
        document.querySelector('.greeting').textContent = greetingText;
    }

    // Initial call to set time and greeting
    updateClock();

    // Update clock every minute
    setInterval(updateClock, 60000);

    // Function to toggle theme based on time
    function toggleTheme() {
        var hour = new Date().getHours();
        var body = document.body;

        if (hour >= 6 && hour < 18) { // Day time
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
        } else { // Night time
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
        }
    }

    // Initial theme set on page load
    toggleTheme();

    // Update theme every hour
    setInterval(toggleTheme, 3600000); // Check every hour
});
