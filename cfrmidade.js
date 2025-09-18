export let listaIdade = [];

export function verificarIdade() {
    const idade = window.prompt("Qual a sua idade?");

    if (isNaN(idade) || idade.trim() === "") {
        alert("Por favor, insira uma idade válida.");
        return;
    } else if (idade >= 116) { //Maior idade já registrada no mundo.
        alert("Insira uma idade válida.");
        return;
    }
    listaIdade.push(idade);
    alert("Idade registrada com sucesso.");
    console.log(listaIdade);
}


