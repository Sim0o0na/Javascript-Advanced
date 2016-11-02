let lookupChar = require("../lookupchar.js").lookupChar;
let expect = require('chai').expect;

describe("testing char function", function () {
    it("should return undefined for num and string", function () {
        let module = lookupChar(8, 'string');
        expect(module).to.be.equal(undefined);
    });
    it("should return undefined for string and bigger num", function () {
        let module = lookupChar('string', 8);
        expect(module).to.be.equal("Incorrect index");
    });
    it("should return undefined for floating num", function () {
        let module = lookupChar('string', 3.14);
        expect(module).to.be.equal(undefined);
    });
    it("should return undefined for both strings", function () {
        let module = lookupChar('string', 'string');
        expect(module).to.be.equal(undefined);
    });
    it("should return undefined for both nums", function () {
        let module = lookupChar(0, 0);
        expect(module).to.be.equal(undefined);
    });
    it("should return \"Incorrect index\" for bigger num ", function () {
        let module = lookupChar('string', 8);
        expect(module).to.be.equal("Incorrect index");
    });
    it("should return \"Incorrect index\" equal to length num ", function () {
        let module = lookupChar('string', 6);
        expect(module).to.be.equal("Incorrect index");
    });
    it("should return \"Incorrect index\" to negative num ", function () {
        let module = lookupChar('string', -6);
        expect(module).to.be.equal("Incorrect index");
    });
    it("should return index for string and  num", function () {
        let module = lookupChar('string', 0);
        expect(module).to.be.equal('s');
    });
    it("should return index for string and  num", function () {
        let module = lookupChar('string', 1);
        expect(module).to.be.equal('t');
    });
});