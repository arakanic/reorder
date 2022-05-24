// This function sorts a given string, where each word contains a single number indicating the position the word should have in the result. The input string should only contain valid consecutive numbers.
function order(words) {
    let indices = {}
    let newStr = []
    words.split(" ").forEach(word => {
      word.split("").forEach(char => {
        if (!isNaN(Number(char))) {
          indices[Number(char) - 1] = word
        }
      })
    })
    for (let i in indices) {
      newStr.push(indices[i])
    }
    return newStr.join(" ")
  }

/*
// Ideal:
function order(words) {
  return words
          .split(' ')
          .sort((a, b) => a.match(/\d/) - b.match(/\d/))
          .join(' ')
}
*/

order("is2 Thi1s T4est 3a")
order("4of Fo1r pe6ople g3ood th5e the2")
order("")

// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""
