function toggleMobileMenu(icon) {
    icon.classList.toggle("open");
    
    const mobileMenu = document.querySelector(".mobile-menu");

    // Toggle the mobile menu display
    if (mobileMenu.style.display === "flex") {
        mobileMenu.style.display = "none";
        document.body.style.overflow = "auto"; // Enable scrolling when menu is closed
    } else {
        mobileMenu.style.display = "flex";
        document.body.style.overflow = "hidden"; // Disable scrolling when menu is open
    }
}

// Ensure mobile menu is hidden on resize to larger screens
window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
        document.querySelector('.mobile-menu').style.display = 'none';
        document.querySelector('#hamburger-icon').classList.remove('open');
        document.body.style.overflow = "auto"; // Re-enable scrolling on larger screens
    }
});