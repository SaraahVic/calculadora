describe('Suite de testes da funcionalidade fatorial da minha calculadora', function(){

	var minhaCalc = require('../../src/js/minhaCalc.js');

	it('Fatoriar um numero inteiro, 4, e retornar 24', function(){
		expect(minhaCalc.fatorial(4)).toEqual(24);
	});

	it('Fatoriar um numero decimal, 6.4, e retornar 720', function(){
		expect(minhaCalc.fatorial(6.4)).toEqual(720);
	});

	it('Fatoriar um numero negativo, -6, e retornar NaN', function(){		
        expect(minhaCalc.fatorial(-6)).toEqual(NaN);
	});

	it('Fatoriar um numero negativo de ponto flutuante, -2.4, e retornar NaN', function(){		
        expect(minhaCalc.fatorial(-2.4)).toEqual(NaN);
	});

});