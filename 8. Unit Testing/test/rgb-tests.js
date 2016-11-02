let rgbToHexColor = require("../RGBtoHex").rgbToHexColor;
let expect = require("chai").expect;

describe("checking RGB function", function () {
    it("should return #FF9EAA for (255, 158, 170)",function () {
        let hexadecimal = rgbToHexColor(255, 158, 170);
        expect(hexadecimal).to.be.equal('#FF9EAA')
    });
    it("should return #0C0D0E for (255, 158, 170)",function () {
        let hexadecimal = rgbToHexColor(12, 13, 14) ;
        expect(hexadecimal).to.be.equal('#0C0D0E')
    });
    it("should return #FFFFFF for (255, 255, 255)",function () {
        let hexadecimal = rgbToHexColor(255, 255, 255) ;
        expect(hexadecimal).to.be.equal('#FFFFFF')
    });
    it("should return undefined for (255, 255, 255)",function () {
        let hexadecimal = rgbToHexColor(-1, 0, 0);
        expect(hexadecimal).to.be.equal(undefined)
    });
    it("should return undefined for (0, 256, 0)",function () {
        let hexadecimal = rgbToHexColor(0, 256, 0);
        expect(hexadecimal).to.be.equal(undefined)
    });
    it("should return undefined for (0, 3.14, 0)",function () {
        let hexadecimal = rgbToHexColor(0, 3.14, 0);
        expect(hexadecimal).to.be.equal(undefined)
    });
    it("should return undefined for ()",function () {
        let hexadecimal = rgbToHexColor();
        expect(hexadecimal).to.be.equal(undefined)
    });
    it("should return undefined for ()",function () {
        let hexadecimal = rgbToHexColor("5", [3], {8:9});
        expect(hexadecimal).to.be.equal(undefined)
    });
    it("should return #000000 for ()",function () {
        let hexadecimal = rgbToHexColor(0, 0, 0) ;
        expect(hexadecimal).to.be.equal('#000000')
    });
    it("should return #000000 for ()",function () {
        let hexadecimal = rgbToHexColor(red, green, blue) ;
        expect(hexadecimal).to.be.equal(undefined)
    });
});