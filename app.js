//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function calcImc(peso, altura) {
    return (peso / (altura * 2)).toFixed(2);
  }
  console.log("O seu IMC é:", calcImc(105, 1.95));
  
  //Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
  function fatorial(num) {
    if (num < 0) return -1;
    else if (num == 0) return 1;
    else {
      return num * fatorial(num - 1);
    }
  }
  console.log(fatorial(5));
  
  //Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
  function converterDolarReal(real) {
    const dolar = 4.8;
    return (real * dolar).toFixed(2);
  }
  console.log("O valor do real em dolar é:", converterDolarReal(5));
  
  //Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro
  
  function areaPerimetroRetangular(altura, largura) {
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);
    return `A área é ${area} e o perímetro é ${perimetro}`;
  }
  
  console.log(areaPerimetroRetangular(12.50, 3.80));
  
  //5. Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
  function calcularAreaCircular(raio){
    let pi = 3.14
    let area = pi * raio * raio
    let perimetro = 2 * pi * raio
    return `A área é ${area.toFixed(2)} e o perimetro é ${perimetro.toFixed(2)}`
  }
  
  console.log(calcularAreaCircular(5));
  
  //6. Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
  function tabuada(numero){
    for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
    }
  }
  
  tabuada(3)