function sorteio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function gerarNumerosUnicos(qtd, min, max) {
    const numerosUnicos = new Set();

    while (numerosUnicos.size < qtd) {
        const numeroSorteado = sorteio(min, max);
        numerosUnicos.add(numeroSorteado);
    }

    return Array.from(numerosUnicos);
}

const quantidadeDeNumeros = 5;

for (i = 0; i < 5; i++) {

    switch (i) {
        case 0:

            numerosSorteados = gerarNumerosUnicos(quantidadeDeNumeros, 1, 15);

            for (let j = 0; j < numerosSorteados.length; j++) {
                num = j + 1;
                $('#letraB').append(
                    `
                        <button onclick="marcarBloco(${num})" class="quadrado letraB">
                            <label>${numerosSorteados[j]}</label>
                            <span id="bloco${num}" class="marcador">X</span>
                        </button>
                    `
                )
            }

            break;
        case 1:

            numerosSorteados = gerarNumerosUnicos(quantidadeDeNumeros, 16, 30);

            num = 5;
            for (let j = 0; j < numerosSorteados.length; j++) {
                num = num + 1;
                $('#letraI').append(
                    `
                        <button onclick="marcarBloco(${num})" class="quadrado letraI">
                            <label>${numerosSorteados[j]}</label>
                            <span id="bloco${num}" class="marcador">X</span>
                        </button>
                    `
                )
            }

            break;
        case 2:

            numerosSorteados = gerarNumerosUnicos(quantidadeDeNumeros, 31, 45);

            num = 10;
            for (let j = 0; j < numerosSorteados.length; j++) {
                num = num + 1;
                if(num != 13){
                    $('#letraN').append(
                        `
                            <button onclick="marcarBloco(${num})" class="quadrado letraN">
                                <label>${numerosSorteados[j]}</label>
                                <span id="bloco${num}" class="marcador">X</span>
                            </button>
                        `
                    )
                }else{                    
                $('#letraN').append(
                    `
                        <button onclick="marcarBloco(${num})" class="quadrado letraN">
                        </button>
                    `
                )
                }
            }

            break;
        case 3:

            numerosSorteados = gerarNumerosUnicos(quantidadeDeNumeros, 46, 60);

            num = 15;
            for (let j = 0; j < numerosSorteados.length; j++) {
                num = num + 1;
                $('#letraG').append(
                    `
                        <button onclick="marcarBloco(${num})" class="quadrado letraG">
                            <label>${numerosSorteados[j]}</label>
                            <span id="bloco${num}" class="marcador">X</span>
                        </button>
                    `
                )
            }

            break;
        case 4:

            numerosSorteados = gerarNumerosUnicos(quantidadeDeNumeros, 60, 75);

            num = 20;
            for (let j = 0; j < numerosSorteados.length; j++) {
                num = num + 1;
                $('#letraO').append(
                    `
                        <button onclick="marcarBloco(${num})" class="quadrado letraO">
                            <label>${numerosSorteados[j]}</label>
                            <span id="bloco${num}" class="marcador">X</span>
                        </button>
                    `
                )
            }

            break;
    }

}