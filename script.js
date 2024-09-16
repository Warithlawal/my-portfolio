const scrollUp = () => {
	const scrollUp = document.getElementById('scroll-up');
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
};

window.addEventListener('scroll', scrollUp);


// Get DOM elements for navigation
const navMenu = document.getElementById('nav_menu'),
    navOpen = document.getElementById('nav_open'),
    navClose = document.getElementById('nav_close'),
    overlay = document.getElementById('overlay'), // Assuming overlay is defined in your HTML
    body = document.body; // To control body scrolling

// Function to open the menu and handle overlay and scroll
function openmenu() {
    // Open menu by adding a class or adjusting styles
    navMenu.style.right = "0"; // You can also use class-based control if you prefer
    overlay.style.display = "block"; // Show overlay
    body.classList.add('no-scroll'); // Prevent scrolling
}

// Function to close the menu and handle overlay and scroll
function closemenu() {
    // Close menu by removing a class or adjusting styles
    navMenu.style.right = "-300px"; // Hide the menu
    overlay.style.display = "none"; // Hide overlay
    body.classList.remove('no-scroll'); // Restore scrolling
    body.style.filter = "none"; // Optional: reset any body filters if needed
}

// Add event listeners for opening and closing the menu
if (navOpen) {
  navOpen.addEventListener('click', openmenu);
}

if (navClose) {
  navClose.addEventListener('click', closemenu);
}

// Close menu when overlay is clicked
if (overlay) {
  overlay.addEventListener('click', closemenu);
}