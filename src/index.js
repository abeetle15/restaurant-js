import "./styles.css";
import "./menu.css"
import "./reset.css";
import { layoutHome, layoutMain, HomeNav, MenuContent, AboutContent, ContactContent } from "./home";

export const title = document.querySelector('#main-title')
export const contentDiv = document.querySelector('#content');

title.addEventListener('click', setupHome)
setupHome();

function setupHome(){
  layoutHome();
  contentDiv.innerHTML = '';
  contentDiv.innerHTML = HomeNav();
  const menuBtn = document.querySelector('#menu-btn');
  const aboutBtn = document.querySelector('#about-btn');
  const contactBtn = document.querySelector('#contact-btn');

  menuBtn.addEventListener('click', setupMenu)
  aboutBtn.addEventListener('click', setupAbout)
  contactBtn.addEventListener('click', setupContact)
}

function setupMenu() {
  layoutMain();
  contentDiv.innerHTML = '';
  contentDiv.innerHTML = MenuContent();
}
function setupAbout() {
  layoutMain();
  contentDiv.innerHTML = '';
  contentDiv.innerHTML = AboutContent();
}
function setupContact() {
  layoutMain();
  contentDiv.innerHTML = '';
  contentDiv.innerHTML = ContactContent();
}


