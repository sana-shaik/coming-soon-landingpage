const countdown = document.querySelector('.countdown');

// set Launch Date
const launchDate = new Date('Jan 1, 2021 13:00:00').getTime();

// update every second
const intv1 = setInterval(() => {
    // Get todays date and time (ms)
    const now = new Date().getTime();

    // Distance from now to the launch date
    const distance = launchDate - now;

    // TIme Calculations
    const days = Math.floor(distance/(1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24 )) / (1000 * 60 * 60));
    const mins = Math.floor((distance % (1000 * 60 * 60))/(1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60))/1000);

    // Display result
    countdown.innerHTML = `
    <div>${days}<span>Days</span></div>
    <div>${hours}<span>Hours</span></div>
    <div>${mins}<span>Minutes</span></div>
    <div>${seconds}<span>Seconds</span></div>
    `;

    // If Launch Date passed
    if(distance < 0) {
        // Stop countdown
        clearInterval(intv1);
        // Style and output text
        countdown.style.color = '#17a2b8';
        countdown.innerHTML = 'Launched!';
    }
}, 1000); 