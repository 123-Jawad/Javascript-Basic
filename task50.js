// 50. Write a JavaScript program to capitalize the first letter of each word in a given string.

function capitalizeFirstLetter(str) {
  let words = str.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}
let givenString = "hello this is jawad";
let capitalizedString = capitalizeFirstLetter(givenString);
console.log(capitalizedString);
