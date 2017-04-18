'use strict'

try {
  let userName = 'flibbity_jibbit'
  console.log(userName)
} catch(error) {
  console.error(error.message)
}

function printName(name) {
  try {
    if(!name) throw new Error()
    console.log(`hello ${name}`)
  } catch(err) {
    console.error(err)
  }
}

printName(process.argv[2])
