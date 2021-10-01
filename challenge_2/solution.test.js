import { getMaxSubArrayIndices } from './solution'

test('Tests for Challenge Two', () => {

    expect(getMaxSubArrayIndices([2, -4, 6, 8, -10, 100, -6, 5])).toEqual([2, 5])

    expect(getMaxSubArrayIndices([6, 8, -10, 100, -6, 5])).toEqual([0, 3])
    expect(getMaxSubArrayIndices([6, 8, -10, 100, -6, 5, -100, -100, 7])).toEqual([0, 3])
    expect(getMaxSubArrayIndices([6, 8, -10, 100, -6, 5, -100, -100, 7, 2000])).toEqual([8, 9])
    expect(getMaxSubArrayIndices([-3, 1, -3])).toEqual([1, 1])
    expect(getMaxSubArrayIndices([-3, 1, -3, 4])).toEqual([3, 3])
    expect(getMaxSubArrayIndices([6, 3, -4, 4])).toEqual([0, 1]) // [0, 3] would be valid too
    expect(getMaxSubArrayIndices([6, 3, -4, 5])).toEqual([0, 3])
    expect(getMaxSubArrayIndices([6])).toEqual([0, 0])

    expect(() => {
        getMaxSubArrayIndices('')
    }).toThrow('The numbers array must have at least one element.')

})