document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // MODULE 1: MINI JUEGO DE RELACIONAR (TRIVIA)
    // ==========================================
    const canciones = document.querySelectorAll('.drop-item');
    const generos = document.querySelectorAll('.target-item');
    const feedback = document.getElementById('juego-feedback');
    
    let elementoSeleccionado = null;

    // Soporte para interacción híbrida (Clic para móviles y Drag & Drop para escritorio)
    canciones.forEach(cancion => {
        // Al arrastrar (Escritorio)
        cancion.addEventListener('dragstart', (e) => {
            elementoSeleccionado = cancion;
            cancion.classList.add('seleccionado');
        });

        cancion.addEventListener('dragend', () => {
            cancion.classList.remove('seleccionado');
        });

        // Al hacer clic (Móviles / Escritorio alternativo)
        cancion.addEventListener('click', () => {
            canciones.forEach(c => c.classList.remove('seleccionado'));
            elementoSeleccionado = cancion;
            cancion.classList.add('seleccionado');
        });
    });

    generos.forEach(genero => {
        genero.addEventListener('dragover', (e) => {
            e.preventDefault(); // Permite soltar el elemento
        });

        genero.addEventListener('drop', (e) => {
            e.preventDefault();
            procesarCombinacion(elementoSeleccionado, genero);
        });

        genero.addEventListener('click', () => {
            if (elementoSeleccionado) {
                procesarCombinacion(elementoSeleccionado, genero);
            }
        });
    });

    function procesarCombinacion(cancion, generoZona) {
        if (!cancion) return;

        const matchId = cancion.getAttribute('data-match');
        const generoId = generoZona.getAttribute('data-genre');

        if (matchId === generoId) {
            generoZona.classList.add('correcto');
            generoZona.innerText = `✓ ${cancion.innerText} → ${generoZona.innerText}`;
            cancion.remove(); // Elimina la canción ya resuelta
            elementoSeleccionado = null;
            
            mostrarFeedback("¡Conexión rítmica perfecta! Género acertado.", true);
        } else {
            mostrarFeedback("Frecuencia incorrecta. Ese género no le pertenece a la canción.", false);
        }
    }

    function mostrarFeedback(mensaje, esCorrecto) {
        feedback.className = "feedback-visible";
        feedback.style.color = esCorrecto ? "#38ef7d" : "#ff007f";
        feedback.innerText = mensaje;
    }


    // ==========================================
    // MODULE 2: CAROUSEL INTERACTIVO
    // ==========================================
    const tarjetas = document.querySelectorAll('.card-musica');
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    let indiceActual = 0;

    function cambiarTarjeta(nuevoIndice) {
        tarjetas[indiceActual].classList.remove('active');
        indiceActual = (nuevoIndice + tarjetas.length) % tarjetas.length;
        tarjetas[indiceActual].classList.add('active');
    }

    btnNext.addEventListener('click', () => cambiarTarjeta(indiceActual + 1));
    btnPrev.addEventListener('click', () => cambiarTarjeta(indiceActual - 1));


    // ==========================================
    // MODULE 3: INTERACCIÓN DE FLIP CARDS (HISTORIA)
    // ==========================================
    const flipCards = document.querySelectorAll('.flip-card');
    
    flipCards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('rotada');
        });
    });


    // ==========================================
    // MODULE 4: SECCIÓN COMENTARIOS (DINÁMICA)
    // ==========================================
    const form = document.getElementById('form-comentario');
    const contenedorComentarios = document.getElementById('comentarios-box');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Previene recarga de página

        const usuario = document.getElementById('input-usuario').value;
        const cancion = document.getElementById('input-cancion').value;
        const texto = document.getElementById('input-texto').value;

        // Creación del nuevo nodo de comentario con estructura idéntica
        const nuevaResena = document.createElement('div');
        nuevaResena.className = 'comentario-card';
        nuevaResena.style.animation = "enfocar 0.4s ease forwards";
        
        nuevaResena.innerHTML = `
            <div class="user-avatar"><i class="fa-solid fa-user-astronaut"></i></div>
            <div class="comentario-content">
                <h4>${String(usuario)} <span>Hace un momento</span></h4>
                <p class="review-track">Reseña sobre: <strong>${String(cancion)}</strong></p>
                <p>"${String(texto)}"</p>
            </div>
        `;

        // Insertar al inicio del feed y limpiar formulario
        contenedorComentarios.insertBefore(nuevaResena, contenedorComentarios.firstChild);
        form.reset();
        
        // Desplazar automáticamente hacia el nuevo comentario
        contenedorComentarios.scrollTop = 0;
    });
});