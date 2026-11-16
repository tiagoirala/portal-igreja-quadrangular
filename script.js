
console.log("Portal da igreja carregado!");

window.addEventListener("DOMContentLoaded", function() {

    // Identifica o dia atual
    const hoje = new Date().getDay();

    // Localiza todos os cartões de programação
    const cultos = document.querySelectorAll(".culto");

    // Verifica qual programação corresponde ao dia atual
    cultos.forEach(function(culto) {

        if (Number(culto.dataset.dia) === hoje) {

            culto.classList.add("culto-hoje");

            const aviso = document.createElement("strong");
            aviso.textContent = "📌 Programação de hoje";
            aviso.classList.add("aviso-hoje");

            culto.appendChild(aviso);
        }

    });

});
