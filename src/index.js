import "./styles.css";
import "./reset.css";

const contentDiv = document.querySelector('#content');

contentDiv.innerHTML = HomeNav();

function HomeNav() {
  return `
      <h2 id="welcome-sub">La mejor arepa de chócolo de Bogotá</h2>

    <nav id="welcome-nav">
      <button class="btn">Nuesta carta</button>
      <button class="btn">Sobre nosotros</button>
      <button class="btn">Contacto</button>
    </nav>
  `
}