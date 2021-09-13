/* Parte do cálculo */

var vazao = document.getElementById('vazao')
var area = document.getElementById('area')
var velocidade = document.getElementById('velocidade')
const calculo = document.getElementById('calculo')
const modal = document.getElementById('menu-respostas')
const modal_conteudo = document.getElementById('coisas-respostas')

calculo.onclick = func_resultado = () => {
    let valor_vazao = vazao.value
    let valor_area = area.value
    let valor_velocidade = velocidade.value
    modal.style.display = "block";
    if (valor_vazao === '' && valor_area !== '' && valor_velocidade !== ''){
        let resultado_final = (valor_area * valor_velocidade).toFixed(2)
        modal_conteudo.innerHTML = `<p class="palavras"> Considerando os dados inseridos:</p>
                                <p class="palavras2"> Vazão = ? m³/s </p>
                                <p class="palavras2"> Área = ${valor_area} m² </p>
                                <p class="palavras2"> Velocidade = ${valor_velocidade} m/s </p>
                                <p class="palavras"> Podemos utilizar a fórmula:</p>
                                <p class="palavras2"> Q = A.V</p>
                                <p class="palavras"> Para encontrarmos o resultado, substituimos os valores:</p>
                                <p class="palavras2"> Q = ${valor_area} . ${valor_velocidade}</p>
                                <p class="palavras2"> Q = ${resultado_final} m³/s</p>
                                <p class="palavras"> Sendo assim, a vazão final é de ${resultado_final} m³/s</p>
                                <p class="palavras"> Importante lembrar, seus cálculos estão sendo arredondados
                                com 2 casas decimais.</p>
                                <p class="palavras">Então tome cuidado, X.00 é o mesmo que X,00.</p>`;
    }
    else if (valor_vazao !== '' && valor_area === '' && valor_velocidade !== ''){
        let resultado_final = (valor_vazao / valor_velocidade).toFixed(2)
        modal_conteudo.innerHTML = `<p class="palavras"> Considerando os dados inseridos:</p>
                                <p class="palavras2"> Vazão = ${valor_vazao} m³/s </p>
                                <p class="palavras2"> Área = ? m² </p>
                                <p class="palavras2"> Velocidade = ${valor_velocidade} m/s </p>
                                <p class="palavras"> Podemos utilizar a fórmula:</p>
                                <p class="palavras2"> A = Q/V</p>
                                <p class="palavras"> Para encontrarmos o resultado, substituimos os valores:</p>
                                <p class="palavras2"> A = ${valor_vazao} / ${valor_velocidade}</p>
                                <p class="palavras2"> A = ${resultado_final} m²</p>
                                <p class="palavras"> Sendo assim, a área final é de ${resultado_final} m²</p>
                                <p class="palavras"> Importante lembrar, seus cálculos estão sendo arredondados
                                com 2 casas decimais.</p>
                                <p class="palavras">Então tome cuidado, X.00 é o mesmo que X,00.</p>`;
    }
    else if (valor_vazao !== '' && valor_area !== '' && valor_velocidade === ''){
        let resultado_final = (valor_vazao / valor_area).toFixed(2)
        modal_conteudo.innerHTML = `<p class="palavras"> Considerando os dados inseridos:</p>
                                <p class="palavras2"> Vazão = ${valor_vazao} m³/s </p>
                                <p class="palavras2"> Área = ${valor_area} m² </p>
                                <p class="palavras2"> Velocidade = ? m/s </p>
                                <p class="palavras"> Podemos utilizar a fórmula:</p>
                                <p class="palavras2"> V = Q/A</p>
                                <p class="palavras"> Para encontrarmos o resultado, substituimos os valores:</p>
                                <p class="palavras2"> V = ${valor_vazao} / ${valor_area}</p>
                                <p class="palavras2"> V = ${resultado_final} m/s</p>
                                <p class="palavras"> Sendo assim, a velocidade final é de ${resultado_final} m/s</p>
                                <p class="palavras"> Importante lembrar, seus cálculos estão sendo arredondados
                                com 2 casas decimais.</p>
                                <p class="palavras">Então tome cuidado, X.00 é o mesmo que X,00.</p>`;
    }
    else if (valor_vazao !== '' && valor_area === '' && valor_velocidade === ''){
        let vel_final = `${valor_vazao} / A`
        let area_final = `${valor_vazao} / V`
        modal_conteudo.innerHTML = `<p class="palavras"> Considerando os dados inseridos:</p>
                                <p class="palavras2"> Vazão = ${valor_vazao} m³/s </p>
                                <p class="palavras2"> Área = ? m² </p>
                                <p class="palavras2"> Velocidade = ? m/s </p>
                                <p class="palavras"> Podemos utilizar a fórmula:</p>
                                <p class="palavras2"> V = Q/A ou A = Q/V</p>
                                <p class="palavras"> Para encontrarmos o resultado, substituimos os valores:</p>
                                <p class="palavras2"> V = ${vel_final} ou A = ${area_final}</p>
                                <p class="palavras2"> V = ${vel_final} m/s ou A = ${area_final} m²</p>
                                <p class="palavras"> Sendo assim, a velocidade final é V = ${vel_final} m/s ou área é A = ${area_final} m²</p>
                                <p class="palavras"> Importante lembrar, seus cálculos estão sendo arredondados
                                com 2 casas decimais.</p>
                                <p class="palavras">Então tome cuidado, X.00 é o mesmo que X,00.</p>`;
    }
    else if (valor_vazao === '' && valor_area !== '' && valor_velocidade === ''){
        let vel_final = `Q / ${valor_area}`
        let vazao_final = `V . ${valor_area}`
        modal_conteudo.innerHTML = `<p class="palavras"> Considerando os dados inseridos:</p>
                                <p class="palavras2"> Vazão = ? m³/s </p>
                                <p class="palavras2"> Área = ${valor_area} m² </p>
                                <p class="palavras2"> Velocidade = ? m/s </p>
                                <p class="palavras"> Podemos utilizar a fórmula:</p>
                                <p class="palavras2"> Q = V.A ou V = Q/A</p>
                                <p class="palavras"> Para encontrarmos o resultado, substituimos os valores:</p>
                                <p class="palavras2"> Q = ${vazao_final} ou V = ${vel_final}</p>
                                <p class="palavras2"> Q = ${vazao_final} m³/s ou V = ${vel_final} m/s</p>
                                <p class="palavras"> Sendo assim, a vazão final é Q = ${vazao_final} m³/s ou a velocidade final é V = ${vel_final} m/s</p>
                                <p class="palavras"> Importante lembrar, seus cálculos estão sendo arredondados
                                com 2 casas decimais.</p>
                                <p class="palavras">Então tome cuidado, X.00 é o mesmo que X,00.</p>`;
    }
    else if (valor_vazao === '' && valor_area === '' && valor_velocidade !== ''){
        let area_final = `Q / ${valor_velocidade}`
        let vazao_final = `A . ${valor_velocidade}`
        modal_conteudo.innerHTML = `<p class="palavras"> Considerando os dados inseridos:</p>
                                <p class="palavras2"> Vazão = ? m³/s </p>
                                <p class="palavras2"> Área = ? m² </p>
                                <p class="palavras2"> Velocidade = ${valor_velocidade} m/s </p>
                                <p class="palavras"> Podemos utilizar a fórmula:</p>
                                <p class="palavras2"> Q = V.A ou A = Q/V</p>
                                <p class="palavras"> Para encontrarmos o resultado, substituimos os valores:</p>
                                <p class="palavras2"> Q = ${vazao_final} ou A = ${area_final}</p>
                                <p class="palavras2"> Q = ${vazao_final} m³/s ou A = ${area_final} m²</p>
                                <p class="palavras"> Sendo assim, a vazão final é Q = ${vazao_final} m³/s ou a área final é A = ${area_final} m²</p>
                                <p class="palavras"> Importante lembrar, seus cálculos estão sendo arredondados
                                com 2 casas decimais.</p>
                                <p class="palavras">Então tome cuidado, X.00 é o mesmo que X,00.</p>`;
    }
    else{
        modal_conteudo.innerHTML = `<p class="palavras"> Talvez você tenha inserido os dados errados, por favor
                                    verifique novamente.</p>`;
    }
}

window.onclick = (evento) => {
    if (evento.target == modal){
        modal.style.display = "none";
    }
}

/* Parte dos hovers */

const botao_vazao = document.getElementById('vaz')
const botao_area = document.getElementById('are')
const botao_velocidade = document.getElementById('vel')

vazao.addEventListener('mouseover', corVer = () => {botao_vazao.style.color = "red"; botao_vazao.style.transition = "0.5s"})
vazao.addEventListener('mouseout', saicorVer = () => {botao_vazao.style.color = "#03045E", botao_vazao.style.transition = "2s"})

area.addEventListener('mouseover', corVer = () => {botao_area.style.color = "red"; botao_area.style.transition = "0.5s"})
area.addEventListener('mouseout', saicorVer = () => {botao_area.style.color = "#03045E", botao_area.style.transition = "2s"})

velocidade.addEventListener('mouseover', corVer = () => {botao_velocidade.style.color = "red"; botao_velocidade.style.transition = "0.5s"})
velocidade.addEventListener('mouseout', saicorVer = () => {botao_velocidade.style.color = "#03045E", botao_velocidade.style.transition = "2s"})