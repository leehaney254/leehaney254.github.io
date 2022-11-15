//Create the variables
let displayMenu = false;                                        //keeps track of the menu state
const humbergerMenu = document.querySelector('#hum-menu');      //select the humberger menu
const humbergerImage = document.querySelector('#menu');
const cancelImage = document.querySelector('#cancel-menu');


//Create event listeners
humbergerMenu.addEventListener("click", menu_toogle);




//Create the functions
function menu_toogle() {
  if (!displayMenu) {
    humbergerImage.classList.add("not-displaying");
    cancelImage.classList.remove("not-displaying");
    displayMenu = true
  }
  else {
    humbergerImage.classList.remove("not-displaying");
    cancelImage.classList.add("not-displaying");
    displayMenu = false;
  }

}