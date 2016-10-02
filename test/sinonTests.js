'use strict'
const chai = require('chai')
const sinon = require('sinon')

chai.should()

describe('sinon test', () => {
  var student, schedule

  beforeEach(() => {
    student = {
      dropClass: (classId, callback) => {
        if (callback.dropClass) {
          callback.dropClass()
        } else {
          callback()
        }
      }
    }
    schedule = {
      dropClass: () => {
        console.log('classed dropped')
      }
    }
  })

  describe('student.dropClass', () => {
    it('should call the callback', () => {
      const spy = sinon.spy()
      student.dropClass(1, spy)
      spy.called.should.be.true
    })

    it('should call the callback and log to console', () => {
      function cLog () {
        console.log('call back was called')
      }
      const spy = sinon.spy(cLog)
      student.dropClass(1, spy)
      spy.called.should.be.true
    })

    it('should call the callback functions dropClass function', () => {
      sinon.spy(schedule, 'dropClass')
      student.dropClass(1, schedule)
      schedule.dropClass.called.should.be.true
    })
  })
})
