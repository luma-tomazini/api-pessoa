"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    nome;
    cpf;
    data_nascimento;
    telefone;
    endereco;
    altura;
    peso;
    constructor(_nome, _cpf, _data_nascimento, _telefone, _endereco, _altura, _peso) {
        this.nome = _nome;
        this.cpf = _cpf;
        this.data_nascimento = _data_nascimento;
        this.telefone = _telefone;
        this.endereco = _endereco;
        this.altura = _altura;
        this.peso = _peso;
    }
    /**
     *
     * @returns
     */
    getNome() {
        return this.nome;
    }
    setNome(_nome) {
        this.nome = _nome;
    }
    getCpf() {
        return this.cpf;
    }
    setCpf(_cpf) {
        this.cpf = _cpf;
    }
    getData_Nascimento() {
        return this.data_nascimento;
    }
    setData_Nascimento(_data_nascimento) {
        this.data_nascimento = _data_nascimento;
    }
    getTelefone() {
        return this.telefone;
    }
    set(_telefone) {
        this.telefone = _telefone;
    }
    getEndereco() {
        return this.endereco;
    }
    setEndereco(_endereco) {
        this.endereco = _endereco;
    }
    getAltura() {
        return this.altura;
    }
    setAltura(_altura) {
        this.altura = _altura;
    }
    getPeso() {
        return this.peso;
    }
    setPeso(_peso) {
        this.peso = _peso;
    }
    mostraPessoa() {
        console.log(`Nome: ${this.nome}
                    CPF: ${this.cpf}
                    Data: ${this.data_nascimento}
                    Telefone: ${this.telefone}
                    Endereco: ${this.endereco}
                    Altura: ${this.altura}
                    Peso: ${this.peso}`);
    }
    // implementar os metodos
    falar() {
        //logica de negocio
        console.log(`${this.nome} está falando`);
    }
    falarFrase(_frase) {
        console.log(`${this.nome} fala: ${_frase}`);
    }
    andar() {
        console.log(`${this.nome} esta andando`);
    }
    andandoDistancia(_frase) {
        //Logica de negócio
        console.log(`${this.nome} anda: ${_frase} Quilometros`);
    }
    comer() {
        console.log(`${this.nome} esta comendo`);
    }
    comendoComida(_frase) {
        //Logica de negócio
        console.log(`${this.nome} esta comendo: Uma ${_frase}`);
    }
}
exports.Pessoa = Pessoa;
//# sourceMappingURL=Pessoa.js.map