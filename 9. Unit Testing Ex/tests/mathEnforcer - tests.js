let mathEnforcer = require("../mathEnforcer.js").mathEnforcer;
let expect = require('chai').expect;

describe("Testing mathEnforcer", function () {
    describe("Testing addFive function", function () {
        it("should return undefined for object", function () {
            expect(mathEnforcer.addFive({name: 'pesho'})).to.be.equal(undefined)
        });
        it("should return undefined for string", function () {
            expect(mathEnforcer.addFive('pesho')).to.be.equal(undefined)
        });
        it("should return undefined for empty", function () {
            expect(mathEnforcer.addFive()).to.be.equal(undefined)
        });
        it("should return 10 for 5", function () {
            expect(mathEnforcer.addFive(5)).to.be.equal(10)
        });
        it("should return 4 for -1", function () {
            expect(mathEnforcer.addFive(-1)).to.be.equal(4)
        });
        it("should return 5 for 0", function () {
            expect(mathEnforcer.addFive(0)).to.be.equal(5)
        });
        it("should return 0.04 for -5.04", function () {
            assert.closeTo(mathEnforcer.addFive(-5.04), -0.04, 0.01)
        });
        it("should return 2.96 for -3.04", function () {
            assert.closeTo(mathEnforcer.addFive(-3.04), 2.96, 0.01)
        });
        it("should return 10.04 for 5.04", function () {
            assert.closeTo(mathEnforcer.addFive(5.04), 10.04, 0.01)
        });
    })
    describe("Testing substractTen function", function () {
        it("should return undefined for object", function () {
            expect(mathEnforcer.substractTen({name: 'pesho'})).to.be.equal(undefined)
        });
        it("should return undefined for string", function () {
            expect(mathEnforcer.substractTen('pesho')).to.be.equal(undefined)
        });
        it("should return undefined for empty", function () {
            expect(mathEnforcer.substractTen()).to.be.equal(undefined)
        });
        it("should return 10 for 20", function () {
            expect(mathEnforcer.substractTen(20)).to.be.equal(10)
        });
        it("should return 0 for 10", function () {
            expect(mathEnforcer.substractTen(10)).to.be.equal(0)
        });
        it("should return -10 for 0", function () {
            expect(mathEnforcer.substractTen(0)).to.be.equal(-10)
        });
        it("should return -15.04 for -5.04", function () {
            assert.closeTo(mathEnforcer.substractTen(-5.04), -15.04, 0.01)
        });
        it("should return 2.96 for -3.04", function () {
            assert.closeTo(mathEnforcer.substractTen(-3.04), 13.04, 0.01)
        });
        it("should return 10.04 for 5.04", function () {
            assert.closeTo(mathEnforcer.substractTen(5.04), -5.04, 0.01)
        });
    })
    describe("Testing sum function", function () {
        it("should return undefined for object", function () {
            expect(mathEnforcer.sum({name: 'pesho'}, 5)).to.be.equal(undefined)
        });
        it("should return undefined for string", function () {
            expect(mathEnforcer.sum('pesho', 5)).to.be.equal(undefined)
        });
        it("should return undefined for empty", function () {
            expect(mathEnforcer.sum()).to.be.equal(undefined)
        });
        it("should return 0 for 0, 0", function () {
            expect(mathEnforcer.sum(0, 0)).to.be.equal(0)
        });
        it("should return 5 for -5, 10", function () {
            expect(mathEnforcer.sum(-5, 10)).to.be.equal(5)
        });
        it("should return 5 for -5, -5", function () {
            expect(mathEnforcer.sum(-5, -5)).to.be.equal(-10)
        });
        it("should return 5 for 5, 5", function () {
            expect(mathEnforcer.sum(5, 5)).to.be.equal(10)
        });
        it("should return -15.04 for -5.04", function () {
            assert.closeTo(mathEnforcer.sum(-5.04, -15.04), -20.08, 0.01)
        });
        it("should return 2.96 for -3.04", function () {
            assert.closeTo(mathEnforcer.sum(-3.04, 16), 13.04, 0.01)
        });
        it("should return 10.04 for 5.04", function () {
            assert.closeTo(mathEnforcer.sum(5.04, -10.08), -5.04, 0.01)
        });
    })
})
