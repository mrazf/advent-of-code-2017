const configurations = {}

const recurse = (memoryBanks, cycles) => {
  if (configurations[memoryBanks]) {
    return cycles
  } else {
    configurations[memoryBanks] = true
  }

  const largestNoOfBlocks = Math.max.apply(Math, memoryBanks)
  const largestBankIndex = memoryBanks.indexOf(largestNoOfBlocks)

  // Redistribute
  const nextMemoryBanks = [ ...memoryBanks ]
  nextMemoryBanks[largestBankIndex] = 0
  
  let toDistribute = largestNoOfBlocks
  let nextIndex = largestBankIndex
  while(toDistribute) {
    nextIndex++
    if (nextIndex === nextMemoryBanks.length) nextIndex = 0

    nextMemoryBanks[nextIndex]++
    toDistribute--
  }

  cycles++

  return recurse(nextMemoryBanks, cycles)
}

const cycles = recurse([5, 1, 10, 0, 1, 7, 13, 14, 3, 12, 8, 10, 7, 12, 0, 6], 0)
console.log(cycles)
