//your JS code here. If required.
 // Function to update the timer
        function updateTimer() {
            const timerElement = document.getElementById('timer');
            const currentDate = new Date();
            const formattedDate = currentDate.toLocaleDateString();
            const formattedTime = currentDate.toLocaleTimeString();
            timerElement.textContent = `${formattedDate} ${formattedTime}`;
        }

        // Update the timer immediately and then every second
        updateTimer();
        setInterval(updateTimer, 1000);
