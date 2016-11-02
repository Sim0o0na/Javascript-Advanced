let isOddOrEven = require("../oddOrEven.js").isOddOrEven;
let expect = require('chai').expect;

describe("testing odd or even function", function () {
    it("should return undefined for object", function () {
        let module = isOddOrEven({name:'pesho'});
        expect(module).to.be.equal(undefined);
    });
    it("should return undefined for number", function () {
        let module = isOddOrEven(8);
        expect(module).to.be.equal(undefined);
    });
    it("should return undefined for number", function () {
        let module = isOddOrEven('pesho');
        expect(module).to.be.equal('odd');
    }); it("should return undefined for number", function () {
        let module = isOddOrEven('pesh');
        expect(module).to.be.equal('even');
    });
});