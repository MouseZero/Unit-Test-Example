'strict mode'
const chai = require('chai')
const numbers = require('../src/numbers')
const add = numbers.add
const isEven = numbers.isEven

chai.should()

describe('number', () => {
  describe('isEven', () => {
    it('should return true for even numbers', () => {
      isEven(4).should.be.true
    })

    it('should return false for odd numbers', () => {
      isEven(3).should.be.false
    })
  })

  describe('add', () => {
    var num

    beforeEach(() => {
      num = 5
    })

    it('should be 10 when adding 5 and 5', () => {
      num = add(num, 5)
      num.should.equal(10)
    })

    it('should be 11 when adding 5 and 7', () => {
      add(num, 7).should.equal(12)
    })
  })
})
