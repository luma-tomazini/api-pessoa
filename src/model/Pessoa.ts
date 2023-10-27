export class Pessoa {

    private nome: string;
    private cpf: string;
    private data_nascimento: Date;
    private telefone: string;
    private endereco: string;
    private altura: number;
    private peso: number;

    public constructor (
        _nome: string,
        _cpf: string,
        _data_nascimento: Date,
        _telefone: string,
        _endereco: string,
        _altura: number,
        _peso: number,) {
            
            this.nome = _nome;
            this.cpf = _cpf;
            this.data_nascimento = _data_nascimento;
            this.telefone = _telefone;
            this.endereco = _endereco;
            this.altura = _altura;
            this.peso =_peso;
    }
/**
 * 
 * @returns 
 */
    public getNome() {   //get = recuperar
        return this.nome;
    }

    public setNome(_nome: string){   //set = atribuir
        this.nome = _nome;
    }

    public getCpf() {   //get = recuperar
        return this.cpf;
    }

    public setCpf(_cpf: string){   //set = atribuir
        this.cpf = _cpf;
    }

    public getData_Nascimento() {   //get = recuperar
        return this.data_nascimento;
    }

    public setData_Nascimento(_data_nascimento: Date){   //set = atribuir
        this.data_nascimento = _data_nascimento;
    }

    public getTelefone() {   //get = recuperar
        return this.telefone;
    }

    public set(_telefone: string){   //set = atribuir
        this.telefone = _telefone;
    }

    public getEndereco() {   //get = recuperar
        return this.endereco;
    }

    public setEndereco(_endereco: string){   //set = atribuir
        this.endereco = _endereco;
    }

    public getAltura() {   //get = recuperar
        return this.altura;
    }

    public setAltura(_altura: number){   //set = atribuir
        this.altura = _altura;
    }

    public getPeso() {   //get = recuperar
        return this.peso;
    }

    public setPeso(_peso: number){   //set = atribuir
        this.peso = _peso;
    }

    public mostraPessoa(){
        console.log(`Nome: ${this.nome}
                    CPF: ${this.cpf}
                    Data: ${this.data_nascimento}
                    Telefone: ${this.telefone}
                    Endereco: ${this.endereco}
                    Altura: ${this.altura}
                    Peso: ${this.peso}`);
    }


    // implementar os metodos
    public falar():void {
//logica de negocio
        console.log(`${this.nome} está falando`);
    }

    public falarFrase(_frase: string):void {
        console.log(`${this.nome} fala: ${_frase}`);
    }

    public andar():void {
        console.log(`${this.nome} esta andando`);
    }

    public andandoDistancia(_frase:string):void {
        //Logica de negócio
        console.log(`${this.nome} anda: ${_frase} Quilometros`);
    }


    public comer():void {
        console.log(`${this.nome} esta comendo`);
    }

    public comendoComida(_frase:string):void {
        //Logica de negócio
        console.log(`${this.nome} esta comendo: Uma ${_frase}`);
    }


/**
 * CRUD
 */

cadastroPessoa(baninha: Pessoa) {
console.log(`${baninha.nome}cadastrado com sucesso`);
}
}
