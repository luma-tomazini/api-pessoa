import { Pessoa } from "../model/Pessoa";

let pessoa = new Pessoa(`Luma`, `47808955884`, new Date(2007,3,17), `993447320`, `Rua Numero 3`, 160, 58 );

pessoa.falar();

pessoa.falarFrase("VAI CURINTIA!! BANDO DE OREIUDO");


pessoa.andar();
pessoa.andandoDistancia(`230`);

pessoa.comer();
pessoa.comendoComida(`Banana`);
