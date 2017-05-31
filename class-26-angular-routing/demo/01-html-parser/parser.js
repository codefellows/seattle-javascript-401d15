'use strict'

const Tree = require('./tree')
const Promise = require('bluebird')
const fs = Promise.promisifyAll(require('fs'), {suffix: 'Prom'})

module.exports = function(filePath) {
  let tree = new Tree()

  fs.readFileProm(`${__dirname}/../data/${filePath}`)
  .then(fileData => fileData.toString().replace(/\s+/g, ''))
  .then(fileStr => fileStr.split('>'))
  .then(validHTML)
  .then(eleArray => buildTree(tree, eleArray))
  .then(console.log)
  .catch(console.error)
}


// HELPER METHODS //
function validHTML(stringArray) {
  if(!stringArray[0].match(/!DOCTYPEhtml/)) {
    return Promise.reject(new Error('File must be a valid HTML document'))
  }
  stringArray.shift()
  return stringArray
}

function isOpeningTag(str) {
  if(!str) return
  if(str.charAt(1) === '/') return false
  return true
}

function getTagName(ele) {
  if(!ele) return
  return isOpeningTag(ele) ? ele.replace('<', '') : ele.replace('</', '')
}

function buildTree(tree, elements) {
  let stack = []
  elements.forEach(ele => {
    if(isOpeningTag(ele)) {
      let val = getTagName(ele)
      let parent = getTagName(stack[stack.length - 1])
      tree.add(val, parent)
      stack.push(ele)
    } else {
      stack.pop()
    }
  })
  return tree
}



// <!DOCTYPE html>
// <html>
//   <head>
//     <title></title>
//   </head>
//   <body>
//     <p></p>
//   </body>
// </html>
//
// === Parsed into the following ===
//
// {
//   root: {
//     data: 'html',
//     type: 'element',
//     children: [
//       {
//         data: 'head',
//         type: 'element',
//         children: [
//           {
//             data: 'title'
//             type: 'element',
//           }
//         ]
//       },
//       {
//         data: 'body',
//         type: 'element',
//         children: [
//           {
//             data: 'p',
//             type: 'element',
//             children: [
//               {
//                 data: 'sometext',
//                 type: 'text'
//                 children: []
//               }
//             ]
//           }
//         ]
//       }
//     ]
//   }
// }
