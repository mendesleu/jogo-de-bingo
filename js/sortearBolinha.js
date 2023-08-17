const bolinhasSorteadas = [];
let numeroRepetido;

function sortearBolinha(){

    numerosSorteados = sorteio(1, 75);

    if(bolinhasSorteadas.length < 75){

        if(bolinhasSorteadas.length === 0){
            bolinhasSorteadas.push(numerosSorteados);
            mostrarNumero();
        }else{
            numeroRepetido = false;

            for(i = 0; i < bolinhasSorteadas.length; i++){
                if(numerosSorteados === bolinhasSorteadas[i]){
                    numeroRepetido = true;
                    sortearBolinha();
                    break;
                }
            }

            if(!numeroRepetido && bolinhasSorteadas.length == i){
                bolinhasSorteadas.push(numerosSorteados);
                mostrarNumero();
            }
        }

    }
}

function mostrarNumero(){
    if(numerosSorteados >= 1 && numerosSorteados <= 15){
        document.getElementById('bolaSorteada').innerHTML = 'B' + numerosSorteados;
        document.getElementById(`bola${numerosSorteados}`).style.display = 'block';
    } else if(numerosSorteados >= 16 && numerosSorteados <= 30){
        document.getElementById('bolaSorteada').innerHTML = 'I' + numerosSorteados;
        document.getElementById(`bola${numerosSorteados}`).style.display = 'block';
    } else if(numerosSorteados >= 31 && numerosSorteados <= 45){
        document.getElementById('bolaSorteada').innerHTML = 'N' + numerosSorteados;
        document.getElementById(`bola${numerosSorteados}`).style.display = 'block';
    } else if(numerosSorteados >= 46 && numerosSorteados <= 60){
        document.getElementById('bolaSorteada').innerHTML = 'G' + numerosSorteados;
        document.getElementById(`bola${numerosSorteados}`).style.display = 'block';
    } else if(numerosSorteados >= 61 && numerosSorteados <= 75){
        document.getElementById('bolaSorteada').innerHTML = 'O' + numerosSorteados;
        document.getElementById(`bola${numerosSorteados}`).style.display = 'block';
    }
}