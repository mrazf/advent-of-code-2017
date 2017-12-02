import fs from 'fs';

const input = fs.readFileSync('./day-2.input', 'utf-8')
const lines = input.split('\n').map(line => line.split('\t'))

const partOne = lines.reduce((acc, line) => {
  const ints = line.map(string => parseInt(string, 10))
  const sorted = ints.sort((a, b) => a - b)

  const lowest = sorted[0]
  const highest = sorted[sorted.length - 1]

  return acc + (highest - lowest)
}, 0)

console.log(partOne)

const findDivisiblePair = (sorted) => {
  const [divisor, ...candidates] = sorted

  const numerator = candidates.find(candidate => (candidate % divisor) === 0)

  return numerator ? numerator / divisor : findDivisiblePair(sorted.slice(1))
}

const partTwo = lines.reduce((acc, line) => {
  const ints = line.map(string => parseInt(string, 10))
  const sorted = ints.sort((a, b) => a - b)

  return acc + findDivisiblePair(sorted)
}, 0)

console.log(partTwo)
