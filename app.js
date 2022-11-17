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
  firstCards: {
    name: "Multi-Post Stories",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    tech: ["css", "html", "bootstrap", "ruby"],
    img: ["./assets/first-card.png", "./assets/large.png"],
    liveVersion: "https://leehaney254.github.io/",
    source: "https://github.com/leehaney254/leehaney254.github.io",
  },
  otherCards: {
    name: "Profesional Art Printing Data",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    tech: ["html", "bootstrap", "ruby"],
    liveVersion: "https://leehaney254.github.io/",
    source: "https://github.com/leehaney254/leehaney254.github.io",
  }
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

function firstCards() {
  const div = document.createElement('div');  //create the housing div
  const imgDiv = document.createElement('div'); //create a div to hold the images
  const mobileImage = document.createElement('img'); //create the mobile image
  const desktopImage = document.createElement('img'); //create the desktop image
  const sideDescription = document.createElement('div'); //create side description 
  const description = document.createElement('div'); //create side description 
  const heading = document.createElement('h3'); //create title
  const firstParagraph = document.createElement('p');
  const badgediv = document.createElement('div');
  const firstList = document.createElement('ul');
  const firstTechcss = document.createElement('l1');
  const firstTechhtm = document.createElement('l1');
  const firstTechboot = document.createElement('l1');
  const firstTechrub = document.createElement('l1');
  const firstButton = document.createElement('button');

  //set id's and classes
  div.id = 'card';
  div.className = 'card';
  imgDiv.id = 'img-div';
  mobileImage.id = 'rec-img';
  desktopImage.id = 'large-image';
  sideDescription.id = 'descp-side';
  description.className = 'description';
  heading.id = "head1";
  firstParagraph.className = 'contents1';
  badgediv.className = 'description';
  firstList.className = 'buttons';
  firstTechcss.className = 'button1 butcss';
  firstTechhtm.className = 'button1 buthtm';
  firstTechboot.className = 'button1 butboot';
  firstTechrub.className = 'button1 butrub';
  firstButton.className = 'but-see';
  firstButton.id = 'butsee1';

  //set attributes
  mobileImage.src = cardInformation.firstCards.img[0];
  mobileImage.setAttribute('src', cardInformation.firstCards.img[0]);
  mobileImage.setAttribute('alt', 'Mobile version card');
  desktopImage.setAttribute('src', cardInformation.firstCards.img[1]);
  desktopImage.setAttribute('alt', 'Dektop version card');
  heading.innerHTML = cardInformation.firstCards.name;
  firstParagraph.innerHTML = cardInformation.firstCards.description;
  firstTechcss.innerHTML = cardInformation.firstCards.tech[0];
  firstTechhtm.innerHTML = cardInformation.firstCards.tech[1];
  firstTechboot.innerHTML = cardInformation.firstCards.tech[2];
  firstTechrub.innerHTML = cardInformation.firstCards.tech[3];
  firstButton.innerHTML = "See Project";

  //append children
  portfolioSection.appendChild(div);
  div.appendChild(imgDiv);
  div.appendChild(sideDescription);
  imgDiv.appendChild(mobileImage);
  badgediv.appendChild(heading);
  badgediv.appendChild(firstParagraph);
  sideDescription.appendChild(badgediv);
  badgediv.appendChild(firstList);
  firstList.appendChild(firstTechcss);
  firstList.appendChild(firstTechhtm);
  firstList.appendChild(firstTechboot);
  firstList.appendChild(firstTechrub);
  badgediv.appendChild(firstButton);
}

//call the functions
firstCards();

//Create all the other cards
function otherCards() {
  //create the elements
  const section = document.createElement('section');  //create the housing section
  const div = document.createElement('div');
  const description = document.createElement('div');
  const heading = document.createElement('h3'); //create title
  const text = document.createElement('p');
  const firstList = document.createElement('ul');
  const firstTechhtm = document.createElement('l1');
  const firstTechboot = document.createElement('l1');
  const firstTechrub = document.createElement('l1');
  const firstButton = document.createElement('button');



  //set ids and classes
  section.id = 'sec';
  div.id = 'grid-card';
  description.id = 'descp';
  description.className = 'description';
  // heading.className = 'head-other';
  // text.className = 'body-other';
  firstList.className = 'buttons';
  firstTechhtm.className = 'button1 buthtm';
  firstTechboot.className = 'button1 butboot';
  firstTechrub.className = 'button1 butrub';
  firstButton.className = 'but-see but-see-width';



  //set attributes
  heading.innerHTML = cardInformation.otherCards.name;
  text.innerHTML = cardInformation.otherCards.description;
  firstTechhtm.innerHTML = cardInformation.otherCards.tech[0];
  firstTechboot.innerHTML = cardInformation.otherCards.tech[1];
  firstTechrub.innerHTML = cardInformation.otherCards.tech[2];
  firstButton.innerHTML = "See Project";


  //apppend children
  portfolioSection.appendChild(section);
  section.appendChild(div);
  //for loop to create the 6 cards
  for (let i = 0; i <= 5; i++) {
    div.appendChild(description);
    description.appendChild(heading);
    description.appendChild(text);
    description.appendChild(firstList);
    firstList.appendChild(firstTechhtm);
    firstList.appendChild(firstTechboot);
    firstList.appendChild(firstTechrub);
    description.appendChild(firstButton);
    console.log("Called")
  }
}

otherCards();
otherCards();

// Create event listeners
humbergerMenu.addEventListener('click', menuToogle);
navLinks.forEach(function (navItems) {
  navItems.addEventListener('click', menuToogle);
})


