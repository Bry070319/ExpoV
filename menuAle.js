const exploreBtn = document.getElementById("exploreBtn");

exploreBtn.addEventListener("click", () => {

    document.querySelector("#galeria").scrollIntoView({
        behavior: "smooth"
    });

});


const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.transform =
        `perspective(1000px)
         rotateY(${(x - rect.width/2)/25}deg)
         rotateX(${-(y - rect.height/2)/25}deg)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "perspective(1000px) rotateY(0deg) rotateX(0deg)";

    });

});
