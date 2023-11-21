//Crie um programa que peça ao usuário para inserir um número e o exiba na tela.

const prompt = require('prompt-sync')();

const NumeroParaExibirNaTela:number = Number(prompt('digite um numero para o mesmo ser exibido na tela : '))

console.log(NumeroParaExibirNaTela);

console.log( '-------------------------------------------------------------------------------------------------------------------')
//Desenvolva um programa que calcule a soma de dois números inseridos pelo usuário.
const NumeroParasomar:number = Number(prompt('digite um numero  para somar : '))
const NumeroParasomar1:number = Number(prompt('digite um numero para soamr : '))

console.log(NumeroParasomar + NumeroParasomar1)

console.log( '-------------------------------------------------------------------------------------------------------------------')
//Elabore um programa que verifique se um número é par ou ímpar.


const NumeroParaverificar:number = Number(prompt('digite um numero  para verificar : '))

if ( NumeroParaverificar % 2 == 0){
    console.log('par')
} else{
    console.log('impar')
}

console.log( '-------------------------------------------------------------------------------------------------------------------')
//Faça um programa que receba três números e mostre o maior deles.

console.log('escreva 3 numeros e eu, o mestre supremo dos numeros, lhe direi o maior dentre eles')

const Numero1:number = Number(prompt('digite um numero 1 : '))
const Numero2:number = Number(prompt('digite um numero 2 : '))
const Numero3:number = Number(prompt('digite um numero 3 : '))

const maior = (Numero1:number, Numero2:number, Numero3:number):void => {
    if (Numero2 > Numero1){
        Numero1 = Numero2
    }
    if (Numero3 > Numero1){
        Numero1 = Numero3
    }

    console.log(Numero1)
}

maior(Numero1, Numero2, Numero3)

//Crie um programa que calcule o fatorial de um número

const fatorial:number = Number(prompt('digite um numero eu descobrirei o fatorial : '))
const numero122:number = 1

const descobrirfatorial = (fatorial:number, numero:number):void => {
    for (var i:number = 0; i <= fatorial; i++){
        numero = fatorial * numero
        fatorial = fatorial - 1
    }
    console.log(numero)
}

if (fatorial == 0){
    console.log('o fatorial de 0 é', 1)
} else if (fatorial < 0){
    console.log("não existe fatorial para numeros negativos, escolha um numero positivo e tente novamente")
} else{
    descobrirfatorial(fatorial, numero122)
}


//Desenvolva um programa que converta graus Celsius para Fahrenheit

const Celcius:number = Number(prompt('digite um numero em graus celcius e eu transformarei ele em fahrenheit: '))
    console.log((Celcius * 9/5) + 32)

//Escreva um programa que imprima os primeiros N números primos

var numerosprimos = Number(prompt('Diga um número e direi os primeiros numeros primos: '));

function isPrimo(numero: number): boolean {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

function imprimirPrimos(numerosprimos: number): void {
    let count = 0;
    let numero = 2;
    while (count < numerosprimos) {
        if (isPrimo(numero)) {
            console.log(numero);
            count++;
        }
        numero++;
    }
}

imprimirPrimos(numerosprimos);

//Faça um programa que conte quantas vogais há em uma palavra

var vogais = prompt('digite qualquer coisa eu direi quantas vogais tem')
var vogais1 = 0

for(var i = 0; i <= vogais.length; i++){
    if(vogais[i]=='a' || vogais[i]=='e' || vogais[i]=='i' || vogais[i]=='o' || vogais[i]=='u'){
        vogais1++
    }
}
console.log(vogais1)

//Crie um programa que inverta a ordem dos dígitos de um número

