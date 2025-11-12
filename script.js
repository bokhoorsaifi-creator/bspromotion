// --- Menu hamburger ---
const hamburger = document.getElementById('hamburger');
const navList = document.querySelector('.nav-list');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navList.classList.toggle('active');
});

// --- Dropdown au clic ---
const dropbtn = document.querySelector('.dropbtn');
const dropdownContent = document.querySelector('.dropdown-content');

dropbtn.addEventListener('click', (e) => {
    e.preventDefault(); // empêche le scroll automatique vers #packs
    dropdownContent.classList.toggle('show');
});
