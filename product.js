document.addEventListener("DOMContentLoaded", function () {
    const showButton = document.getElementById("showButton");
    const blockPage = document.getElementById("blockPage");
    const closeButton = document.getElementById("closeButton");

    showButton.addEventListener("click", function () {
        blockPage.style.display = "block";
    });

    closeButton.addEventListener("click", function () {
        blockPage.style.display = "none";
    });
});



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

