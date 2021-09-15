/* Parte do cálculo */

var vazao = document.getElementById('vazao')
var volume = document.getElementById('volume')
var tempo = document.getElementById('tempo')
const calculo = document.getElementById('calculo')
const modal = document.getElementById('menu-respostas')
const modal_conteudo = document.getElementById('coisas-respostas')

calculo.onclick = func_resultado = () => {
    let valor_vazao = vazao.value
    let valor_volume = volume.value
    let valor_tempo = tempo.value
    modal.style.display = "block";
    if (valor_vazao === '' && valor_volume !== '' && valor_tempo !== ''){
        let resultado_final = (valor_volume / valor_tempo).toFixed(2)
        modal_conteudo.innerHTML = `<p class="palavras"> Considerando os dados inseridos:</p>
                                <p class="palavras2"> Vazão = ? m³/s </p>
                                <p class="palavras2"> Volume = ${valor_volume} m³ </p>
                                <p class="palavras2"> Tempo = ${valor_tempo} s </p>
                                <p class="palavras"> Podemos utilizar a fórmula:</p>
                                <p class="palavras2"> Q = V&divideT</p>
                                <p class="palavras"> Para encontrarmos o resultado, substituimos os valores:</p>
                                <p class="palavras2"> Q = ${valor_volume} &divide ${valor_tempo}</p>
                                <p class="palavras2"> Q = ${resultado_final} m³/s</p>
                                <p class="palavras"> Sendo assim, a vazão final é de ${resultado_final} m³/s</p>
                                <p class="palavras"> Importante lembrar, seus cálculos estão sendo arredondados
                                com 2 casas decimais.</p>
                                <p class="palavras">Então tome cuidado, X.00 é o mesmo que X,00.</p>`;
    }
    else if (valor_vazao !== '' && valor_volume === '' && valor_tempo !== ''){
        let resultado_final = (valor_vazao * valor_tempo).toFixed(2)
        modal_conteudo.innerHTML = `<p class="palavras"> Considerando os dados inseridos:</p>
                                <p class="palavras2"> Vazão = ${valor_vazao} m³/s </p>
                                <p class="palavras2"> Volume = ? m³ </p>
                                <p class="palavras2"> Tempo = ${valor_tempo} s </p>
                                <p class="palavras"> Podemos utilizar a fórmula:</p>
                                <p class="palavras2"> V = Q.T</p>
                                <p class="palavras"> Para encontrarmos o resultado, substituimos os valores:</p>
                                <p class="palavras2"> V = ${valor_vazao} . ${valor_tempo}</p>
                                <p class="palavras2"> V = ${resultado_final} m³</p>
                                <p class="palavras"> Sendo assim, o volume final é de ${resultado_final} m³</p>
                                <p class="palavras"> Importante lembrar, seus cálculos estão sendo arredondados
                                com 2 casas decimais.</p>
                                <p class="palavras">Então tome cuidado, X.00 é o mesmo que X,00.</p>`;
    }
    else if (valor_vazao !== '' && valor_volume !== '' && valor_tempo === ''){
        let resultado_final = (valor_volume / valor_vazao).toFixed(2)
        modal_conteudo.innerHTML = `<p class="palavras"> Considerando os dados inseridos:</p>
                                <p class="palavras2"> Vazão = ${valor_vazao} m³/s </p>
                                <p class="palavras2"> Volume = ${valor_volume} m³ </p>
                                <p class="palavras2"> Tempo = ? s </p>
                                <p class="palavras"> Podemos utilizar a fórmula:</p>
                                <p class="palavras2"> T = V&divideQ</p>
                                <p class="palavras"> Para encontrarmos o resultado, substituimos os valores:</p>
                                <p class="palavras2"> T = ${valor_volume} / ${valor_vazao}</p>
                                <p class="palavras2"> T = ${resultado_final} s</p>
                                <p class="palavras"> Sendo assim, o tempo final é de ${resultado_final} s</p>
                                <p class="palavras"> Importante lembrar, seus cálculos estão sendo arredondados
                                com 2 casas decimais.</p>
                                <p class="palavras">Então tome cuidado, X.00 é o mesmo que X,00.</p>`;
    }
    else if (valor_vazao !== '' && valor_volume === '' && valor_tempo === ''){
        let tempo_final = `V &divide ${valor_vazao}`
        let volume_final = `${valor_vazao} . T`
        modal_conteudo.innerHTML = `<p class="palavras"> Considerando os dados inseridos:</p>
                                <p class="palavras2"> Vazão = ${valor_vazao} m³/s </p>
                                <p class="palavras2"> Volume = ? m³ </p>
                                <p class="palavras2"> Tempo = ? s </p>
                                <p class="palavras"> Podemos utilizar a fórmula:</p>
                                <p class="palavras2"> T = V&divideQ ou V = Q.T</p>
                                <p class="palavras"> Para encontrarmos o resultado, substituimos os valores:</p>
                                <p class="palavras2"> T = ${tempo_final} ou V = ${volume_final}</p>
                                <p class="palavras2"> T = ${tempo_final} s ou V = ${volume_final} m³</p>
                                <p class="palavras"> Sendo assim, o tempo final é T = ${tempo_final} s ou o volume é V = ${volume_final} m³</p>
                                <p class="palavras"> Importante lembrar, seus cálculos estão sendo arredondados
                                com 2 casas decimais.</p>
                                <p class="palavras">Então tome cuidado, X.00 é o mesmo que X,00.</p>`;
    }
    else if (valor_vazao === '' && valor_volume !== '' && valor_tempo === ''){
        let tempo_final = `${valor_volume} &divide Q`
        let vazao_final = `${valor_volume} . T `
        modal_conteudo.innerHTML = `<p class="palavras"> Considerando os dados inseridos:</p>
                                <p class="palavras2"> Vazão = ? m³/s </p>
                                <p class="palavras2"> Volume = ${valor_volume} m³ </p>
                                <p class="palavras2"> Tempo = ? s </p>
                                <p class="palavras"> Podemos utilizar a fórmula:</p>
                                <p class="palavras2"> Q = V&divideT ou T = V&divideQ</p>
                                <p class="palavras"> Para encontrarmos o resultado, substituimos os valores:</p>
                                <p class="palavras2"> Q = ${vazao_final} ou T = ${tempo_final}</p>
                                <p class="palavras2"> Q = ${vazao_final} m³/s ou T = ${tempo_final} s</p>
                                <p class="palavras"> Sendo assim, a vazão final é Q = ${vazao_final} m³/s ou o tempo final é T = ${tempo_final} s</p>
                                <p class="palavras"> Importante lembrar, seus cálculos estão sendo arredondados
                                com 2 casas decimais.</p>
                                <p class="palavras">Então tome cuidado, X.00 é o mesmo que X,00.</p>`;
    }
    else if (valor_vazao === '' && valor_volume === '' && valor_tempo !== ''){
        let volume_final = `Q . ${valor_tempo}`
        let vazao_final = `V . ${valor_tempo}`
        modal_conteudo.innerHTML = `<p class="palavras"> Considerando os dados inseridos:</p>
                                <p class="palavras2"> Vazão = ? m³/s </p>
                                <p class="palavras2"> Volume = ? m³ </p>
                                <p class="palavras2"> Tempo = ${valor_tempo} s </p>
                                <p class="palavras"> Podemos utilizar a fórmula:</p>
                                <p class="palavras2"> Q = V.T ou V = Q.T</p>
                                <p class="palavras"> Para encontrarmos o resultado, substituimos os valores:</p>
                                <p class="palavras2"> Q = ${vazao_final} ou V = ${volume_final}</p>
                                <p class="palavras2"> Q = ${vazao_final} m³/s ou V = ${volume_final} m³</p>
                                <p class="palavras"> Sendo assim, a vazão final é Q = ${vazao_final} m³/s ou o volume final é V = ${volume_final} m³</p>
                                <p class="palavras"> Importante lembrar, seus cálculos estão sendo arredondados
                                com 2 casas decimais.</p>
                                <p class="palavras">Então tome cuidado, X.00 é o mesmo que X,00.</p>`;
    }
    else if (valor_vazao !== '' && valor_volume !== '' && valor_tempo !== ''){
        modal_conteudo.innerHTML = `<p class="palavras"> É necessário deixar pelo menos um campo vazio, por favor volte
                                e apague um deles.</p>`;
    }
    else{
        modal_conteudo.innerHTML = `<p class="palavras"> Para calcular algo, pelo menos um dos campos deve estar
                                preenchido, por favor volte e insira um valor em algum deles.</p>`;
    }
}

window.onclick = (evento) => {
    if (evento.target == modal){
        modal.style.display = "none";
    }
}

/* Parte dos hovers */

const botao_vazao = document.getElementById('vaz')
const botao_volume = document.getElementById('vol')
const botao_tempo = document.getElementById('tem')

vazao.addEventListener('mouseover', corVer = () => {botao_vazao.style.color = "red"; botao_vazao.style.transition = "0.5s"})
vazao.addEventListener('mouseout', saicorVer = () => {botao_vazao.style.color = "#03045E", botao_vazao.style.transition = "2s"})

volume.addEventListener('mouseover', corVer = () => {botao_volume.style.color = "red"; botao_volume.style.transition = "0.5s"})
volume.addEventListener('mouseout', saicorVer = () => {botao_volume.style.color = "#03045E", botao_volume.style.transition = "2s"})

tempo.addEventListener('mouseover', corVer = () => {botao_tempo.style.color = "red"; botao_tempo.style.transition = "0.5s"})
tempo.addEventListener('mouseout', saicorVer = () => {botao_tempo.style.color = "#03045E", botao_tempo.style.transition = "2s"})