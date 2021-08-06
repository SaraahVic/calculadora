describe('Suite dos testes de raiz cubica', function(){
    
    var minhaCalc = require('../../src/js/minhaCalc.js');

    it('Raiz de inteiros positivos', function(){
        expect(minhaCalc.raizCub(8, 2)).toEqual(2);
    });

    it('Raiz de inteiro positivo com inteiro negativo', function(){
        expect(minhaCalc.raizCub(4, -2)).toEqual(1.59);
    });

    it('Raiz de inteiros de ponto flutuante', function(){
        expect(minhaCalc.raizCub(25.5, 5.2)).toEqual(2.94);
    });

    it('Raiz de inteiro com zero', function(){
        expect(minhaCalc.raizCub(64, 0)).toEqual(4);
    });

});