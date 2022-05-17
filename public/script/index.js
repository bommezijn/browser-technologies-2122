console.warn("Welcome to browser technologies");

const form = document.querySelector('form')
const formInputElements = document.querySelectorAll('input')
const btnSubmit = document.querySelector('#submit') || document.getElementById('submit')
const btnTestSubmit = document.querySelector('#test-submit') || document.getElementById('test-submit')
// const formData = new FormData.entries()

/**
 * @description Check if localStorage is available
 * @param {*} type 
 * @returns 
 * @source https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
 */
function storageAvailable(type) {
  var storage;
  try {
    storage = window[type];
    var x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  }
  catch (e) {
    return e instanceof DOMException && (
      // everything except Firefox
      e.code === 22 ||
      // Firefox
      e.code === 1014 ||
      // test name field too, because code might not be present
      // everything except Firefox
      e.name === 'QuotaExceededError' ||
      // Firefox
      e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
      // acknowledge QuotaExceededError only if there's something already stored
      (storage && storage.length !== 0);
  }
}

if (storageAvailable('localStorage')) {
  // Yippee! We can use localStorage awesomeness
  console.log('localStorage is available')
}
else {
  // Too bad, no localStorage for us
  console.log('localStorage is unavailable')
}

//Get item from local storage
function getLocalStorage(item) {
  const data = localStorage.getItem(item)
  if (!data) return
  return JSON.parse(data)
}


//get formdata
function getFormData() {
  let formData = null

  if ('localStorage' in window) {
    formData = getLocalStorage('formData')
  }

  return formData
}



// const test = {}
// formInputElements.addEventListener('change', () => {
//   console.log('input change')
//   formInputElements.forEach(element => {
//     test[element.id] = element.value
//   })

//   localStorage.setItem(test.studentId, JSON.stringify(test))
// })

// btnTestSubmit.addEventListener('click', () => {
//   /* What do I want to do?
//     Get content from the form
//     create localstorage item, where studentId is key and the rest is value
//   */
//   console.log('submitted')
//   console.log(formInputElements)
//   const test = {}

//   formInputElements.forEach(element => {
//     test[element.id] = element.value
//     // console.log(element.id, element.value)
//   });

//   console.log('test object', test)
//   localStorage.setItem(test.studentId, JSON.stringify(test))

//   // for (const val of formData.values()) {
//   //   console.log(val)
//   // }
//   // console.log(test)
//   // let formData = new FormData(test)
//   // formData.forEach(element => {
//   //   console.log(element)
//   // });

// })