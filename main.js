




// JavaScript to show the footer on scroll
window.onscroll = function() {
    const footer = document.getElementById('transparent-footer');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        footer.classList.add('visible'); // Show the footer
    } else {
        footer.classList.remove('visible'); // Hide the footer
    }
};
