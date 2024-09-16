import { title, contentDiv } from "./index"


/* ------------------------------ layout setup ------------------------------ */
export function layoutHome() {
  title.classList.remove('high');
  contentDiv.classList.remove('main');
} 

export function layoutMain() {
  title.classList.add('high');
  contentDiv.classList.add('main');
} 


/* --------------------------------- content -------------------------------- */
export function HomeNav() {
  return `
    <h2 id="welcome-sub">Italian cuisine</h2>

    <nav id="welcome-nav">
      <button id="menu-btn" class="btn">Our Menu</button>
      <button id="about-btn" class="btn">About us</button>
      <button id="contact-btn" class="btn">Contact info</button>
    </nav>
  `
}

export function MenuContent() {
  return `
    <ul class="menu">
      <li class="menu-item">Spaghetti Carbonara <span class="price"> $12.99</span></li>
      <li class="menu-item">Margherita Pizza <span class="price">$10.99</span></li>
      <li class="menu-item">Caesar Salad <span class="price">$8.99</span></li>
      <li class="menu-item">Grilled Salmon <span class="price">$15.99</span></li>
      <li class="menu-item">Cheeseburger <span class="price">$9.99</span></li>
      <li class="menu-item">Chicken Alfredo <span class="price">$13.99</span></li>
      <li class="menu-item">Tacos <span class="price">$7.99</span></li>
      <li class="menu-item">Buffalo Wings <span class="price">$11.99</span></li>
      <li class="menu-item">Steak Frites <span class="price">$18.99</span></li>
      <li class="menu-item">Chocolate Lava Cake <span class="price">$6.99</span></li>
    </ul>
  `
}

export function AboutContent() {
  return `
    <h2 class="about-sub">Welcome to Tony's</h2>
    <p class="about-p">At Tony's, we believe in the power of food to bring people together. Since opening our doors in 2017, we’ve been dedicated to serving delicious, 
      freshly-prepared dishes in a warm and welcoming atmosphere. Our commitment to quality ingredients and authentic flavors has made us a favorite 
      dining spot in Bogotá.
    </p>

    <h2 class="about-sub">Our Story</h2>
    <p class="about-p">It all started with a simple idea: to create a place where friends and family could gather, share a meal, and create lasting memories. 
      Founded by Tony Marinara, Tony's began as a small neighborhood eatery with a passion for classic recipes and modern twists. Over the years, 
      we’ve grown, but our dedication to exceptional food and service remains the same.
    </p>
  `
}

export function ContactContent() {
  return `
    <h2 class="about-sub">Contact Us</h2>
    <p>
      123 Flavor Street 40275, Bogotá, Colombia
    </p>
    <p>
      📞 Phone: +57 1 234 5678 
    </p>

    <p>
      📧 Email: info@tonysbogota.com
    </p>

    <h2 class="about-sub">🕒 Hours of Operation:</h2>

    <p>
      Monday – Friday: 11:00 AM – 10:00 PM 
    </p>
    <p>
      Saturday - Sunday: 12:00 PM – 11:00 PM
    </p>
  `
}