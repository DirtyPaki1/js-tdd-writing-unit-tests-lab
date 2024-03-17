import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
 it("returns true for 'racecar'", () => {
    expect(isPalindrome("racecar")).toBe(true);
 });

 it("returns false for 'car'", () => {
    expect(isPalindrome("car")).toBe(false);
 });

 // Edge cases
 it("returns true for words that are a combination of uppercase and lowercase letters", () => {
    expect(isPalindrome("Racecar")).toBe(true);
 });

 it("returns false for an empty string", () => {
    expect(isPalindrome("")).toBe(false);
 });

 // Bonus: Throw an error for non-alphabetic characters
 it("throws an error for input with non-alphabetic characters", () => {
    expect(() => isPalindrome("racecar123")).toThrow();
 });

 // Bonus: Throw an error for input that isn't a string
 it("throws an error for input that isn't a string", () => {
    expect(() => isPalindrome(12345)).toThrow();
 });
});
