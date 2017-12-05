import fs from 'fs';

const input = fs.readFileSync('./day-5.input', 'utf-8')
const offsets = input.split('\n').map(line => parseInt(line, 10))

const example = [0, 3, 0, 1, -3]
let nextPosition = 0
let toMove = null
let steps = 0

let exitReached = false

while(!exitReached) {
  steps++
  toMove = offsets[nextPosition]

  offsets[nextPosition] = toMove >= 3 ? offsets[nextPosition] - 1 : offsets[nextPosition] + 1

  nextPosition = nextPosition + toMove

  exitReached = offsets.length - 1 < Math.abs(nextPosition)
}

console.log(steps)