import { Injector } from '@wendellhu/redi'

describe('core', () => {
  it('should injector work', () => {
    let createCount = 0

    class A {
      constructor() {
        createCount += 1
      }
    }

    const j = new Injector([[A]])

    j.get(A)
    expect(createCount).toBe(1)
    expect(true).toBe(true)
  })
})
