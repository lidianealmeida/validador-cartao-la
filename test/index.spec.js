let chai = require('chai');
let expect = chai.expect;
let piece = require('../index.js');
let validador = piece.cardValidador;

describe('cardValiddoor', () => {
    it('Retornar true para número de cartão 5169 5297 2235 9365', () => {
        expect(validador('5169529722359365')).to.equal(true);
    });
    it('Retornar false para número de cartão 5169 5297 2235 9364', () => {
        expect(validador('5169529722359364')).to.equal(false);
    });
    it('Retornar false para número de cartão 768 897 945 7', () => {
        expect(validador('7688979457')).to.equal(false);
    });
    it('Retornar false para número de cartão 0000 0000 0000 00 0', () => {
        expect(validador('000000000000000')).to.equal(false);
    });
    it('Retornar true para número de cartão 3457 085168 40305', () => {
        expect(validador('345708516840305')).to.equal(true);
    });
});

