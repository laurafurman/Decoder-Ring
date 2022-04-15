// Write your tests here!
const expect = require("chai").expect;
const substitution = require("../src/substitution").substitution;

describe("#substitution() tests written by Laura Furman", () => {
    it("should return false if alphabet is not exactly 26 characters", () => {
        const input = "a message";
        const alphabet = "qwertyuiopasdfghjklzxcvbnm,";
        const expected = false;
        const actual = substitution(input, alphabet);
        expect(actual).to.equal(expected);
    })
    it("should correctly translate the given phrase, based on the alphabet given", () => {
        const input = "a message";
        const alphabet = "qwertyuiopasdfghjklzxcvbnm";
        const expected = "q dtllqut";
        const actual = substitution(input, alphabet);
        expect(actual).to.equal(expected);
    })
    it("should return false if any alphabet charactes are duplicates", () => {
        const input = "a message";
        const alphabet = "qertyuiopasdfghjkllzxcvbnm";
        const expected = false;
        const actual = substitution(input);
        expect(actual).to.equal(expected);
    });
    it("should maintain spaces when encoding", () => {
        const input = "a message";
        const alphabet = "qwertyuiopasdfghjklzxcvbnm";
        const expected = "q dtllqut";
        const actual = substitution(input, alphabet);
        expect(actual).to.equal(expected);
    });
    it("should maintain spaces when decoding", () => {
        const input = "q dtllqut";
        const alphabet = "qwertyuiopasdfghjklzxcvbnm";
        const expected = "a message";
        const encode = false;
        const actual = substitution(input, alphabet, encode);
        expect(actual).to.equal(expected);
    });
    it("should ignore capital letters", () => {
        const input = "A message";
        const alphabet = "qwertyuiopasdfghjklzxcvbnm";
        const expected = "q dtllqut";
        const actual = substitution(input, alphabet);
        expect(actual).to.equal(expected);
    });
});