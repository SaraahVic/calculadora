describe('Suite de testes da funcionalidade dividir da minha calculadora', function(){

	var minhaCalc = require('../../src/js/minhaCalc.js');

	it('Deve dividir dois numeros interios, 40 e 5, e retornar 8', function(){
		expect(minhaCalc.dividir(40, 5)).toEqual(8);
	});

	it('Deve dividir dois numeros de ponto flutuante, 8.8 e 2.2, e retornar 4', function(){
		expect(minhaCalc.dividir(8.8, 2.2)).toEqual(4);
	});

	it('Deve dividir dois numeros de ponto flutuante, 9.99 e 3.0, e retornar 3.33', function(){		
        expect(minhaCalc.dividir(9.99, 3.0)).toEqual(3.33);
	});

	it('Deve dividir dois numeros de ponto flutuante, 16.2 e 2, e retornar 8.1', function(){		
        expect(minhaCalc.dividir(16.2, 2)).toEqual(8.1);
	});

});