// Datos
const players = [
  { name: "Robert Lewandowski", pos: "Delantero", num: 9 },
  { name: "Pedri González", pos: "Centrocampista", num: 8 },
  { name: "Lamine Yamal", pos: "Extremo", num: 19 },
  { name: "Frenkie de Jong", pos: "Centrocampista", num: 21 },
  { name: "Raphinha", pos: "Extremo", num: 11 },
  { name: "Marc-André ter Stegen", pos: "Portero", num: 1 },
];

const trophies = [
  { n: 27, label: "La Liga" },
  { n: 31, label: "Copa del Rey" },
  { n: 5, label: "Champions League" },
  { n: 14, label: "Supercopa de España" },
  { n: 3, label: "Mundial de Clubes" },
  { n: 5, label: "Supercopa de Europa" },
];

const matches = [
  { date: "12 JUN", home: "FC Barcelona", away: "Real Madrid", comp: "La Liga" },
  { date: "19 JUN", home: "FC Barcelona", away: "Bayern München", comp: "Champions League" },
  { date: "26 JUN", home: "Sevilla FC", away: "FC Barcelona", comp: "La Liga" },
];

// Render plantilla
document.getElementById("playersGrid").innerHTML = players.map(p => `
  <article class="player">
    <div class="player-num">${p.num}</div>
    <h3 class="player-name">${p.name}</h3>
    <p class="player-pos">${p.pos}</p>
  </article>
`).join("");

// Render trofeos
document.getElementById("trophiesGrid").innerHTML = trophies.map(t => `
  <div class="trophy">
    <div class="trophy-n">${t.n}</div>
    <div class="trophy-l">${t.label}</div>
  </div>
`).join("");

// Render partidos
document.getElementById("matchesList").innerHTML = matches.map(m => `
  <div class="match">
    <div>
      <div class="match-date">${m.date}</div>
      <div class="match-comp">${m.comp}</div>
    </div>
    <div class="match-teams">
      <span style="flex:1;text-align:right">${m.home}</span>
      <span class="match-vs">VS</span>
      <span style="flex:1;text-align:left">${m.away}</span>
    </div>
    <button class="match-btn">Entradas</button>
  </div>
`).join("");

// Nav scroll
const nav = document.getElementById("nav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 40);
});

// Menú móvil
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
menuBtn.addEventListener("click", () => mobileMenu.classList.toggle("open"));
mobileMenu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mobileMenu.classList.remove("open")));

// Año
document.getElementById("year").textContent = new Date().getFullYear();
