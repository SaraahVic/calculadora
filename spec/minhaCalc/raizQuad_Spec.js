describe('Suite dos testes de raiz quadrada', function(){
    
    var minhaCalc = require('../../src/js/minhaCalc.js');

    it('Raiz de inteiros positivos', function(){
        expect(minhaCalc.raizQuad(8, 2)).toEqual(2.83);
    });

    it('Raiz de inteiro positivo com inteiro negativo', function(){
        expect(minhaCalc.raizQuad(4, -2)).toEqual(2);
    });

    it('Raiz de inteiros de ponto flutuante', function(){
        expect(minhaCalc.raizQuad(25.5, 5.2)).toEqual(5.05);
    });

    it('Raiz de inteiro com zero', function(){
        expect(minhaCalc.raizQuad(64, 0)).toEqual(8);
    });

});