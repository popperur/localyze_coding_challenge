import { solutionChallengeTwo } from './solution'

test('Tests for the solution for Challenge Two', () => {

    expect(solutionChallengeTwo([2, -4, 6, 8, -10, 100, -6, 5])).toEqual([2, 5])

    expect(solutionChallengeTwo([6, 8, -10, 100, -6, 5])).toEqual([0, 3])
    expect(solutionChallengeTwo([6, 8, -10, 100, -6, 5, -100, -100, 7])).toEqual([0, 3])
    expect(solutionChallengeTwo([6, 8, -10, 100, -6, 5, -100, -100, 7, 2000])).toEqual([8, 9])
    expect(solutionChallengeTwo([-3, 1, -3])).toEqual([1, 1])
    expect(solutionChallengeTwo([-3, 1, -3, 4])).toEqual([3, 3])
    expect(solutionChallengeTwo([6, 3, -4, 4])).toEqual([0, 1]) // [0, 3] would be valid too
    expect(solutionChallengeTwo([6, 3, -4, 5])).toEqual([0, 3])
    expect(solutionChallengeTwo([6])).toEqual([0, 0])

    expect(() => {
        solutionChallengeTwo('')
    }).toThrow('The numbers array must have at least one element.')

})