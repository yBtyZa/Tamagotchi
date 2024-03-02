export class Tamagotchi {
    constructor(nome, idade, img) {
        this.nome = nome
        this.idade = idade
        this.img = img
        this.energia = 100
        this.saciedade = 100
        this.felicidade = 100
        this.hidratacao = 100
    }

    alterarNome(novo_nome) {
        return this.nome = novo_nome
    }

    alterarIdade(nova_idade) {
        return this.idade = nova_idade
    }

    alterarImg(nova_img) {
        return this.img = nova_img
    }

    comer() {
        if (this.saciedade < 100) {
            this.saciedade += 20
        }
        if (this.energia > 0) {
            this.energia -= 10
        }
        return `${this.nome} está comendo. Inhac...`
    }

    dormir() {
        if (this.energia < 100) {
            this.energia += 10
        }
        if (this.saciedade > 0) {
            this.saciedade -= 10
        }
        return `${this.nome} está dormindo. Zzz...`
    }

    brincar() {
        if (this.felicidade < 100) {
            this.felicidade += 10;
        }
        if (this.energia > 0) {
            this.energia -= 10
        }
        if (this.hidratacao > 0) {
            this.hidratacao -= 10
        }
        if (this.saciedade > 0) {
            this.saciedade -= 10
        }
        return `${this.nome} está brincando. Uhuul...`
    }

    beber() {
        if (this.hidratacao < 100) {
            this.hidratacao += 10
        }
        return `${this.nome} está bebendo aguá. Glup Glup...`
    }

    tomarBanho() {
        if (this.energia < 100) {
            this.energia += 10
        }
        if (this.felicidade > 0) {
            this.felicidade -= 10
        }
        return `${this.nome} está tomando banho. Parece que ele não gosta muito.`
    }

}
