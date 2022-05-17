const fs = require('fs')

/**
 * 
 * @param {*} data xyz yet to be written
 * @todo Write it with createWriteStream so it adds to the file instead of overwriting
 * @todo write a check if userId exists, if so update, otherwise add to object
 * @see https://nodejs.org/en/knowledge/advanced/streams/how-to-use-fs-create-write-stream/
 * @returns 
 */
async function saveUser(data) {
  let stringified = JSON.stringify(data)
  const path = './public/jason.json'

  return await fs.writeFile(path, stringified, (err, result) => {
    if (err) { console.log('error at writing', err); return false }
    console.log(`user stored in json \n ${stringified}`)
    return result
  })
}

/**
 * @description Check if the file exists and return boolean based on answer.
 * @param {String} path location of the file it has to check
 */
function doesFileExist(path) {
  fs.access(path, fs.constants.F_OK, (err) => {
    if (!err) {
      console.log('file exists')
      return true
    } else {
      console.log('file does not exist')
      return false
    }
  })
}

// ----------

/* Experimenting to create a proper json file */
// const writeStream = fs.createWriteStream(path)
// request.pipe(writeStream)
// request.on()

// Check if jason exists, otherwise return error
// fs.access(path, fs.F_OK, (err) => {
//   console.error('file does not exist', err)
//   return
// })


exports.saveUser = saveUser
exports.doesFileExist = doesFileExist