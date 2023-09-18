const hambuger = document.querySelector(".hambuger");
const navMenu = document.querySelector(".nav-menu");

hambuger.addEventListener("click", () => {
  hambuger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-links").forEach((n) =>
  n.addEventListener("click", () => {
    hambuger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

document.addEventListener("DOMContentLoaded", function () {
  const showButton = document.getElementById("showButton1");
  const blockPage = document.getElementById("blockPage1");
  const closeButton = document.getElementById("closeButton1");

  showButton.addEventListener("click", function () {
    blockPage.style.display = "block";
  });

  closeButton.addEventListener("click", function () {
    blockPage.style.display = "none";
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const showButton = document.getElementById("showButton2");
  const blockPage = document.getElementById("blockPage2");
  const closeButton = document.getElementById("closeButton2");

  showButton.addEventListener("click", function () {
    blockPage.style.display = "block";
  });

  closeButton.addEventListener("click", function () {
    blockPage.style.display = "none";
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const showButton = document.getElementById("showButton3");
  const blockPage = document.getElementById("blockPage3");
  const closeButton = document.getElementById("closeButton3");

  showButton.addEventListener("click", function () {
    blockPage.style.display = "block";
  });

  closeButton.addEventListener("click", function () {
    blockPage.style.display = "none";
  });
});



document.addEventListener("DOMContentLoaded", function () {
  const showButton = document.getElementById("showButton4");
  const blockPage = document.getElementById("blockPage4");
  const closeButton = document.getElementById("closeButton4");

  showButton.addEventListener("click", function () {
    blockPage.style.display = "block";
  });

  closeButton.addEventListener("click", function () {
    blockPage.style.display = "none";
  });
});



document.addEventListener("DOMContentLoaded", function () {
  const showButton = document.getElementById("showButton5");
  const blockPage = document.getElementById("blockPage5");
  const closeButton = document.getElementById("closeButton5");

  showButton.addEventListener("click", function () {
    blockPage.style.display = "block";
  });

  closeButton.addEventListener("click", function () {
    blockPage.style.display = "none";
  });
});




document.addEventListener("DOMContentLoaded", function () {
  const showButton = document.getElementById("showButton6");
  const blockPage = document.getElementById("blockPage6");
  const closeButton = document.getElementById("closeButton6");

  showButton.addEventListener("click", function () {
    blockPage.style.display = "block";
  });

  closeButton.addEventListener("click", function () {
    blockPage.style.display = "none";
  });
});



document.addEventListener("DOMContentLoaded", function () {
  const showButton = document.getElementById("showButton7");
  const blockPage = document.getElementById("blockPage7");
  const closeButton = document.getElementById("closeButton7");

  showButton.addEventListener("click", function () {
    blockPage.style.display = "block";
  });

  closeButton.addEventListener("click", function () {
    blockPage.style.display = "none";
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const showButton = document.getElementById("showButton8");
  const blockPage = document.getElementById("blockPage8");
  const closeButton = document.getElementById("closeButton8");

  showButton.addEventListener("click", function () {
    blockPage.style.display = "block";
  });

  closeButton.addEventListener("click", function () {
    blockPage.style.display = "none";
  });
});



document.addEventListener("DOMContentLoaded", function () {
  const showButton = document.getElementById("showButton9");
  const blockPage = document.getElementById("blockPage9");
  const closeButton = document.getElementById("closeButton9");

  showButton.addEventListener("click", function () {
    blockPage.style.display = "block";
  });

  closeButton.addEventListener("click", function () {
    blockPage.style.display = "none";
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const showButton = document.getElementById("showButton10");
  const blockPage = document.getElementById("blockPage10");
  const closeButton = document.getElementById("closeButton10");

  showButton.addEventListener("click", function () {
    blockPage.style.display = "block";
  });

  closeButton.addEventListener("click", function () {
    blockPage.style.display = "none";
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const showButton = document.getElementById("showButton11");
  const blockPage = document.getElementById("blockPage11");
  const closeButton = document.getElementById("closeButton11");

  showButton.addEventListener("click", function () {
    blockPage.style.display = "block";
  });

  closeButton.addEventListener("click", function () {
    blockPage.style.display = "none";
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const showButton = document.getElementById("showButton12");
  const blockPage = document.getElementById("blockPage12");
  const closeButton = document.getElementById("closeButton12");

  showButton.addEventListener("click", function () {
    blockPage.style.display = "block";
  });

  closeButton.addEventListener("click", function () {
    blockPage.style.display = "none";
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const showButton = document.getElementById("showButton13");
  const blockPage = document.getElementById("blockPage13");
  const closeButton = document.getElementById("closeButton13");

  showButton.addEventListener("click", function () {
    blockPage.style.display = "block";
  });

  closeButton.addEventListener("click", function () {
    blockPage.style.display = "none";
  });
});



document.addEventListener("DOMContentLoaded", function () {
  const showButton = document.getElementById("showButton14");
  const blockPage = document.getElementById("blockPage14");
  const closeButton = document.getElementById("closeButton14");

  showButton.addEventListener("click", function () {
    blockPage.style.display = "block";
  });

  closeButton.addEventListener("click", function () {
    blockPage.style.display = "none";
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const showButton = document.getElementById("showButton15");
  const blockPage = document.getElementById("blockPage15");
  const closeButton = document.getElementById("closeButton15");

  showButton.addEventListener("click", function () {
    blockPage.style.display = "block";
  });

  closeButton.addEventListener("click", function () {
    blockPage.style.display = "none";
  });
});



document.addEventListener("DOMContentLoaded", function () {
  const showButton = document.getElementById("showButton16");
  const blockPage = document.getElementById("blockPage16");
  const closeButton = document.getElementById("closeButton16");

  showButton.addEventListener("click", function () {
    blockPage.style.display = "block";
  });

  closeButton.addEventListener("click", function () {
    blockPage.style.display = "none";
  });
});

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




// let previewContainer = document.querySelector('.product-preview');
// let previewBox = previewContainer.querySelectorAll('.preview');

// document.querySelectorAll('.first-card .allCard').forEach(allCard =>{
//     allCard.onclick = () =>{
//         let name = allCard.getAttribute('data-name')
//         previewBox.forEach(allCard =>{
//             let target = preview.getAttribute('data-target');
//             if(name == target){
//                 preview.
//             }
//         })
//     };
// });






































// document.addEventListener("DOMContentLoaded", function () {
//     // Get all the item elements
//     const items = document.querySelectorAll(".allCard");

//     // Add a click event listener to the document
//     document.addEventListener("click", function (event) {
//         // Check if the clicked element has the class "showButton"
//         if (event.target.classList.contains("showButton")) {
//             // Find the closest parent item element
//             const item = event.target.closest(".allCard");

//             // Toggle the visibility of the block page within that item
//             const blockPage = item.querySelector(".block-page");
//             blockPage.style.display = "block";
//         }

//         // Check if the clicked element has the class "closeButton"
//         if (event.target.idList.contains("closeButton")) {
//             // Find the closest parent item element
//             const item = event.target.closest(".allCard");

//             // Hide the block page within that item
//             const blockPage = item.querySelector(".block-page");
//             blockPage.style.display = "none";
//         }
//     });
// });
