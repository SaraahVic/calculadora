describe('Suite dos testes de exponenciacao', function(){
    
    var minhaCalc = require('../../src/js/minhaCalc.js');

    it('Elevar inteiro com inteiro positivo', function(){
        expect(minhaCalc.exponenciacao(4, 4)).toEqual(256);
    });

    it('Elevar inteiro com inteiro negativo', function(){
        expect(minhaCalc.exponenciacao(8, -2)).toEqual(0.02);
    });

    it('Elevar inteiro com decimal', function(){
        expect(minhaCalc.exponenciacao(2, 3.5)).toEqual(11.31);
    });

    it('Elevar inteiro negativo com inteiro negativo', function(){
        expect(minhaCalc.exponenciacao(-5, -2)).toEqual(0.04);
    });

});