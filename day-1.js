import fs from 'fs';

const input = fs.readFileSync('./day-1-input', 'utf-8')
const chars = input.split('')
const ints = chars.map(char => parseInt(char, 10))

const noInts = ints.length
const halfWay = noInts / 2

const partOne = ints.reduce((acc, currentInteger, currentIndex) => {
  const nextInteger = ints[currentIndex + 1] || ints[0]
  const toAdd = currentInteger === nextInteger ? currentInteger : 0

  return acc + toAdd
}, 0)

console.log('part one', partOne)

const wrapped = ints.map((int, index) => {
  const nextIndex = index + halfWay
  const isWrapped = nextIndex >= noInts

  return isWrapped ? ints[(index + halfWay) - noInts] : ints[nextIndex]
})

const partTwo = ints.reduce((acc, currentInteger, currentIndex) => {
  const nextInteger = wrapped[currentIndex]
  const toAdd = currentInteger === nextInteger ? currentInteger : 0

  return acc + toAdd
}, 0)

console.log('part two', partTwo)