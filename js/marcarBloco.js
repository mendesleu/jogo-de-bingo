function marcarBloco(num) {
    document.getElementById(`bloco${num}`).style.display = 'block';
}

function resetMarcacao() {
    for (i = 0; i < 25; i++) {
        num = i + 1;

        if(num == 13){
            num = 14;
        }

        document.getElementById(`bloco${num}`).style.display = 'none';
    }
}