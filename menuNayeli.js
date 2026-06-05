document.addEventListener("DOMContentLoaded", () => {

    // 1. CONTROL DE LA PANTALLA DE CARGA (LOADER)
    const loader = document.getElementById("loader");
    setTimeout(() => {
        loader.style.opacity = "0";
        setTimeout(() => {
            loader.style.visibility = "hidden";
        }, 800);
    }, 1800);


    // 2. DETECTOR DE SCROLL PARA LA BARRA DE NAVEGACIÓN
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });


    // 3. DINÁMICA DE ANATOMÍA DE LA MENTIRA (ESCÁNER DE CENSURA)
    const targetPoints = document.querySelectorAll(".target-point");
    const analysisBox = document.getElementById("analysis-box");

    targetPoints.forEach(point => {
        // Al pasar el mouse sobre el punto caliente, Jane analiza los datos
        point.addEventListener("mouseenter", () => {
            const description = point.getAttribute("data-tip");
            analysisBox.style.opacity = "0"; // Efecto transicion fluido
            
            setTimeout(() => {
                analysisBox.innerHTML = `<strong>Deducción:</strong> ${description}`;
                analysisBox.style.opacity = "1";
                analysisBox.style.color = "#d4af37"; // Tinte dorado de acierto
            }, 200);
        });

        // Al retirar el mouse regresa al estado base
        point.addEventListener("mouseleave", () => {
            point.style.transform = "translate(-50%, -50%) scale(1)";
        });
    });

});


// 4. EXPERIMENTO DE LECTURA MENTAL (REVELACIÓN DE TRUCO)
function startReading() {
    const startBtn = document.querySelector(".game-interface .btn-luxury");
    const statusDiv = document.getElementById("game-status");
    const resultDiv = document.getElementById("game-result");
    const progressFill = document.querySelector(".progress-fill");

    // Escondemos el botón de inicio
    startBtn.classList.add("hidden");
    statusDiv.classList.remove("hidden");

    // Simulación animada de la barra de escaneo cerebral de Jane
    let progress = 0;
    const interval = setInterval(() => {
        if (progress >= 100) {
            clearInterval(interval);
            
            // Revelación con drama psicológico
            statusDiv.classList.add("hidden");
            resultDiv.classList.remove("hidden");
        } else {
            progress += 2;
            progressFill.style.width = progress + "%";
        }
    }, 50); // Controla la velocidad de la barra
}