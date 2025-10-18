/* 
TODO: 1. Add toggle functionality to mobile menu
      2. Add form validation to email submission form
      3. Add for each or for loop to FAQ section to display FAQ items from an array of objects
      4. Add smooth scrolling to anchor links
*/

// mobile menu toggle
const hamburger = document.querySelector('.mobile-menu-toggle');
const menuMobile = document.querySelector('.nav-links');
const iconClose = document.querySelector('.icon-close');
const iconOpen = document.querySelector('.icon-open');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    menuMobile.classList.toggle('active');
    iconClose.classList.toggle('active');
    iconOpen.classList.toggle('active');
});


// accordion slider for features section to display different content when pushing buttons: simple bookmarking, speedy searching, easy sharing.

// FAQ accordion button to show/hide answers when clicking questions 
const faqItems = document.querySelectorAll('.accordion-header');
const faqContents = document.querySelectorAll('.accordion-content');
const arrow = document.querySelectorAll('.icon-arrow');

for (let i = 0; i < faqItems.length; i++) {
    const faqItem = faqItems[i];
    const faqContent = faqContents[i];
    faqItem.addEventListener('click', function () {
        faqContent.classList.toggle('active');
        arrow[i].style.transform = faqContent.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
    });
}
// form validation for email submission & displaying error message if email is invalid, not in correct format, empty, or missing "@" symbol