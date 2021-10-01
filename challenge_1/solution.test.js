import { getLongestCharSequence } from './solution'

test('Tests for Challenge One', () => {

    expect(getLongestCharSequence('Pressuuuuuure')).toBe('uuuuuu')
    expect(getLongestCharSequence('Boat')).toBe('B')
    expect(getLongestCharSequence('A hot  dog')).toBe('  ')

    expect(getLongestCharSequence('Pressure')).toBe('ss')
    expect(getLongestCharSequence('Pressuure')).toBe('P')
    expect(getLongestCharSequence('Pressureee')).toBe('eee')
    expect(getLongestCharSequence('aab')).toBe('aa')
    expect(getLongestCharSequence('aabb')).toBe('a')
    expect(getLongestCharSequence('   ')).toBe('   ')
    expect(getLongestCharSequence('x')).toBe('x')
    expect(getLongestCharSequence('')).toBe(null)

})