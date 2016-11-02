let createCalculator  = require("../addSubstract.js").createAddSubtractModule;
let expect = require("chai").expect;


describe("checking calculator", function () {
    let calc;
    beforeEach(function() {
        calc = createCalculator();
    });
    it("should return 5 for add(2, 3)", function () {
        calc.add(2); calc.add(3);
        let value = calc.get();
        expect(value).to.be.equal(5);
    });
    it("should return -5 for substract(2, 3)", function () {
        calc.substract(2); calc.substract(3);
        let value = calc.get();
        expect(value).to.be.equal(-5);
    });
    it("should return 6", function () {
        calc.add(8.5); calc.substract(2.5);
        let value = calc.get();
        expect(value).to.be.equal(6);
    });
    it("should return 6.1", function () {
        calc.add(8.6); calc.substract(2.5);
        let value = calc.get();
        expect(value).to.be.equal(6.1);
    });
    it("should return NaN", function () {
        calc.add('pesho')
        let value = calc.get();
        expect(value).to.be.NaN;
    });
    it("should return NaN", function () {
        calc.substract('pesho')
        let value = calc.get();
        expect(value).to.be.NaN;
    });
    it("should return NaN", function () {
        calc.substract();
        let value = calc.get();
        expect(value).to.be.Nan;
    });
    it("should return NaN", function () {
        calc.add({name:'pesho'});
        let value = calc.get();
        expect(value).to.be.Nan;
    });
    it("should return NaN", function () {
        calc.substract({name:'pesho'});
        let value = calc.get();
        expect(value).to.be.Nan;
    });
    it("should return NaN", function () {
        calc.add();
        let value = calc.get();
        expect(value).to.be.Nan;
    });
});