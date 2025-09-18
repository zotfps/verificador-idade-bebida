import { listaIdade, verificarIdade } from './cfrmidade.js';

document.getElementById("btn2").addEventListener("click", verificarIdade);
document.getElementById("btn").addEventListener("click", pedirBebida);

function pedirBebida() {
    const ultimaIdade = Number(listaIdade[listaIdade.length - 1]);

    if (isNaN(ultimaIdade) || listaIdade.length === 0) {
        alert("Por favor, confirme sua idade primeiro.");
        return;
    }

    if (ultimaIdade >= 18) {
        const idoso = (ultimaIdade >= 65);

        const bebida = window.prompt("Qual bebida você quer?").toLowerCase();
        switch (bebida) {
            case "cerveja":
                if (idoso) {
                    alert("Você é idoso, beba com moderação!");
                } else {
                    alert("Se beber não dirija");
                }
                alert("Aqui está sua cerveja");
                break;

            case "refrigerante":
                alert("Aqui está seu refrigerante");
                break;

            case "suco":
                alert("Aqui está seu suco");
                break;

            default:
                alert("Bebida não disponível");
                break;
        }
    } else {
        alert("Você não pode beber");
    }
}
