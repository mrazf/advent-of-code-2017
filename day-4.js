import fs from 'fs';

const input = fs.readFileSync('./day-4.input', 'utf-8')
const lines = input.split('\n').map(line => line.split(' '))

const partOne = lines.reduce((acc, line) => {
  const hash = {}
  let valid = 1

  for (let i = 0; i < line.length; i++) {
    const word = line[i]
    if (hash[word]) {
      valid = 0
      break
    }

    hash[word] = true
  }

  return acc + valid
}, 0)

console.log(partOne)

// Part Two

const partTwo = lines.reduce((acc, line) => {
  const sorted = {}
  let valid = 1

  for(const wordIndex in line) {
    const sortedWord = line[wordIndex].split('').sort().join('')
    if (sorted[sortedWord]) {
      valid = 0

      break
    }

    sorted[sortedWord] = true
  }

  return acc + valid
}, 0)

console.log(partTwo)
