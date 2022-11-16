// Create the variables
let displayMenu = false; // keeps track of the menu state
const humbergerMenu = document.querySelector('#hum-menu'); // select the humberger menu
const humbergerImage = document.querySelector('#menu'); // select the humberger image
const cancelImage = document.querySelector('#cancel-menu');
const showMenu = document.querySelector('#nav-link'); // select the menu options
const hideMail = document.querySelector('#hide-mail');
const navLinks = document.querySelectorAll('.anc-decor');
const portfolioSection = document.querySelector('#section-bac');
 //select the porfolio section

//create javascript object to hold all the information
let cardInformation = {
  name: "Multi-Post Stories",
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  tech: ["css", "html", "bootstrap", "ruby"],
  img: ["./assets/first-card.png", "./assets/large.png"],
  liveVersion: "https://leehaney254.github.io/",
  source: "https://github.com/leehaney254/leehaney254.github.io",
}

// Create the functions
function menuToogle() {
  if (!displayMenu) {
    humbergerImage.classList.add('not-displaying');
    cancelImage.classList.remove('not-displaying');
    showMenu.classList.remove('hideMenu');
    showMenu.classList.add('displayMenu');
    hideMail.classList.add('not-displaying');
    displayMenu = true;
  } else {
    humbergerImage.classList.remove('not-displaying');
    cancelImage.classList.add('not-displaying');
    showMenu.classList.add('hideMenu');
    showMenu.classList.remove('displayMenu');
    displayMenu = false;
  }
}

function addCards() {
  const div = document.createElement('div');  //create the housing div
  const imgDiv = document.createElement('div'); //create a div to hold the images
  const mobileImage = document.createElement('img'); //create the mobile image
  const desktopImage = document.createElement('img'); //create the desktop image
  const sideDescription = document.createElement('div'); //create side description 
  const description = document.createElement('div'); //create side description 

//set id's and classes
div.id = 'card';
div.className = 'card';
imgDiv.id = 'img-div';
mobileImage.id = 'rec-img';
desktopImage.id = 'large-image';
sideDescription.id = 'descp-side';
description.className = 'description';

}

//call the functions
addCards();

// Create event listeners
portfolioSection.addEventListener('click', addCards);
humbergerMenu.addEventListener('click', menuToogle);
for (let i = 0; i <= navLinks.length; i++) {
  navLinks[i].addEventListener('click', menuToogle);
}



