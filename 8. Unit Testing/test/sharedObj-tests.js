let sharedObj = require("../sharedObj.js").sharedObject;
let expect = require("chai").expect;

describe("Test sharedObject", function () {
    beforeEach("clear fields", function () {
        $('#name').val('');
        $('#income').val('');
    });
    afterEach("clear fields", function () {
        $('#name').val('');
        $('#income').val('');
    });
    describe("testing properties", function () {
        it("should have property name", function () {
            expect(sharedObject.hasOwnProperty('name')).to.be.equal(true);
        });
        it("should have property income", function () {
            expect(sharedObject.hasOwnProperty('income')).to.be.equal(true);
        });
        it("should have property changeName", function () {
            expect(sharedObject.hasOwnProperty('changeName')).to.be.equal(true);
        });
        it("should have property changeIncome", function () {
            expect(sharedObject.hasOwnProperty('changeIncome')).to.be.equal(true);
        });
        it("should have property updateName", function () {
            expect(sharedObject.hasOwnProperty('updateName')).to.be.equal(true);
        });
        it("should have property updateIncome", function () {
            expect(sharedObject.hasOwnProperty('updateIncome')).to.be.equal(true);
        });
    });
})