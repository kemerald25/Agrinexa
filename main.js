const  hambuger = document.querySelector(".hambuger");
const navMenu = document.querySelector(".nav-menu");


hambuger.addEventListener("click", () => {
    hambuger.classList.toggle("active");
    navMenu.classList.toggle("active");
})



document.querySelectorAll(".nav-links").forEach(n => n.
addEventListener("click", () => {
    hambuger.classList.remove("active");
    navMenu.classList.remove("active");
}));




// Countdown




document.addEventListener('DOMContentLoaded', function() {
    // Set the target date for the countdown (replace with your desired date)
const targetDate = new Date('2023-11-31T00:00:00').getTime();

function updateCountdown() {
    const currentDate = new Date().getTime();
    const timeLeft = targetDate - currentDate;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // console.log(`Days: ${days}, Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}`);

    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

    if (timeLeft <= 0) {
        clearInterval(countdownInterval);
        document.querySelector('.countdown').innerHTML = 'Countdown expired!';
    }
}

// Initial call to update the countdown
updateCountdown();

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);
});




// JavaScript to handle slide changes
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const scrollableWrapper = document.querySelector('.scrollable_wrapper');

let scrollPosition = 0;

prevButton.addEventListener('click', () => {
    scrollPosition -= 300; // Adjust the scroll distance as needed
    scrollableWrapper.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
    });
});

nextButton.addEventListener('click', () => {
    scrollPosition += 300; // Adjust the scroll distance as needed
    scrollableWrapper.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
    });
});
