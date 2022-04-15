// Write your tests here!
const expect = require("chai").expect;
const caesar = require("../src/caesar").caesar;

describe("#caesar() tests written by Laura Furman", () => {
    it("should return false if shift value is equal to 0, less than -25, greater than 25, or not present.", () => {
        const input = "Caesar was a cool dude";
        const shift = 0;
        const expected = false;
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected);
    });
    it("should ignore capital letters", () => {
        const input = "A message";
        const shift = 3;
        const expected = "d phvvdjh";
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected);
    });
    it("should handle shifts wrapping the end of the alphabet", () => {
        const input = "zebras are stripey";
        const shift = 4;
        const expected = "difvew evi wxvmtic";
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected);
    });
    it("should maintain spaces and symbolsn when encoding", () => {
        const input = "Here is a symbol: $";
        const shift = 3;
        const expected = "khuh lv d vbpero: $";
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected);
    });
    it("should maintain spaces and symbols when decoding", () => {
        const input = "livi mw e wcqfsp: $";
        const shift = 4;
        const encode = false;
        const expected = "here is a symbol: $";
        const actual = caesar(input, shift, encode);
        expect(actual).to.equal(expected);
    });
});

