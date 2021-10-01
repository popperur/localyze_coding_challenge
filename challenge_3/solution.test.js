import { getLastWordLength } from './solution'

test('Tests for Challenge Three', () => {

    expect(getLastWordLength('Hello World')).toBe(5)
    expect(getLastWordLength(' fly me   to   the moon  ')).toBe(4)
    expect(getLastWordLength('luffy is still joyboy')).toBe(6)

    expect(getLastWordLength('T')).toBe(1)

    expect(() => {
        getLastWordLength('')
    }).toThrow('Text must be at least 1 character long.')

})