describe('Suite de testes da funcionalidade soma da minha calculadora', function(){

	var minhaCalc = require('../../src/js/minhaCalc.js');

	it('Somar dois numeros inteiros positivos', function(){
		expect(minhaCalc.somar(10, 4)).toEqual(14);
	});

	it('Somar um numero inteiro positivo com um negativo', function(){
		expect(minhaCalc.somar(4, -10)).toEqual(-6);
	});

	it('Somar dois numeros positivos de ponto flutuante', function(){
		expect(minhaCalc.somar(5.5, 3.2)).toEqual(8.7);
	});

	it('Somar dois numeros negativos de ponto flutuante', function(){
		expect(minhaCalc.somar(-1.7, -1.4)).toEqual(-3.1);
	});
	
});