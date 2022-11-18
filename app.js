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
    desktopImg: './assets/large.png',
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    name: 'Profesional Art<br> Printing Data',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: './assets/rest-card.png',
    desktopImg: './assets/Img\ Placeholder.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    liveLink: '#',
    sourceLink: '#',
  },

  {
    name: 'Profesional Art<br> Printing Data',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo asperiores sit laborum totam fugit beatae earum alias',
    image: './assets/rest-card.png',
    desktopImg: "url('./assets/cardimg1.png')",
    technologies: ['html', 'bootstrap', 'Ruby'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    name: 'Profesional Art<br> Printing Data',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo asperiores sit laborum totam fugit beatae earum alias',
    image: './assets/cardimg.png',
    desktopImg: './assets/rest-card.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    name: 'Profesional Art<br> Printing Data',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo asperiores sit laborum totam fugit beatae earum alias',
    image: './assets/rest-card.png',
    desktopImg: "url('./assets/cardimg.png')",
    technologies: ['html', 'bootstrap', 'Ruby'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    name: 'Profesional Art<br> Printing Data',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo asperiores sit laborum totam fugit beatae earum alias',
    image: "url('./assets/rest-card.png')",
    desktopImg: './assets/cardimg1.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    name: 'Profesional Art<br> Printing Data',
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
  //crate elements
  container = document.createElement('div');
  firstImage = document.createElement('img');
  title = document.createElement('h3');
  infomation = document.createElement('p');
  badgeList = document.createElement('ul');
  button = document.createElement('button');

  //give attributes
  title.innerHTML = cardinfo.name;
  infomation.innerText = cardinfo.description;
  let tech = cardinfo.technologies;

  //loop through to create badges
  tech.forEach((listItems) => {
    let li = document.createElement('li');
    li.innerText = listItems;
    if (cardinfo.name == otherProjects[0].name) {
      li.classList.add('firstBadge');
    } else {
      li.classList.add('otherBadge');
    }
    badgeList.appendChild(li);
  });
  button.innerText = 'See Project';

  //Give classes and id's
  container.classList.add('cardSize');
  title.classList.add('title');
  badgeList.classList.add('badgeStyle');
  button.classList.add('button');

  //check if its the other cards and add it as a background image
  if (cardinfo.name == otherProjects[0].name) {
    //create the first image
    firstImage.setAttribute('src', cardinfo.image);
    firstImage.setAttribute('alt', 'Mobile version card');

    //add styles to the first card
    title.setAttribute("id", "firstTitle");
    infomation.setAttribute("id", "firstParagragh");
    button.setAttribute("id", "firstBtnPad");

    container.appendChild(firstImage);
  } else {
    //add style to other cards
    container.classList.add('cardImages');
    title.classList.add('otherTitle');
    infomation.classList.add('paragraph');
    container.classList.add('backCardImg');
    button.classList.add('otherCardBtn', 'marginTopOther');
    infomation.style.width = "295px";
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


  portfolio.setAttribute("id", "cardGrid");

  //add the cards dynamically
  otherProjects.forEach((cards) => {
    portfolio.appendChild(firstCard(cards));
  });
}

buildCards();

popContainer = document.querySelector('#popUp');
function PopUp(cardinfo) {
  popDiv = document.createElement('div');
  popTitle = document.createElement('h2');
  popImg = document.createElement('img');
  let tech = cardinfo.technologies;
  badgeList = document.createElement('ul');
  firstImage = document.createElement('img');
  flexDiv = document.createElement('div');
  info = document.createElement('p');
  infoDiv = document.createElement('div');
  seeLive = document.createElement('button');
  seesource = document.createElement('button');

  //give class
  badgeList.classList.add('badgeStyle');
  firstImage.setAttribute('src', cardinfo.image);
  firstImage.setAttribute('alt', 'Pop-up image');
  popDiv.classList.add('flexs', 'arrange');
  popImg.setAttribute('id', 'popImg');

  //give attributtes
  popTitle.innerText = cardinfo.name;
  popImg.setAttribute('src', './assets/iconCancel.png');
  info.innerHTML = cardinfo.description;
  seeLive.innerText = 'See Live';
  seesource.innerText = 'See Source';

  //loop through to create badges
  tech.forEach((listItems) => {
    let li = document.createElement('li');
    li.innerText = listItems;
    if (cardinfo.name == otherProjects[0].name) {
      li.classList.add('firstBadge');
    } else {
      li.classList.add('otherBadge');
    }
    badgeList.appendChild(li);
  });


  //add node
  popContainer.appendChild(popDiv);
  popDiv.appendChild(popTitle);
  popDiv.appendChild(popImg);
  popContainer.appendChild(badgeList);
  popContainer.appendChild(flexDiv);
  flexDiv.appendChild(firstImage);
  flexDiv.appendChild(infoDiv);
  infoDiv.appendChild(info);
  infoDiv.appendChild(seeLive);
  infoDiv.appendChild(seesource);
}

popupButton = document.querySelectorAll('button');
popupButton.forEach((btn, i) => {
  btn.addEventListener('click', function click() {
    PopUp(otherProjects[i])
  });
});

hidePop = document.queryCommandValue('popImg');
hidePop.addEventListener('click', function click() {
  console.log('clicked');
  popContainer.classList.add('removeCard');
});