// Create the variables
let displayMenu = false; // keeps track of the menu state
const humbergerMenu = document.querySelector('#hum-menu'); // select the humberger menu
const humbergerImage = document.querySelector('#menu'); // select the humberger image
const cancelImage = document.querySelector('#cancel-menu');
const showMenu = document.querySelector('#nav-link'); // select the menu options
const hideMail = document.querySelector('#hide-mail');
const navLinks = document.querySelectorAll('.anc-decor');
const form = document.querySelector('#form'); // select the form
const errorSecton = document.querySelector('#errorMessage');
const emailInput = document.querySelector('#email');
const fullName = document.querySelector('#fullname');
const textArea = document.querySelector('#textarea');

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

// Create event listeners
humbergerMenu.addEventListener('click', menuToogle);
navLinks.forEach((navItems) => {
  navItems.addEventListener('click', menuToogle);
});

form.addEventListener('submit', (e) => {
  const emailContent = emailInput.value;
  const nameContent = fullName.value;
  const textContent = textArea.value;
  const testCondition = /[A-Z]/;

  if (testCondition.test(emailContent)) {
    e.preventDefault();
    errorSecton.innerText = 'Email should be in lower-case';
  } else {
    // store the data
    const storedObject = {};
    storedObject.fullName = nameContent;
    storedObject.emailInput = emailContent;
    storedObject.textArea = textContent;
    const serializedObject = JSON.stringify(storedObject);
    localStorage.setItem('userData', serializedObject);
  }
});

function fillData() {
  const desirializedObject = JSON.parse(localStorage.getItem('userData'));
  fullName.value = desirializedObject.fullName;
  emailInput.value = desirializedObject.emailInput;
  textArea.value = desirializedObject.textArea;
}

window.addEventListener('load', fillData);

//create the card information
const otherProjects = [
  {
    name: 'Multi-Post Stories',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    image: './assets/first-card.png',
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    name: 'Profesional Art Printing Data',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: "url('./assets/rest-card.png')",
    technologies: ['html', 'bootstrap', 'Ruby'],
    liveLink: '#',
    sourceLink: '#',
  },

  {
    name: 'Profesional Art Printing Data',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo asperiores sit laborum totam fugit beatae earum alias',
    image: "url('./assets/rest-card.png')",
    technologies: ['html', 'bootstrap', 'Ruby'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    name: 'Profesional Art Printing Data',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo asperiores sit laborum totam fugit beatae earum alias',
    image: "url('./assets/rest-card.png')",
    technologies: ['html', 'bootstrap', 'Ruby'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    name: 'Profesional Art Printing Data',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo asperiores sit laborum totam fugit beatae earum alias',
    image: "url('./assets/rest-card.png')",
    technologies: ['html', 'bootstrap', 'Ruby'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    name: 'Profesional Art Printing Data',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo asperiores sit laborum totam fugit beatae earum alias',
    image: "url('./assets/rest-card.png')",
    technologies: ['html', 'bootstrap', 'Ruby'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    name: 'Profesional Art Printing Data',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo asperiores sit laborum totam fugit beatae earum alias',
    image: "url('./assets/rest-card.png')",
    technologies: ['html', 'bootstrap', 'Ruby'],
    liveLink: '#',
    sourceLink: '#',
  },
];

function firstCard(cardinfo) {
  //crate elements
  container = document.createElement('div');
  firstImage = document.createElement('img');
  title = document.createElement('h3');
  infomation = document.createElement('p');
  badgeList = document.createElement('ul');
  button = document.createElement('button');

  //give attributes
  title.innerText = cardinfo.name;
  infomation.innerText = cardinfo.description;
  let tech = cardinfo.technologies;
  tech.forEach((listItems) => {
    let li = document.createElement('li');
    li.innerText = listItems;
    badgeList.appendChild(li);
  });
  button.innerText = 'See Project';

  //Give classes and id's
  badgeList.classList.add('badgeStyle');

  //check if its the other cards and add it as a background image
  if (cardinfo.name == otherProjects[0].name) {
    //create the first image
    firstImage.setAttribute('src', cardinfo.image);
    firstImage.setAttribute('alt', 'Mobile version card');

    //add styles to the first card
    title.setAttribute("id", "firstTitle");
    infomation.setAttribute("id", "firstParagragh");

    container.appendChild(firstImage);
  } else {
    container.style.backgroundImage = cardinfo.image;
  }

  //attach to node
  container.appendChild(title);
  container.appendChild(infomation);
  container.appendChild(badgeList);
  container.appendChild(button)
  return container
}


function buildCards() {
  portfolio = document.querySelector('#dynamicPortfolio');
  cardOne = document.createElement('div');

  //add the cards dynamically
  otherProjects.forEach((cards) => {
    portfolio.appendChild(firstCard(cards));
  });
}

buildCards();

