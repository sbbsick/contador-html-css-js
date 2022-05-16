let count = 0;
const NUMERO_ATUAL = document.getElementById('numeroAtual')

document.getElementById('adicionar').addEventListener("click", function(){
    count++;
    if (count == 51){
        alert('O contador só vai até ' + (count-1));
        count = 0;
    }
    NUMERO_ATUAL.innerHTML = count;
})

document.getElementById('subtrair').addEventListener("click", function(){
    count--;
    if (count == -51){
        alert('O contador só vai até ' + (count+1));
        count = 0;
    }
    NUMERO_ATUAL.innerHTML = count;
})



