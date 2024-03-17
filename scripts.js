document.addEventListener("DOMContentLoaded", function() {
    var btnInicio = document.querySelector(".btnhome");
    var btnSobreMi = document.querySelector(".btnmy");
    var btnExp = document.querySelector(".btnexp");
    var btnOtros = document.querySelector(".btnother");
    var btnRed = document.querySelector(".btnred");

    var textoInicio = document.getElementById("inicio");
    var textoSobreMi = document.getElementById("sobremi");
    var textoExp = document.getElementById("exp");
    var textOtros=document.getElementById("otrosP");
    var textoRed = document.getElementById("redes");

    // Mostrar el texto de inicio por defecto
    textoInicio.style.display = "block";
    textoSobreMi.style.display = "none";
    textoExp.style.display="none";
    textOtros.style.display="none";
    textoRed.style.display="none";

    // Agregar evento de clic al botón de inicio
    btnInicio.addEventListener("click", function() {
        textoInicio.style.display = "block";
        textoSobreMi.style.display = "none";
        textoExp.style.display="none";
        textOtros.style.display="none";
        textoRed.style.display="none";
    });

    // Agregar evento de clic al botón de sobre mí
    btnSobreMi.addEventListener("click", function() {
        textoSobreMi.style.display = "block";
        textoInicio.style.display = "none";
        textoExp.style.display="none";
        textOtros.style.display="none";
        textoRed.style.display="none";
    });

    btnExp.addEventListener("click", function() {
        textoExp.style.display="block";
        textoInicio.style.display = "none";
        textoSobreMi.style.display = "none";
        textOtros.style.display="none";
        textoRed.style.display="none";
    });

    btnOtros.addEventListener("click",function() {
        textOtros.style.display="block";
        textoExp.style.display="none";
        textoInicio.style.display = "none";
        textoSobreMi.style.display = "none";
        textoRed.style.display="none";
    });

    btnRed.addEventListener("click",function() {
        textOtros.style.display="none";
        textoExp.style.display="none";
        textoInicio.style.display = "none";
        textoSobreMi.style.display = "none";
        textoRed.style.display="block";
    });
});