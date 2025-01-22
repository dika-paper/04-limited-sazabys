import { countVowels, isAnagram } from "./string";

describe.skip("countVowels", () => {
  it("should count the number of vowels in a string", () => {
    expect(countVowels("The quick brown fox")).toBe(5);
    expect(countVowels("Hello World")).toBe(3);
    expect(countVowels("")).toBe(0);
  });
});

describe.skip("isAnagram", () => {
  it("should check if two strings are anagrams of each other", () => {
    expect(isAnagram("listen", "silent")).toBe(true);
    expect(isAnagram("Hello, World!", "dlroW ,olleH")).toBe(true);
    expect(isAnagram("TypeScript", "JavaScript")).toBe(false);
  });
});
