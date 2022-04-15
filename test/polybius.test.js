// Write your tests here!

const expect = require("chai").expect;
const polybius = require("../src/polybius").polybius;

describe("#polybius() test written by Laura Furman", () => {
    it("should translate both i and j to 42 on encoding", () => {
        const input  = "hi";
        const expected = "3242";
        const actual = polybius(input);
        expect(actual).to.equal(expected);
    });
    it("should translate 42 to '(i/j)' on decoding", () => {
        const input = "3242";
        const encode = false;
        const expected = "h(i/j)";
        const actual = polybius(input, encode);
        expect(actual).to.equal(expected);
    });
    it("should ignore capital letter", () => {
        const input = "Here is a message";
        const expected = "32512451 4234 11 23513434112251";
        const actual = polybius(input);
        expect(actual).to.equal(expected);
    });
    it("should maintain spaces when encoding", () => {
        const input = "a message";
        const expected = "11 23513434112251";
        const actual = polybius(input);
        expect(actual).to.equal(expected);
    });
    it("should maintin space when decoding", () => {
        const input = "11 23513434112251";
        const encode = false;
        const expected = "a message";
        const actual = polybius(input, encode);
        expect(actual).to.equal(expected);
    });
});