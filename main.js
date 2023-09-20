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



document.getElementById('search-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting normally
    const searchInput = document.getElementById('search-input').value;
    alert('You searched for: ' + searchInput);// You can replace the alert with an actual search functionality using AJAX or other methods.
  });
  














 document.addEventListener("DOMContentLoaded", function () {
    const accordions = document.querySelectorAll(".accordion-item");

    accordions.forEach((accordion) => {
        const header = accordion.querySelector(".accordion-header");
        const content = accordion.querySelector(".accordion-content");

        header.addEventListener("click", () => {
            if (!content.classList.contains("show")) {
                // Close all open accordion items
                accordions.forEach((item) => {
                    const itemContent = item.querySelector(".accordion-content");
                    if (itemContent !== content && itemContent.classList.contains("show")) {
                        itemContent.classList.remove("show");
                        item.querySelector(".accordion-icon").textContent = "+";
                    }
                });
                
                // Open the clicked accordion item
                content.classList.add("show");
                header.querySelector(".accordion-icon").textContent = "−";
            } else {
                // Close the clicked accordion item
                content.classList.remove("show");
                header.querySelector(".accordion-icon").textContent = "+";
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('signup-form');
    
    signupForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Gather form data and perform necessary actions, such as validation and submission
        const fullName = document.getElementById('full-name').value;

        // You can add more form fields and data handling here

        // For demonstration purposes, let's log the data to the console
        console.log('Full Name:', fullName);

        // You can implement form submission to your server or any other desired actions here
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const formSections = document.querySelectorAll('.form-section');
    const nextButtons = document.querySelectorAll('.next-section');
    const prevButtons = document.querySelectorAll('.prev-section');
    let currentSectionIndex = 0;

    function showSection(index) {
        formSections.forEach((section, i) => {
            if (i === index) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    }

    showSection(currentSectionIndex);

    nextButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            currentSectionIndex++;
            showSection(currentSectionIndex);
        });
    });

    prevButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            currentSectionIndex--;
            showSection(currentSectionIndex);
        });
    });
});


// netlifyIdentity.on('init', (user) => {
//     if (user) {
//         document.getElementById('user-info').textContent = `Hello, ${user.user_metadata.full_name}!`;
//     }
// });

netlifyIdentity.on('init', (user) => {
    if (user) {
        // User is logged in, show "Log Out" button and user info
        document.getElementById('login-button').style.display = 'none';
        document.getElementById('signup-button').style.display = 'none';
        document.getElementById('logout-button').style.display = 'block';
        document.getElementById('user-info').textContent = `Hello, ${user.user_metadata.full_name}!`;

        // Redirect to the dashboard after login
        window.location.href = 'dashboard.html';
    } else {
        // User is not logged in, show "Log In" and "Sign Up" buttons
        document.getElementById('login-button').style.display = 'block';
        document.getElementById('signup-button').style.display = 'block';
        document.getElementById('logout-button').style.display = 'none';
        document.getElementById('user-info').textContent = '';
    }
});

// Function to handle logout
function logout() {
    netlifyIdentity.logout();
}