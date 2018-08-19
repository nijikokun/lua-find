const assert = require('assert')
const find = require('./index')

const describe = (name, tests) => {
  try {
    tests()
    console.log(`[\x1b[32mOK\x1b[0m]`, name)
  } catch (e) {
    console.log(`[\x1b[31mNOT OK\x1b[0m]`, name)
    console.log(``)
    console.log(` `, e.stack)
    console.log(``)
    process.exit(1)
  }
}

describe('String.match, plain text format', () => {
  assert(find('Hello World', 'World')[0] === 6)
  assert(find('Hello World', 'World')[1] === 11)
  assert(find('Hello World, World Hello', 'Hello', 11)[0] === 19)
})

describe('String.match, regular expressions', () => {
  assert(find('Hello', /World/)[0] === null)
  assert(find('Hello World', /World/)[0] === 6)
  assert(find('Hello World', /World/)[1] === 11)
})

describe('String.indexOf, plain text', () => {
  assert(find('Hello World', 'World', 0, false)[0] === 6)
  assert(find('Hello World', 'World', 0, false)[1] === 11)
  assert(find('Hello World, World Hello', 'Hello', 11, true)[0] === 19)
})

describe('String.indexOf, pattern literal', () => {
  assert(find('Hello World', /World/, 0, true)[0] === null)
  assert(find('Hello /World/', /World/, 0, true)[0] === 6)
  assert(find('Hello /World/', /World/, 0, true)[1] === 13)
})