console.log(`Script has been loaded`)

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

/**
 * Retrieve formdata from localStorage window
 * @returns 
 */
function getFormData() {
  let formData = null

  if ('localStorage' in window) {
    formData = getLocalStorage('formData')
  }

  return formData
}

/**
 * Get item from LocalStorage
 * @param {*} item 
 * @returns 
 */
function getLocalStorage(item) {
  const data = localStorage.getItem(item)
  if (!data) return
  return JSON.parse(data)
}

/**
 * Get the previous element from selector
 * @param {*} el 
 * @param {*} selector 
 * @returns 
 */
function getPrevSibling(el, selector) {
  let sibling = el.previousElementSibling

  while (sibling) {
    if (sibling.matches(selector)) return sibling
    sibling = sibling.previousElementSibling
  }

  return sibling
}

/**
 * Get the next element from selector
 * @param {*} el 
 * @param {*} selector 
 * @returns 
 */
function getNextSibling(el, selector) {
  let sibling = el.nextElementSibling

  while (sibling) {
    if (sibling.matches(selector)) return sibling
    sibling = sibling.nextElementSibling
  }

  return sibling
}


(function () {
  let formData = {}

  const form = document.querySelector('form')
  const formSections = form.querySelectorAll('.section')
  const formQuestions = form.querySelectorAll('.question') // Fieldset
  const formNavigation = form.querySelector('.navigation')
  const formInputs = form.querySelectorAll('input')
  const formSelects = form.querySelectorAll('select')
  const formSubmitBtn = form.querySelector('.submit')

  let activeQuestion = 1

  let progressBar
  let nextBtn
  let prevBtn

  // Check localStorage and fill form with data
  formData = getFormData('formData') || {}

  if (formData && Object.keys(formData).length !== 0) {
    formInputs.forEach((input) => {
      const elName = input.getAttribute('name')

      if (formData[elName]) {
        if (input.type === 'radio' && input.value == formData[elName]) {
          input.checked = true
        }

        if (input.type === 'checkbox' && formData[elName].includes(input.value)) {
          input.checked = true
        }

        if (input.type === 'text') {
          input.value = formData[elName]
        }
      }
    })

    formSelects.forEach((select) => {
      const elName = select.getAttribute('name')
      const options = select.options

      Array.prototype.forEach.call(options, (option, index) => {
        if (option.value == formData[elName]) {
          select.value = option.value
        }
      })
    })
  }

  createSections()
  createNavigation()
  createProgressIndicator()

  // Show one section at a time
  function createSections() {
    // Sections
    formSections.forEach((section, index) => {
      // Make first section active
      if (index > 0) section.classList.add('ishidden')
      formSections[0].classList.add('isactive')

      const sectionQuestions = section.querySelectorAll('.question')
      // Questions
      sectionQuestions.forEach((question, index) => {
        // Make first question active
        if (index > 0) question.classList.add('ishidden')
        sectionQuestions[0].classList.add('isactive')
      })
    })
  }

  function createNavigation() {
    // Navigation
    nextBtn = document.createElement('button')
    nextBtn.classList.add('button')
    nextBtn.type = 'button'
    nextBtn.innerText = 'Doorgaan'

    prevBtn = nextBtn.cloneNode()
    prevBtn.innerText = 'Terug'

    if (activeQuestion === 1) {
      prevBtn.classList.add('isinvisible')
    }

    nextBtn.addEventListener('click', navigate('next'))
    prevBtn.addEventListener('click', navigate('prev'))

    formNavigation.insertAdjacentElement('afterbegin', nextBtn)
    formNavigation.insertAdjacentElement('afterbegin', prevBtn)

    // Hide submit button if user is not on the last question
    if (activeQuestion !== formQuestions.length) {
      formSubmitBtn.classList.add('ishidden')
    }
  }

  function navigate(direction) {
    return () => {
      const currentSection = document.querySelector('.section.isactive')
      const currentQuestion = currentSection.querySelector('.question.isactive')
      const currentQuestionFields = currentQuestion.querySelectorAll('input, select')

      const prevSection = getPrevSibling(currentSection, '.section')
      const nextSection = getNextSibling(currentSection, '.section')

      const prevQuestion = getPrevSibling(currentQuestion, '.question')
      const nextQuestion = getNextSibling(currentQuestion, '.question')

      if (direction === 'next') {
        // Not the last question, validating current question before progressing
        if (nextQuestion || nextSection) {
          let fieldsValid = []

          const errorMsg = currentQuestion.querySelector('.error-message') || document.createElement('span')

          // Validate current question
          currentQuestionFields.forEach((field, index) => {
            let fieldValidity

            if (field.type === 'checkbox') {
              fieldValidity = field.checked
            } else {
              fieldValidity = field.checkValidity()
            }

            fieldsValid = [...fieldsValid, fieldValidity]

            // Field is not valid, show error
            if (!fieldValidity) {
              field.classList.add('has-error')
            } else {
              field.classList.remove('has-error')
            }
          })

          const isValid = (el) => el === true

          // Question is invalid
          if (fieldsValid.some(isValid)) {
            errorMsg.innerText = ''
          } else {
            errorMsg.classList.add('error-message')
            errorMsg.innerText = currentQuestion.dataset.error
            currentQuestion.insertAdjacentElement('beforeend', errorMsg)
            return
          }

          updateActiveQuestion(activeQuestion + 1)
        }

        // Is not last question
        if (nextQuestion) {
          currentQuestion.classList.add('ishidden')
          currentQuestion.classList.remove('isactive')
          nextQuestion.classList.remove('ishidden')
          nextQuestion.classList.add('isactive')
        }
        else if (nextSection) {
          const firstQuestion = nextSection.querySelector('.question')
          firstQuestion.classList.remove('ishidden')
          firstQuestion.classList.add('isactive')

          currentSection.classList.add('ishidden')
          currentSection.classList.remove('isactive')

          nextSection.classList.remove('ishidden')
          nextSection.classList.add('isactive')
        }
      }

      else if (direction === 'prev') {
        if (prevQuestion || prevSection) {
          updateActiveQuestion(activeQuestion - 1)
        }

        // Is not last question
        if (prevQuestion) {
          currentQuestion.classList.add('ishidden')
          currentQuestion.classList.remove('isactive')
          prevQuestion.classList.remove('ishidden')
          prevQuestion.classList.add('isactive')
        }
        else if (prevSection) {
          currentSection.classList.add('ishidden')
          currentSection.classList.remove('isactive')

          prevSection.classList.remove('ishidden')
          prevSection.classList.add('isactive')
        }
      }

      if (activeQuestion === 1) {
        prevBtn.classList.add('isinvisible')
      } else {
        prevBtn.classList.remove('isinvisible')
      }

      if (activeQuestion === formQuestions.length) {
        nextBtn.classList.add('ishidden')
        formSubmitBtn.classList.remove('ishidden')
      } else {
        nextBtn.classList.remove('ishidden')
        formSubmitBtn.classList.add('ishidden')
      }
    }
  }

  // Progress indicator
  function createProgressIndicator() {
    // Create progress bar
    progressBar = document.createElement('div')
    progressBar.classList.add('progress-bar')

    updateProgressIndicator()

    document.body.insertAdjacentElement('afterbegin', progressBar)

    // Set active question
    form.dataset.activeQuestion = activeQuestion
  }

  // Set correct width progress bar
  function updateProgressIndicator() {
    form.dataset.activeQuestion = activeQuestion
    progressBar.style.transform = `scaleX(${activeQuestion / formQuestions.length})`
  }

  function updateActiveQuestion(value) {
    activeQuestion = value
    updateProgressIndicator()
  }

  // Update form fields on input
  formInputs.forEach((input) => {
    input.addEventListener('input', updateInput)
  })

  formSelects.forEach((select) => {
    select.addEventListener('input', updateInput)
  })

  form.addEventListener('submit', handleFormSubmit)

  function updateInput(e) {
    const elName = this.getAttribute('name')
    const elValue = this.value

    if (this.type === 'checkbox') {
      const checkboxes = form.querySelectorAll(`input[name=${elName}]`)
      let checkboxesValues = []

      checkboxes.forEach((checkbox, index) => {
        if (checkbox.checked) {
          checkboxesValues[index] = checkbox.value
        }
      })

      formData[elName] = checkboxesValues
    } else {
      formData[elName] = elValue
    }

    if ('localStorage' in window) {
      localStorage.setItem('formData', JSON.stringify(formData))
    }
  }

  function handleFormSubmit(e) {
    e.preventDefault()
    alert('Form submitted')
  }

})()