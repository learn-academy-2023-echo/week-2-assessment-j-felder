// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Echo 2023"
// console.log(cohort.split(""))

// a) Your answer: ['E' 'c' 'h' 'o' ' ' '2' '0' '2' '3']
// b) Verify and explain: split is a method that turns strings into arrays. if there were a space in the quotes, the string would be referenced by the space, creating two indicies in the returned array, in this case every character is assigned its own index in the new array.

// --------------------2) What will this log?

const greeter = (name) => {
  return `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: "Hello, LEARN Student"
// b) Verify and explain: undefined, every function needs a return.
// out put with return: "Hello, LEARN Student!"

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
// console.log(multipliedByTwo)

// a) Your answer: [ 8, 10, 12, 14, 16]
// b) Verify and explain: [ 8, 10, 12, 14, 16 ] as defined, the variable multipliedByTwo will always return each index multiplied by two 

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: [ 12, 14]
// b) Verify and explain: [ 11, 13, 15 ]
// the bang operator allows the numbers not divisible by 2 evenly to be filterd from the original array. i overlooked the bang operator so output is the odd values of the array.

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: "Javascript"
// b) Verify and explain: JavaScript. javascript is the first index of the languages array. dot notation is used for objects.

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Echo"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer:"Goerge" "Echo" 2023
// b) Verify and explain: Learn { student: 'George', cohort: 'Echo', year: 2023 }
//since you are returning part the object the dot notation can be used to return the key value-pairs  
