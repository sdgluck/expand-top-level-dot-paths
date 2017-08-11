const expand = require('./')

describe('expand-top-level-dot-paths', () => {
  it('throws with bad object', () => {
    expect(() => expand()).toThrowError(/expecting object/)
    expect(() => expand('')).toThrowError(/expecting object/)
  })

  it('throws with bad initialValue', () => {
    expect(() => expand({}, 1)).toThrowError(/expecting initialValue to be object/)
  })

  it('expands dot-paths', () => {
    const actual = expand({
      'who.lives.in.a.pineapple.under.the.sea': 'spongebob squarepants'
    })

    const expected = {
      who: {
        lives: {
          in: {
            a: {
              pineapple: {
                under: {
                  the: {
                    sea: 'spongebob squarepants'
                  }
                }
              }
            }
          }
        }
      }
    }

    expect(actual).toEqual(expected)
    expect(actual).not.toBe(expected)
  })

  it('uses initial value', () => {
    const actual = expand({
      'expand.me': 'please'
    }, {
      initial: 'value'
    })

    const expected = {
      expand: {
        me: 'please'
      },
      initial: 'value'
    }

    expect(actual).toEqual(expected)
    expect(actual).not.toBe(expected)
  })
})
