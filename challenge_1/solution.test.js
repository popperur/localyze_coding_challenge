import { solutionChallengeOne } from './solution'

test('Tests the solution for Challenge One', () => {

    expect(solutionChallengeOne('Pressuuuuuure')).toBe('uuuuuu')
    expect(solutionChallengeOne('Boat')).toBe('B')
    expect(solutionChallengeOne('A hot  dog')).toBe('  ')

    expect(solutionChallengeOne('Pressure')).toBe('ss')
    expect(solutionChallengeOne('Pressuure')).toBe('P')
    expect(solutionChallengeOne('Pressureee')).toBe('eee')
    expect(solutionChallengeOne('aab')).toBe('aa')
    expect(solutionChallengeOne('aabb')).toBe('a')
    expect(solutionChallengeOne('   ')).toBe('   ')
    expect(solutionChallengeOne('x')).toBe('x')
    expect(solutionChallengeOne('')).toBe(null)

})