// navigation ---


const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
const navLinks = document.getElementById('nav-links');
const overlay = document.getElementById('overlay');

// Open the navigation menu
menuIcon.addEventListener('click', () => {
    navLinks.classList.add('show');
    overlay.classList.add('show');
});

// Close the navigation menu
closeIcon.addEventListener('click', () => {
    navLinks.classList.remove('show');
    overlay.classList.remove('show');
});

// Close the navigation menu when clicking the overlay
overlay.addEventListener('click', () => {
    navLinks.classList.remove('show');
    overlay.classList.remove('show');
});

function toggleText(event) {
    event.preventDefault();
    let moreText = document.querySelector('.more-text');
    let moreBtn = document.querySelector('.more-btn');
    
    if (moreText.style.display === 'none' || moreText.style.display === '') {
        moreText.style.display = 'inline';
        moreBtn.textContent = ' Less';
    } else {
        moreText.style.display = 'none';
        moreBtn.textContent = ' More';
    }
}

const trigger = document.querySelector('.price-trigger');
const wrapper = document.querySelector('.price-filter-wrapper');
const filterBox = document.getElementById('priceFilterBox');

// Use mouseenter and mouseleave on wrapper
wrapper.addEventListener('mouseenter', () => {
  filterBox.classList.add('show');
});

wrapper.addEventListener('mouseleave', () => {
  filterBox.classList.remove('show');
});

