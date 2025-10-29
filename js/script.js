const hamburger = document.querySelector(".mobile-menu-toggle");
const menuMobile = document.querySelector(".nav-links");
const iconClose = document.querySelector(".icon-close");
const iconOpen = document.querySelector(".icon-open");
const logoFirst = document.querySelector(".logo-first");
const logoSecond = document.querySelector(".logo-second");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  menuMobile.classList.toggle("active");
  iconClose.classList.toggle("active");
  iconOpen.classList.toggle("active");
  logoFirst.classList.toggle("active");
  logoSecond.classList.toggle("active");
});


const featureButtons = document.querySelectorAll(".tab");

let featureTitles = [
  "Bookmark in one click",
  "Intelligent search",
  "Share your bookmarks",
];

let featureTexts = [
  "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
  "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
  "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
];

let featureImages = [
  "images/illustration-features-tab-1.svg",
  "images/illustration-features-tab-2.svg",
  "images/illustration-features-tab-3.svg",
];

featureButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    
    featureButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

 
    const featureTitle = document.querySelector(".tab-title");
    const featureText = document.querySelector(".tab-description");
    const featureImage = document.querySelector(".feature-tab");

    featureTitle.textContent = featureTitles[index];
    featureText.textContent = featureTexts[index];
    featureImage.src = featureImages[index];
  });
});


const faqItems = document.querySelectorAll(".accordion-header");
const faqContents = document.querySelectorAll(".accordion-content");
const arrow = document.querySelectorAll(".icon-arrow");

for (let i = 0; i < faqItems.length; i++) {
  const faqItem = faqItems[i];
  const faqContent = faqContents[i];
  faqItem.addEventListener("click", function () {
    faqContent.classList.toggle("active");
    arrow[i].style.transform = faqContent.classList.contains("active")
      ? "rotate(180deg)"
      : "rotate(0deg)";
  });
}


const form = document.getElementById("sb-19832");
const emailInput = document.querySelector(".email-submit");
const errorMessage = document.querySelector("#error-display");
const iconError = document.querySelector(".icon-error");
const submitButton = document.querySelector("#contact-submit");
const scriptURL =
  "https://script.google.com/macros/s/AKfycbw9a8FupUfY7tnPLQ5EhUcAXpMR2rT7jmw03wcJ1JAYBRJMRFGOHut9CM_e5utyErk/exec";

form.addEventListener("submit", function (event) {
  const emailValue = emailInput.value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
  

  if (!emailPattern.test(emailValue)) {
    event.preventDefault(); 
    errorMessage.classList.add("active");
    iconError.classList.add("active");
    emailInput.style.border = "2px solid #FA5959"; 
  } else if (!emailPattern.test(emailValue)) {
    errorMessage.classList.add("active");
    errorMessage.style.backgroundColor = "#FA5959";
    iconError.classList.add("active");
    emailInput.style.border = "2px solid #FA5959";
  } else {
    event.preventDefault();
    errorMessage.innerText = "Thank you for subscribing!";
    errorMessage.classList.add("success");
    iconError.classList.remove("active");
    emailInput.style.border = "2px solid #26C6DA";

    fetch(scriptURL, {
      method: "POST",
      body: new FormData(form)
    })
    .then((response) => {
      if (response.ok) {
        alert("Thank you for subscribing!");
      } else {
        throw new Error("Failed to submit email");
      }
    })
    .catch((error) => {
      console.error(error);
    });
  }
});