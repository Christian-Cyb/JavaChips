let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

document.querySelectorAll('.image-slider img').forEach(images => {
    images.onclick = () => {
        var src = images.getAttribute('src');
        document.querySelector('.main-home-image').src = src;
    };
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        }
    },
});

document.addEventListener("DOMContentLoaded", function() {
    // Function to handle fetching data from the server
    function fetchData() {
        // Make an AJAX request
        var xhr = new XMLHttpRequest();

        // Define the URL to fetch data from
        var url = "https://api.example.com/data"; // Replace with your API endpoint

        xhr.open("GET", url, true);

        // Set up the onload callback function
        xhr.onload = function() {
            if (xhr.status === 200) {
                // If request is successful, display the fetched data
                document.getElementById("dataContainer").innerHTML = xhr.responseText;
            } else {
                // If request fails, display an error message
                document.getElementById("dataContainer").innerHTML = "Error fetching data!";
            }
        };

        // Send the request
        xhr.send();
    }

    // Add event listener to the button to fetch data when clicked
    document.getElementById("fetchDataBtn").addEventListener("click", fetchData);
});

