console.warn("Welcome to browser technologies");

const form = document.querySelector('form')
const formInputElements = document.querySelectorAll('input')
const btnSubmit = document.querySelector('#submit') || document.getElementById('submit')
// const formData = new FormData.entries()


console.log(formInputElements)
// if (btnSubmit == undefined) {
//   btnSubmit = document.getElementById('submit')
// }

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

  function getLocalStorage(item) {
    const data = localStorage.getItem(item)
    if (!data) return
    return JSON.parse(data)
  }

  function getFormData() {
    let formData = null

    if ('localStorage' in window) {
      formData = getLocalStorage('formData')
    }

    return formData
  }

}
else {
  // Too bad, no localStorage for us
  console.log('localStorage is unavailable')
}