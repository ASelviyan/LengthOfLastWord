var lengthOfLastWord = function(s) {
    let count = 0
    const arr = s.split(" ").filter(str => str !== '')
    return arr[arr.length - 1].length
};

console.log(lengthOfLastWord("Hello World"))//5
console.log(lengthOfLastWord("   fly me   to   the moon  "))//4
console.log(lengthOfLastWord("   luffy is still joyboy  "))//6


