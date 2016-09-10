const uuid = require('uuid')
const test = require('tape')
const listeners = {}

const catchThosePromises = require('../index')(function(e) {
  listeners[`${e.message}`](e)
})

test('Native', function(t) {
  const id = uuid.v4()

  listeners[id] = (e) => {
    t.assert(`${e.message}` === id, 'Error is catched')
    t.end()
  }

  new Promise(() => {
    throw new Error(id)
  })
})

test('Bluebird', function(t) {
  const id = uuid.v4()
  const Promise = require('bluebird')

  listeners[id] = (e) => {
    t.assert(`${e.message}` === id, 'Error is catched')
    t.end()
  }

  new Promise(() => {
    throw new Error(id)
  })
})

test('Q', function(t) {
  const id = uuid.v4()
  const Q = require('q')

  listeners[id] = (e) => {
    t.assert(`${e.message}` === id, 'Error is catched')
    t.end()
  }

  Q(5).then(() => {
    throw new Error(id)
  })
})

test('Promise', function(t) {
  const id = uuid.v4()
  const Promise = require('promise');

  listeners[id] = (e) => {
    t.assert(`${e.message}` === id, 'Error is catched')
    t.end()
  }

  new Promise(() => {
    throw new Error(id)
  })

})

test('Yaku', function(t) {
  const id = uuid.v4()
  const Promise = require('yaku');

  listeners[id] = (e) => {
    t.assert(`${e.message}` === id, 'Error is catched')
    t.end()
  }

  new Promise(() => {
    throw new Error(id)
  })
})

test('ES6 Promise', function(t) {
  const id = uuid.v4()
  const Promise = require('es6-promise').Promise;

  listeners[id] = (e) => {
    t.assert(`${e.message}` === id, 'Error is catched')
    t.end()
  }

  new Promise(() => {
    throw new Error(id)
  })
})
