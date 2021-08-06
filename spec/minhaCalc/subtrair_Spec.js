describe('Suite de testes da funcionalidade subtração da minha calculadora', function(){

	var minhaCalc = require('../../src/js/minhaCalc.js');

	it('Subtrair dois numeros interios positivos, 4 e 3, e retornar 1', function(){
		expect(minhaCalc.subtrair(4, 3)).toEqual(1);
	});

	it('Subtrair dois numeros interios negativos, -4 e -3, e retornar -7', function(){
		expect(minhaCalc.subtrair(-4, -3)).toEqual(-1);
	});

	it('Subtrair dois numeros de ponto flutuante, 7.4 e 5.6, e retornar 1.8', function(){
		expect(minhaCalc.subtrair(7.4, 5.6)).toEqual(1.8);
	});

	it('Subtrair dois numeros de ponto flutuante negativos, -9.3 e -3.1, e retornar -6.2', function(){
		expect(minhaCalc.subtrair(-9.3, -3.1)).toEqual(-6.2);
	});
	
});