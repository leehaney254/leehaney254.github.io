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

// create the card information
const otherProjects = [
  {
    name: 'Multi-Post Stories',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    image: './assets/first-card.png',
    desktopImg: './assets/large.png',
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    name: 'Profesional Art Printing Data',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: './assets/rest-card.png',
    desktopImg: './assets/Img\ Placeholder.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    liveLink: '#',
    sourceLink: '#',
  },

  {
    name: 'Profesional Art Printing Data',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo asperiores sit laborum totam fugit beatae earum alias',
    image: './assets/rest-card.png',
    desktopImg: "url('./assets/cardimg1.png')",
    technologies: ['html', 'bootstrap', 'Ruby'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    name: 'Profesional Art Printing Data',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo asperiores sit laborum totam fugit beatae earum alias',
    image: './assets/cardimg.png',
    desktopImg: './assets/rest-card.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    name: 'Profesional Art Printing Data',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo asperiores sit laborum totam fugit beatae earum alias',
    image: './assets/rest-card.png',
    desktopImg: "url('./assets/cardimg.png')",
    technologies: ['html', 'bootstrap', 'Ruby'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    name: 'Profesional Art Printing Data',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo asperiores sit laborum totam fugit beatae earum alias',
    image: './assets/rest-card.png',
    desktopImg: './assets/cardimg1.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    name: 'Profesional Art Printing Data',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo asperiores sit laborum totam fugit beatae earum alias',
    image: './assets/rest-card.png',
    desktopImg: './assets/rest-card.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    liveLink: '#',
    sourceLink: '#',
  },
];

function firstCard(cardinfo) {
  // crate elements
  const container = document.createElement('div');
  const firstImage = document.createElement('img');
  const deskImg = document.createElement('img');
  const title = document.createElement('h3');
  const infomation = document.createElement('p');
  const badgeList = document.createElement('ul');
  const button = document.createElement('button');
  const firstsplit = document.createElement('div');

  // give attributes
  title.innerHTML = cardinfo.name;
  infomation.innerText = cardinfo.description;
  const tech = cardinfo.technologies;

  // loop through to create badges
  tech.forEach((listItems) => {
    const li = document.createElement('li');
    li.innerText = listItems;
    if (cardinfo.name === otherProjects[0].name) {
      li.classList.add('firstBadge');
    } else {
      li.classList.add('otherBadge');
    }
    badgeList.appendChild(li);
  });
  button.innerText = 'See Project';

  // Give classes and id's
  container.classList.add('cardSize');
  title.classList.add('title');
  badgeList.classList.add('badgeStyle');
  button.classList.add('button');

  // check if its the other cards and add it as a background image
  if (cardinfo.name === otherProjects[0].name) {
    // create the first image
    firstImage.setAttribute('src', cardinfo.image);
    firstImage.setAttribute('alt', 'Mobile version card');
    firstImage.setAttribute('id', 'remDesk');
    deskImg.setAttribute('src', cardinfo.desktopImg);
    deskImg.setAttribute('alt', 'Desktop version card');
    deskImg.setAttribute('id', 'remMob');

    // add styles to the first card
    title.setAttribute('id', 'firstTitle');
    infomation.setAttribute('id', 'firstParagragh');
    button.setAttribute('id', 'firstBtnPad');
    firstsplit.classList.add('spaceLefts');

    container.appendChild(firstImage);
    container.appendChild(deskImg);
  } else {
    // add style to other cards
    container.classList.add('cardImages');
    title.classList.add('otherTitle');
    infomation.classList.add('paragraph');
    container.classList.add('backCardImg');
    button.classList.add('otherCardBtn', 'marginTopOther');
    infomation.style.width = '295px';
  }

  // attach to node
  container.appendChild(firstsplit);
  firstsplit.appendChild(title);
  firstsplit.appendChild(infomation);
  firstsplit.appendChild(badgeList);
  firstsplit.appendChild(button);
  return container;
}

function buildCards() {
  const portfolio = document.querySelector('#dynamicPortfolio');
  const cardOne = document.createElement('div');

  cardOne.setAttribute('id', 'cardGrid');

  // add the cards dynamically
  otherProjects.forEach((cards) => {
    if (cards.name === otherProjects[0].name) {
      portfolio.appendChild(firstCard(cards));
    } else {
      cardOne.appendChild(firstCard(cards));
    }
  });
  portfolio.appendChild(cardOne);
}

buildCards();

const popContainer = document.querySelector('#popUp');

function PopUp(cardinfo) {
  const popDiv = document.createElement('div');
  const disDiv = document.createElement('div');
  const popTitle = document.createElement('h2');
  const popImg = document.createElement('img');
  const tech = cardinfo.technologies;
  const badgeList = document.createElement('ul');
  const firstImage = document.createElement('img');
  const flexDiv = document.createElement('div');
  const info = document.createElement('p');
  const infoDiv = document.createElement('div');
  const seeLive = document.createElement('button');
  const seesource = document.createElement('button');
  const gitIcon = document.createElement('img');
  const liveIcon = document.createElement('img');
  const deskImg = document.createElement('img');

  // give class
  popContainer.classList.add('blurBack');
  disDiv.classList.add('popSize');
  popTitle.classList.add('popHead');
  info.classList.add('popText');
  badgeList.classList.add('badgeStyle');
  seeLive.classList.add('popButton');
  seesource.classList.add('popButton', 'sourceLeft', 'marginBtn');
  flexDiv.classList.add('popSec');
  popImg.setAttribute('id', 'popImg');
  popDiv.classList.add('flexs', 'arrange');
  infoDiv.classList.add('spaces');

  if (cardinfo.name === otherProjects[0].name) {
    // create the first image
    firstImage.setAttribute('src', cardinfo.image);
    firstImage.setAttribute('alt', 'Mobile version card');
    firstImage.setAttribute('id', 'remDesk');
    deskImg.setAttribute('src', cardinfo.desktopImg);
    deskImg.setAttribute('alt', 'Desktop version card');
    deskImg.setAttribute('id', 'remMob');

    flexDiv.appendChild(deskImg);
    flexDiv.appendChild(firstImage);
  } else {
    firstImage.setAttribute('src', cardinfo.image);
    firstImage.setAttribute('alt', 'Mobile version card');
    firstImage.classList.add('imgHeight');
    flexDiv.appendChild(firstImage);
  }

  // give attributtes
  popTitle.innerText = cardinfo.name;
  popImg.setAttribute('src', './assets/iconCancel.png');
  info.innerHTML = cardinfo.description;
  seeLive.innerText = 'See Live';
  seesource.innerText = 'See Source';
  gitIcon.setAttribute('src', './assets/Icon\ -GitHub.png');
  liveIcon.setAttribute('src', './assets/Icon\ -\ Export.png');

  // loop through to create badges
  tech.forEach((listItems) => {
    const li = document.createElement('li');
    li.innerText = listItems;
    li.classList.add('firstBadge');
    badgeList.appendChild(li);
  });

  // add node
  popContainer.appendChild(disDiv);
  disDiv.appendChild(popDiv);
  popDiv.appendChild(popTitle);
  popDiv.appendChild(popImg);
  disDiv.appendChild(badgeList);
  disDiv.appendChild(flexDiv);
  flexDiv.appendChild(infoDiv);
  infoDiv.appendChild(info);
  infoDiv.appendChild(seeLive);
  infoDiv.appendChild(seesource);
  seesource.appendChild(gitIcon);
  seeLive.appendChild(liveIcon);

  // listen for close button
  const hidePop = document.querySelector('#popImg');
  if (hidePop) {
    hidePop.addEventListener('click', () => {
      disDiv.remove();
      popContainer.classList.remove('blurBack')
    });
  }
}

const popupButton = document.querySelectorAll('button');
popupButton.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    PopUp(otherProjects[i]);
  });
});
