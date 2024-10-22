const perguntas = [
    {
        pergunta: "Qual foi o motivo que levou a Primeira Guerra mundial?",
        opcoes: [
            "Invasão da Polonia pela Alemanha",
            "Afundamentode navios Americanos",
            "Assasinato do arqueduque Austro-Húngaro",
            "Corrida espacial"
        ],
        resposta: 2 // índice da resposta correta
    },
    {
        pergunta: "Quem foi o primeiro presidente do Brasil durante o Regime Milita ?",
        opcoes: [
            "Costa e Silva",
            "Médici",
            "Getuli Vargas",
            "Castelo Branco"
        ],
        resposta: 3
    },
    {
        pergunta: "Em que ano o governo de Vargas criou o Conselho Nacional do Petróleo?",
        opcoes: [
            "1920",
            "1938",
            "1940",
            "1948"
        ],
        resposta: 1
    },
    {
        pergunta: "Qual era o slogan do Brasil no Regime Militar?",
        opcoes: [
            "Brasil ame-o ou deixe-o",
            "A cobra vai fumar",
            "Brasil terra de paz",
            "Ordem e preogresso"
        ],
        resposta: 0
    },
    {
        pergunta: "Quando surgiu a CLT?",
        opcoes: [
            "01/05/1940",
            "01/05/1943",
            "01/05/1939",
            "01/05/1942"
        ],
        resposta: 1
    },
    {
        pergunta: "Quantos judeus foram assassindos na Segunda Guerra Mundial?",
        opcoes: [
            "9 milhões",
            "6,3 milhões",
            "7 milhões",
            "6 milhões"
        ],
        resposta: 3
    }
];

// Função para gerar os flashcards
function criarFlashcards() {
    const container = document.getElementById("container");

    perguntas.forEach((pergunta, index) => {
        const cartao = document.createElement("article");
        cartao.classList.add("cartao");

        cartao.innerHTML = `
            <div class="cartao__conteudo">
                <h3>Questão ${index + 1}</h3>
                <div class="cartao__conteudo__pergunta">
                    <p>${pergunta.pergunta}</p>
                </div>
                <div class="cartao__conteudo__opcoes">
                    ${pergunta.opcoes.map((opcao, i) => `
                        <label>
                            <input type="radio" name="pergunta${index}" value="${i}">
                            ${opcao}
                        </label>
                    `).join('')}
                </div>
                <button onclick="verificarResposta(${index})">Responder</button>
                <div class="resultado" id="resultado${index}" style="display:none;"></div>
            </div>
        `;
        
        container.appendChild(cartao);
    });
}

// Função para verificar a resposta
function verificarResposta(index) {
    const opcoes = document.getElementsByName(`pergunta${index}`);
    const resultadoDiv = document.getElementById(`resultado${index}`);
    let respostaSelecionada;

    opcoes.forEach((opcao, i) => {
        if (opcao.checked) {
            respostaSelecionada = i;
        }
    });

    if (respostaSelecionada === undefined) {
        resultadoDiv.innerHTML = "Por favor, selecione uma opção.";
    } else if (respostaSelecionada === perguntas[index].resposta) {
        resultadoDiv.innerHTML = "Resposta correta!";
    } else {
        resultadoDiv.innerHTML = "Resposta errada! A resposta correta é: " + perguntas[index].opcoes[perguntas[index].resposta];
    }

    resultadoDiv.style.display = "block";
}

// Chama a função para criar os flashcards ao carregar a página
window.onload = criarFlashcards;

