

// Given a word, write an algorithm that returns the sequence of a specific character
// that appears the most in sequence. If there are many of them, return the first character.
// Big-O Time: O(n), Space: O(1)
const solutionChallengeOne = (text) => {
    if (!text) return null

    let char = null
    let count = 1
    let maxCount = 1
    let startIndex = -1
    for (let index = 0; index < text.length; index++) {
        if (text[index] === char) {
            count++
        } else {
            count = 1
            char = text[index]
        }

        if (count > maxCount) {
            startIndex = index - count + 1
            maxCount = count
        } else if (count === maxCount) {
            // found a sequence with identical count
            // reset the index because of the rule "If there are many of them, return the first character"
            startIndex = -1
        }
    }

    return startIndex === -1 ? text[0] : text.substr(startIndex, maxCount)
}

export { solutionChallengeOne }