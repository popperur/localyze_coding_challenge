import { solutionChallengeThree } from './solution'

test('Tests for the solution for Challenge Three', () => {

    expect(solutionChallengeThree('Hello World')).toBe(5)
    expect(solutionChallengeThree(' fly me   to   the moon  ')).toBe(4)
    expect(solutionChallengeThree('luffy is still joyboy')).toBe(6)

    expect(solutionChallengeThree('T')).toBe(1)

    expect(() => {
        solutionChallengeThree('')
    }).toThrow('Text must be at least 1 character long.')

})