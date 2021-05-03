function spinalCase(str) {
    return str
      .split(/\s|_|(?=[A-Z])/)
      .join("-")
      .toLowerCase();
  }

spinalCase("This Is Spinal Tap")
spinalCase("thisIsSpinalTap")
spinalCase("The_Andy_Griffith_Show")




/*
- If a word begins with a consonant, take the first consonant or consonant cluster,
 move it to the end of the word, and add ay to it.
- If a word begins with a vowel, just add way at the end.
*/

  function translatePigLatin(str) {
    return str
      .replace(/^[aeiou]\w*/, "$&way")
      .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
  }

  translatePigLatin("california") // aliforniacay
  translatePigLatin("algorithm") // algorithmway