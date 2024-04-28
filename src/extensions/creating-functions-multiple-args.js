// 1. define a function that takes two numbers: lower and upper.
// The function should return an array containing all the numbers between
// lower and upper, including lower and upper.
//
// Example Input and Output:
// Input        | Output
// 1, 3         | [1,2,3]
// 10, 13       | [10, 11, 12, 13]
// -1, 1        | [-1, 0, 1]
//
// TODO: write code below
function seesaw(lower, upper) {
  const newArray = []
  for (let i = lower; i <= upper; i++) {
    newArray.push(i)
  }
  return newArray
}
// 2. define a function that takes two arguments: a string and a number.
// The function should return the same string but in upper case with exclamation
// marks appended to the end. The number of exclamation marks should be
// determined by the number argument.
//
// Example Input and Output:
// Input        | Output
// disaster, 5  | DISASTER!!!!!
// error, 10    | ERROR!!!!!!!!!!
//
// TODO: write code below
function upperExclamation(text, howMany) {
  let endgame = text.toUpperCase()
  for (let i = 0; i < howMany; i++) {
    endgame = endgame + '!'
  }
  return endgame
}
// 3. define a function that takes two arguments: a string and a number.
// The function should return the new time in 24hr time after adding the additional time in minutes.
//
// Example Input and Output:
// Input        | Output
// '7:50', 4    | '7:54'
// '7:50', 72   | '9:02'
// '11:50', 20  | '12:10'
// '12:50', 120 | '14:50'
// '23:50', 30  | '00:20'
// TODO: write code below
function addTime(currentTime, willAdd) {
  let endgame
  const colon = currentTime.search(':')
  const givenHour = Number(currentTime.slice(0, colon))
  let givenMinute = Number(currentTime.slice(colon + 1))
  givenMinute = givenMinute + willAdd

  const d = new Date(2024, 4, 28, givenHour, givenMinute)

  if (d.getHours() === 0) {
    endgame = '0' + d.getHours()
  } else {
    endgame = d.getHours()
  }

  endgame = endgame + ':'

  if (d.getMinutes() < 10) {
    endgame = endgame + '0' + d.getMinutes()
  } else {
    endgame = endgame + d.getMinutes()
  }

  return endgame
}

// TODO: change the exported value to be the name of the function you defined
module.exports = {
  a: seesaw, // 1. change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: upperExclamation, // 2. change undefined to be the name of the function defined to return the string with exclamations (the second todo)
  c: addTime // etc
}
