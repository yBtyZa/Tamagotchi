import { Tamagotchi } from "./tamagotchi.js";

const tamagotchi1 = new Tamagotchi('', 1, '')

function brincar() {
    const msg = tamagotchi1.brincar()
    document.getElementById('mensagem').innerText = msg

    const img = document.getElementById('img')
    const img_capa = './assets/img/idle-happy.gif'
    tamagotchi1.alterarImg(img_capa)

    img.src = tamagotchi1.img

    const hidratacao = document.getElementById('hidratacao')
    const saciedade = document.getElementById('saciedade')
    const energia = document.getElementById('energia')
    const felicidade = document.getElementById('felicidade')
    hidratacao.innerText = tamagotchi1.hidratacao
    saciedade.innerText = tamagotchi1.saciedade
    energia.innerText = tamagotchi1.energia
    felicidade.innerHTML = tamagotchi1.felicidade

    calcularVida()
}
function comer() {
    const msg = tamagotchi1.comer()
    document.getElementById('mensagem').innerText = msg

    const img = document.getElementById('img')
    const img_capa = './assets/img/drink-drinking.gif'
    tamagotchi1.alterarImg(img_capa)

    img.src = tamagotchi1.img

    const energia = document.getElementById('energia')
    const saciedade = document.getElementById('saciedade')
    energia.innerText = tamagotchi1.energia
    saciedade.innerHTML = tamagotchi1.saciedade

    calcularVida()
}
function dormir() {
    const msg = tamagotchi1.dormir()
    document.getElementById('mensagem').innerText = msg

    const img = document.getElementById('img')
    const img_capa = './assets/img/rip-deadpool.gif'
    tamagotchi1.alterarImg(img_capa)

    img.src = tamagotchi1.img

    const energia = document.getElementById('energia')
    const saciedade = document.getElementById('saciedade')
    energia.innerText = tamagotchi1.energia
    saciedade.innerHTML = tamagotchi1.saciedade

    calcularVida()
}
function beber() {
    const msg = tamagotchi1.beber()
    document.getElementById('mensagem').innerText = msg

    const img = document.getElementById('img')
    const img_capa = './assets/img/drink-drinking.gif'
    tamagotchi1.alterarImg(img_capa)

    img.src = tamagotchi1.img

    const hidratacao = document.getElementById('hidratacao')
    hidratacao.innerHTML = tamagotchi1.hidratacao

    calcularVida()
}
function tomarBanho() {
    const msg = tamagotchi1.tomarBanho()
    document.getElementById('mensagem').innerText = msg

    const img = document.getElementById('img')
    const img_capa = './assets/img/cry-sad.gif'
    tamagotchi1.alterarImg(img_capa)

    img.src = tamagotchi1.img

    const felicidade = document.getElementById('felicidade')
    const energia = document.getElementById('energia')
    energia.innerHTML = tamagotchi1.energia
    felicidade.innerHTML = tamagotchi1.felicidade

    calcularVida()
}
function alterarNome() {
    const nome = document.getElementById('nome').value
    tamagotchi1.alterarNome(nome)
    document.getElementById('novo_nome').innerText = `Nome: ${tamagotchi1.nome}`

    atualizarIdade()

    const img = document.getElementById('img')
    const img_capa = './assets/img/wave-waving.gif'
    tamagotchi1.alterarImg(img_capa)

    img.src = tamagotchi1.img

    const acoes = document.getElementById('acoes')
    acoes.style.display = 'flex'

    const digitarNome = document.getElementById('digitarNome')
    digitarNome.style.display = 'none'

    setInterval(atualizarIdade, 30000);
}

function atualizarIdade() {
    tamagotchi1.alterarIdade(tamagotchi1.idade + 1);
    document.getElementById('idade').innerText = `Idade: ${tamagotchi1.idade} ano(s)`
}

tamagotchi1.alterarIdade(0);

document.getElementById('idade').innerText = `Idade: ${tamagotchi1.idade} ano(s)`

function calcularVida() {
    const calcularVida = (tamagotchi1.energia + tamagotchi1.saciedade + tamagotchi1.felicidade + tamagotchi1.hidratacao) / 4
    const vida = document.getElementById('vida')
    vida.innerText = `${parseInt(calcularVida)}%`
}


window.brincar = brincar
window.comer = comer
window.dormir = dormir
window.beber = beber
window.tomarBanho = tomarBanho
window.alterarNome = alterarNome

