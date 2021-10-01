

// Given a set of numbers, find the subset in which the sum of the elements is the maximum sum.
// Big-O Time: O(n), Space: O(1)
const getMaxSubArrayIndices = (numbers) => {
    if (!numbers || numbers.length === 0) throw new Error('The numbers array must have at least one element.')

    const size = numbers.length
    if (size === 1) return [0, 0]

    let subTotal = numbers[0]
    let maxTotal = numbers[0]
    let subTotalStartIndex = 0
    let maxTotalStartIndex = 0
    let maxTotalEndIndex = 0

    for (let index = 1; index < size; index++) {
        let current = numbers[index]
        if (subTotal + current > current) {
            subTotal += current
        } else {
            subTotal = current
            subTotalStartIndex = index
        }
        if (subTotal > maxTotal) {
            maxTotal = subTotal
            maxTotalStartIndex = subTotalStartIndex
            maxTotalEndIndex = index
        }
    }

    return [maxTotalStartIndex, maxTotalEndIndex]
}

export { getMaxSubArrayIndices }