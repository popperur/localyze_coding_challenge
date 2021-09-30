

// Given a string text consists of some words separated by some number of spaces,
// return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.
// Constraints:
// - 1 <= text.length <= 104
// - text consists of only English letters and spaces ' '.
// - There will be at least one word in text.
// Big-O Time: O(n), Space: O(1)
const solutionChallengeThree = (text) => {
    if (!text) throw new Error('Text must be at least 1 character long.')

    const size = text.length
    if (size === 1) return 1 // it's safe to return because of the constraint "There will be at least one word in text"

    let lastWordLength = 0
    // traverse the string backwards
    for (let index = size - 1; index >= 0; index--) {
        if (text[index] === ' ') {
            // skip the trailing spaces
            if (lastWordLength === 0) continue
            // otherwise stop, we found the max length of the last word
            break
        }
        lastWordLength++
    }
    return lastWordLength
}

export { solutionChallengeThree }