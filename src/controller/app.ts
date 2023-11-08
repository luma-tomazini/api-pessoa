import express from "express";
import cors from 'cors';
import { Pessoa } from "../model/Pessoa";
import { inicializarPessoas, listarPessoas, persistirPessoa } from "./bancoDeDados";

// Inicializa uma lista de pessoas
inicializarPessoas();

// Cria o servidor express
const app = express();
// Define a porta que o servidor vai escutar as requisições
const port: number = 3001;

// Habilitando o uso de JSON no servidor express
app.use(express.json());

// Habilitando o uso do CORS para garantir a segurança das requisições
app.use(cors());

// Primeira rota, a rota principal do servidor
app.get('/', (req, res) => {
    console.log('Recebi sua requisição');

    res.send({ mensagem: "Estou devolvendo a resposta para sua requisição" });
});

// Rota para consultar pessoas
app.get('/pessoas', (req, res) => {
    const listaDePessoas = listarPessoas();

	console.log(`Retornando a lista das pessoas cadastradas`);

    res.json(listaDePessoas);
});

// Servidor sendo executado
app.listen(port, () => {
    console.log(`Servidor express ouvindo no endereço http://localhost:${port}/`);
});

app.get('/pessoas', (req, res) => {
    const listaDePessoas = listarPessoas();

	console.log(`Retornando a lista das pessoas cadastradas`);

    res.json(listaDePessoas);
});

// Rota para cadastrar uma pessoa
app.post('/cadastro', (req, res) => {
    // Recuperando as informações JSON que vieram no corpo (body) da requisição (req) e desestruturando essa informação para cada atributo
const { nome, cpf, data_nascimento, telefone, endereco, altura, peso } = req.body;

    // Criando um novo objeto do tipo Pessoa com as informações recuperadas da requisição
const pessoa = new Pessoa(nome, cpf, new Date(data_nascimento), telefone, endereco, altura, peso);

    // Apenas imprimindo as informações do objeto no console do servidor
console.log(pessoa);

    // Chamando a função para persistir (salvar) os dados da pessoa no banco de dados
persistirPessoa(pessoa);

    // Resposta que o servidor irá enviar ao front-end (A resposta será estrutura em um JSON)
res.json({ mensagem: "Pessoa cadastrada com sucesso" })
})