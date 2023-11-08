"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inicializarPessoas = exports.listarPessoas = exports.persistirPessoa = void 0;
const Pessoa_1 = require("../model/Pessoa");
/**
 * Lista de pessoas que são armazenadas durante a execução do programa
 */
let bancoDadosPessoa = [];
/**
 * Cadastra uma pessoa na lista, simulando um banco de dados.
 * Os dados são armazenados somente durante tempo de execução
 *
 * @param pessoa - Pessoa a ser inserida na lista
 * @returns Em caso de erro, é retornado os detalhes do erro a quem chamou esta função
 */
function persistirPessoa(pessoa) {
    //persistindo os dados
    try {
        bancoDadosPessoa.push(pessoa);
    }
    catch {
        return `Erro ao persistir os dados\n ${Error}`;
    }
}
exports.persistirPessoa = persistirPessoa;
/**
 * Lista todas as pessoas cadastradas
 * @returns Lista de pessoas cadastradas
 */
function listarPessoas() {
    return bancoDadosPessoa;
}
exports.listarPessoas = listarPessoas;
/**
 * Método para inicializar o array com 5 pessoas.
 * Apenas para a aplicação não ter um array vazio
 */
function inicializarPessoas() {
    bancoDadosPessoa.push(new Pessoa_1.Pessoa('José Bryan Yuri Fogaça', '10477613195', new Date(1998, 8, 29), '53984291927', 'Rua Capitão Felino Alves', 174, 102));
    bancoDadosPessoa.push(new Pessoa_1.Pessoa('Pedro Marcos César Santos', '92045970035', new Date(1986, 4, 22), '62999425959', 'Rua 3', 167, 76));
    bancoDadosPessoa.push(new Pessoa_1.Pessoa('Marcela Raquel Campos', '79202391769', new Date(1977, 6, 1), '82993578543', 'Rua Doutor Antônio Aleixo de Paes Albuquerque', 184, 64));
    bancoDadosPessoa.push(new Pessoa_1.Pessoa('Silvana Fernanda Rafaela Teixeira', '42169128344', new Date(1971, 2, 22), '11995340104', 'Rua Água Preta', 153, 63));
    bancoDadosPessoa.push(new Pessoa_1.Pessoa('Guilherme Giovanni Araújo', '80431914095', new Date(1985, 10, 24), '85982754705', 'Rua Costa Freire', 160, 65));
}
exports.inicializarPessoas = inicializarPessoas;
//# sourceMappingURL=bancoDeDados.js.map