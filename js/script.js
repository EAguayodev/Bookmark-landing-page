/* 
TODO: 
    1. Add form validation to email submission form with error message for invalid email format && missing "@" symbol 

    2. Display success message upon successful form submission
*/

// mobile menu toggle
const hamburger = document.querySelector('.mobile-menu-toggle');
const menuMobile = document.querySelector('.nav-links');
const iconClose = document.querySelector('.icon-close');
const iconOpen = document.querySelector('.icon-open');
const logoFirst = document.querySelector('.logo-first');
const logoSecond = document.querySelector('.logo-second');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    menuMobile.classList.toggle('active');
    iconClose.classList.toggle('active');
    iconOpen.classList.toggle('active');
    logoFirst.classList.toggle('active');
    logoSecond.classList.toggle('active');
});

// accordion slider for features section to display different content when pushing buttons: simple bookmarking, speedy searching, easy sharing.
const featureButtons = document.querySelectorAll('.tab');

let featureTitles = [
    'Bookmark in one click',
    'Intelligent search',
    'Share your bookmarks'
];

let featureTexts = [
    'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
    'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.', 
    'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.'
];

let featureImages = [
    'images/illustration-features-tab-1.svg',
    'images/illustration-features-tab-2.svg',
    'images/illustration-features-tab-3.svg'
];

featureButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        featureButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Update feature title, text, and image
        const featureTitle = document.querySelector('.tab-title');
        const featureText = document.querySelector('.tab-description');
        const featureImage = document.querySelector('.feature-tab');

        featureTitle.textContent = featureTitles[index];
        featureText.textContent = featureTexts[index];
        featureImage.src = featureImages[index];
    });
});

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
const form = document.getElementById("sb-19832");
const emailInput = document.querySelector('.email-submit');
const errorMessage = document.querySelector('#error-display');
const iconError = document.querySelector('.icon-error');

form.addEventListener('submit', function (event) {
    const emailValue = emailInput.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // Basic email format pattern

    if (!emailPattern.test(emailValue)) {
        event.preventDefault();  // Prevent form submission
        errorMessage.classList.add('active');
        iconError.classList.add('active');
        emailInput.style.border = "2px solid #FA5959";  // Red border for input field
    } else if (!emailPattern.test(emailValue)) {
        errorMessage.classList.add("active");
        errorMessage.style.backgroundColor = "#FA5959";
        iconError.classList.add('active');
        emailInput.style.border = "2px solid #FA5959";
    } else {
        errorMessage.textContent = "Thank you for subscribing!";
        errorMessage.classList.add("success");
        // Clear error message
        // Display success message
        // fetch airtable link here to store email submissions
        fetch("https://api.airtable.com/v0/YOUR_BASE_ID/YOUR_TABLE_NAME", {
            method: "POST",
            headers: {
                Authorization: "Bearer YOUR_API_KEY",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                fields: {
                    emailPattern: emailValue
                }
            })
        })
        .then(response => {
            if (response.ok) {
                alert("Thank you for subscribing!");
            } else {
                throw new Error("Failed to submit email");
            }
        })
        .catch(error => {
            console.error(error);
        });
    }
});