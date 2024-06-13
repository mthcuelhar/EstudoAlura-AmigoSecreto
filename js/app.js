// Crianca array e condicao para travar o botao sortear e adicionar apos selecionar os sorteados liberando apenas o botao de reiniciar
let amigos = [];
let sorteioApertado = false;

function adicionar() {
// Coletando informacoes dos nomes
    let amigo = document.getElementById('nome-amigo');
// Logica para travar o botao de adicionar apos realizado o sorteio e permitir apenas reiniciar.
    if (sorteioApertado == true) {
        alert('Reinicie o sorteio');
        return;
    } else {
// logica para travar entradas indevidas 
        if (amigo.value == '') {
            alert('Informe um nome/caractere valido');
            return;
        }
// logica para travar entradas duplicadas
        if (amigos.includes(amigo.value)) {
            alert('Nome duplicado, favor adicione mais informacoes');
            return;
        }
// logica para adicionar nomes para sorteio
        let lista = document.getElementById('lista-amigos');
        amigos.push(amigo.value);
        
        if (lista.textContent == '') {
            lista.textContent = amigo.value;        
        } else {
            lista.textContent = lista.textContent + ', ' + amigo.value;
        } 
        amigo.value = '';
    }
}

function sortear() {
    embaralhar(amigos);
    let sorteio = document.getElementById('lista-sorteio');
    let sorteioText = sorteio.innerText;
// logica para travar o botao de sortear apos realizado o sorteio e permitir apenas reiniciar
    for (let i = 0; i < amigos.length; i++) {
    if (sorteioText.includes(amigos[i])) {
    alert('Reinicie o sorteio');
    return;
    }
    }
    for (let i = 0; i < amigos.length; i++) {
// logica para travar sorteio com menos de 4 participantes 
        if (amigos.length < 4) {
            alert('Impossivel realizar o sorteio com apenas um participante. Adicione mais participantes.');
            return;
            }
        else if(i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';
            } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
            }
        sorteioApertado = true;
        }
    }

function reiniciar() {
    amigos = [];
    sorteioApertado = false;
    document.getElementById('nome-amigo').textContent = '';
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}
// logica para embaralhar array
function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}


