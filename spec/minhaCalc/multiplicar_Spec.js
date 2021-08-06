describe('Suite de testes da funcionalidade multiplicar da minha calculadora', function(){

	var minhaCalc = require('../../src/js/minhaCalc.js');

	it('Deve multiplicar dois numeros interios, 3 e 5, e retornar 15', function(){
		expect(minhaCalc.multiplicar(3, 5)).toEqual(15);
	});

	it('Deve multiplicar dois numeros de ponto flutuante, 2.0 e 3.5, e retornar 7', function(){
		expect(minhaCalc.multiplicar(2.0, 3.5)).toEqual(7);
	});

	it('Deve multiplicar dois numeros negativos, -6 e -2, e retornar 12', function(){		
        expect(minhaCalc.multiplicar(-6, -2)).toEqual(12);
	});

	it('Deve multiplicar dois numeros negativos de ponto flutuante, -1.3 e -3.1, e retornar 4.03', function(){		
        expect(minhaCalc.multiplicar(-1.3, -3.1)).toEqual(4.03);
	});

});