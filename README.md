# Frontend Mentor - Bookmark landing page

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the newsletter form is submitted if:
  - The input field is empty
  - The email address is not formatted correctly

### Links

- Live Site URL: [https://bmark-landing-page.netlify.app/](Netlify)

## My process 
My process involved first starting out structuring my html content, following up with styling the page with a desktop first workflow becoming responsive for medium to small devices. After structuring and styling my content, I went forward with creating the JavaScript code using concepts from mobile menu toggling, for loops for accordion functionality, and having form submission capture an email address to populate onto a sheets as if in a job scenario, while having if/else conditions show success and error messages if email addresses weren't entered and requirements for being invalid. 

### Built with

- HTML5 Markup
- CSS
- JavaScript
- Desktop-first workflow

### What I learned
Biggest learning I gained from this challenge was pushing myself to learn how to fetch googlesheets url with JavaScript to get email address submitted in the form section to being added to the sheets rows for simulating a scenario for having customers subscribe to an email list.


### Useful resources

- [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration](Mozilla) - I used the MDN resource to help myself out with choosing to either use the foreach and for loop concept to achieve the open and close toggle for the FAQ menu. Another helpful idea that came from the resource was using let to assigned arrays for displaying the different bookmarks provided.

- [https://github.com/jamiewilson/form-to-google-sheets?tab=readme-ov-file](Jamie Wilson) - Jamie Wilsons github documentation for setting up googlesheets for email submissions gave me clarity to making my sheets for collecting emails that populated to googlesheets.

## Author
- Frontend Mentor - [https://www.frontendmentor.io/profile/EAguayodev/solutions](EAguayodev)


## Acknowledgments
I want to thank the team at Frontendmentor for providing the challenge for users to continue learning and enhancing their skills to becoming better web developers. I also want to give thanks to Jamie Wilson for having the app script documentation set up for us to learn and understand how to use googlesheets for populating table rows with added emails.