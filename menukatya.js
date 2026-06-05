// =========================
// CURSOR SHARINGAN
// =========================

const cursor = document.getElementById("sharinganCursor");

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});

// =========================
// ACTIVAR SHARINGAN
// =========================

const sharinganBtn = document.getElementById("activateSharingan");

let sharinganActive = false;

sharinganBtn.addEventListener("click", () => {

    sharinganActive = !sharinganActive;

    if(sharinganActive){

        document.body.style.boxShadow =
        "inset 0 0 150px rgba(255,0,0,0.35)";

        cursor.style.width = "45px";
        cursor.style.height = "45px";

        cursor.style.boxShadow =
        "0 0 20px red, 0 0 40px red, 0 0 80px red";

        sharinganBtn.textContent = "MANGEKYŌ ACTIVADO";

    }else{

        document.body.style.boxShadow = "none";

        cursor.style.width = "25px";
        cursor.style.height = "25px";

        cursor.style.boxShadow =
        "0 0 10px red, 0 0 20px red";

        sharinganBtn.textContent = "ACTIVAR SHARINGAN";
    }

});

// =========================
// CONTADORES ANIMADOS
// =========================

function animateCounter(id, target){

    let count = 0;

    const element = document.getElementById(id);

    const interval = setInterval(() => {

        count++;

        element.textContent = count;

        if(count >= target){
            clearInterval(interval);
        }

    }, 20);

}

window.addEventListener("load", () => {

    animateCounter("power", 100);
    animateCounter("speed", 95);
    animateCounter("iq", 99);

});

// =========================
// TIMELINE INTERACTIVA
// =========================

function showVersion(version, button){

    const image =
    document.getElementById("versionImage");

    const title =
    document.getElementById("versionTitle");

    const text =
    document.getElementById("versionText");

    const buttons =
    document.querySelectorAll(".timeline-btn");

    buttons.forEach(btn =>
        btn.classList.remove("active")
    );

    button.classList.add("active");

    if(version === "classic"){

        image.src =
        "https://i.pinimg.com/736x/0e/05/ac/0e05acb6803a955a916ab1515d5eff32.jpg";

        title.textContent =
        "Sasuke Clásico";

        text.textContent =
        "Un joven prodigio del Clan Uchiha impulsado por el deseo de superar a Itachi y restaurar el honor de su familia.";
    }

    if(version === "shippuden"){

        image.src =
        "https://wallpapercave.com/wp/wp2552378.jpg";

        title.textContent =
        "Sasuke Shippuden";

        text.textContent =
        "Tras entrenar con Orochimaru, Sasuke se convierte en uno de los shinobi más poderosos del mundo y enfrenta la verdad sobre Itachi.";
    }

    if(version === "thelast"){

    image.src =
    "https://images.wallpapersden.com/image/download/the-last-naruto-the-movie-rinnegan-sasuke-uchiha_a2dpbpSZmpqtpaSklGdqa2WtZmlpZQ.jpg";

        title.textContent =
        "Sasuke Adulto";

        text.textContent =
        "Después de la guerra, viaja por el mundo protegiendo la paz desde las sombras mientras vigila amenazas para la aldea.";
    }

}

// =========================
// CURIOSIDADES
// =========================

const factButtons =
document.querySelectorAll(".fact-btn");

factButtons.forEach(button => {

    button.addEventListener("click", () => {

        const content =
        button.nextElementSibling;

        content.classList.toggle("open");

    });

});

// =========================
// EFECTO SHARINGAN EN TARJETAS
// =========================

const cards =
document.querySelectorAll(
".tech-card, .stat-card, .album-card, .fact-btn"
);

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.boxShadow =
        "0 0 20px rgba(255,0,0,.5), 0 0 40px rgba(255,0,0,.3)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.boxShadow = "none";

    });

});

// =========================
// EFECTO PARALLAX HERO
// =========================

const hero =
document.querySelector(".hero-bg");

document.addEventListener("mousemove", (e) => {

    const x =
    (e.clientX / window.innerWidth - 0.5) * 10;

    const y =
    (e.clientY / window.innerHeight - 0.5) * 10;

    hero.style.transform =
    `translate(${x}px, ${y}px) scale(1.05)`;

});

// =========================
// APARICIÓN AL HACER SCROLL
// =========================

const sections =
document.querySelectorAll(
".bio, .timeline, .tecnicas, .naruto-section, .facts, .final-section"
);

const observer =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform =
            "translateY(0px)";

        }

    });

},{
    threshold:0.2
});

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform =
    "translateY(60px)";

    section.style.transition =
    "all .8s ease";

    observer.observe(section);

});

// =========================
// MENSAJE SECRETO UCHIHA
// =========================

let clicks = 0;

document.querySelector(".logo")
.addEventListener("click", () => {

    clicks++;

    if(clicks === 5){

        alert(
        "👁️ Has despertado el Mangekyō Sharingan de Sasuke."
        );

        clicks = 0;
    }

});

// =========================
// CAMBIO DINÁMICO DEL TÍTULO
// =========================

const titles = [

    "⚡ Sasuke Uchiha",
    "👁️ Mangekyō Sharingan",
    "🔥 Amaterasu",
    "🛡️ Susanoo",
    "⚔️ Último Uchiha"

];

let currentTitle = 0;

setInterval(() => {

    document.title =
    titles[currentTitle];

    currentTitle++;

    if(currentTitle >= titles.length){
        currentTitle = 0;
    }

}, 2500);

// =========================
// EFECTO RELÁMPAGO ALEATORIO
// =========================

function lightning(){

    const flash =
    document.createElement("div");

    flash.style.position = "fixed";
    flash.style.inset = "0";
    flash.style.background =
    "rgba(255,255,255,.08)";
    flash.style.pointerEvents = "none";
    flash.style.zIndex = "9999";

    document.body.appendChild(flash);

    setTimeout(() => {
        flash.remove();
    }, 120);

}

setInterval(() => {

    const chance =
    Math.random();

    if(chance > 0.92){
        lightning();
    }

}, 3000);