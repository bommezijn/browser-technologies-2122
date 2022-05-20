console.log(`Script has been loaded`);

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
    var x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

if (storageAvailable("localStorage")) {
  // Yippee! We can use localStorage awesomeness
  console.log("localStorage is available");
} else {
  // Too bad, no localStorage for us
  console.log("localStorage is unavailable");
}

/**
 * Retrieve formdata from localStorage window
 * @returns
 */
function retrieveFormData() {
  let formData = null;

  if ("localStorage" in window) {
    formData = retrieveLocalStorage("formData");
  }

  return formData;
}

/**
 * Get item from LocalStorage
 * @param {*} item
 * @returns
 */
function retrieveLocalStorage(item) {
  const data = localStorage.getItem(item);
  if (!data) return;
  return JSON.parse(data);
}

/**
 * Get the previous element from selector
 * @param {*} el
 * @param {*} selector
 * @returns
 */
function getPrevSibling(el, selector) {
  let sibling = el.previousElementSibling;

  while (sibling) {
    if (sibling.matches(selector)) return sibling;
    sibling = sibling.previousElementSibling;
  }

  return sibling;
}

/**
 * Get the next element from selector
 * @param {*} el
 * @param {*} selector
 * @returns
 */
function getNextSibling(el, selector) {
  let sibling = el.nextElementSibling;

  while (sibling) {
    if (sibling.matches(selector)) return sibling;
    sibling = sibling.nextElementSibling;
  }

  return sibling;
}

(function () {
  // let formData = {}

  const form = document.querySelector("form");
  const formSections = form.querySelectorAll(".section");
  const formQuestions = form.querySelectorAll(".question"); // Fieldset
  const formNavigation = form.querySelector(".navigation");
  const formInputs = form.querySelectorAll("input");
  const formSelects = form.querySelectorAll("select");
  const formSubmitBtn = form.querySelector(".submit");

  let AQ = 1;

  let progressBar, nextBtn, prevBtn;

  // Check localStorage and fill form with data
  let formData = retrieveFormData("formData") || {};

  if (formData && Object.keys(formData).length !== 0) {
    formInputs.forEach(function (input) {
      const elName = input.getAttribute("name");

      if (formData[elName]) {
        if (input.type === "radio" && input.value == formData[elName]) {
          input.checked = true;
        }

        if (
          input.type === "checkbox" &&
          formData[elName].includes(input.value)
        ) {
          input.checked = true;
        }

        if (input.type === "text") {
          input.value = formData[elName];
        }
      }
    });

    formSelects.forEach(function (select) {
      const elName = select.getAttribute("name");
      const options = select.options;

      Array.prototype.forEach.call(options, function (option, index) {
        if (option.value == formData[elName]) {
          select.value = option.value;
        }
      });
    });
  }

  createSections();
  createNavigation();
  createProgressIndicator();

  // Show one section at a time
  /**
   * @description function creates section from each section in form and hides the ones that aren't currently active
   */
  function createSections() {
    // Sections
    formSections.forEach(function (section, index) {
      // Make first section active
      if (index > 0) section.classList.add("ishidden");
      formSections[0].classList.add("isactive");

      const sectionQuestions = section.querySelectorAll(".question");
      // Questions
      sectionQuestions.forEach(function (question, index) {
        // Make first question active
        if (index > 0) question.classList.add("ishidden");
        sectionQuestions[0].classList.add("isactive");
      });
    });
  }

  function createNavigation() {
    // Navigation
    nextBtn = document.createElement("button");
    nextBtn.classList.add("button");
    nextBtn.type = "button";
    nextBtn.innerText = "Doorgaan";

    prevBtn = nextBtn.cloneNode();
    prevBtn.innerText = "Terug";

    if (AQ === 1) {
      prevBtn.classList.add("isinvisible");
    }

    nextBtn.addEventListener("click", navigate("next"));
    prevBtn.addEventListener("click", navigate("prev"));

    formNavigation.insertAdjacentElement("afterbegin", nextBtn);
    formNavigation.insertAdjacentElement("afterbegin", prevBtn);

    // Hide submit button if user is not on the last question
    if (AQ !== formQuestions.length) {
      formSubmitBtn.classList.add("ishidden");
    }
  }

  function navigate(direction) {
    return function () {
      const currentSection = document.querySelector(".section.isactive");
      const currentQuestion =
        currentSection.querySelector(".question.isactive");
      const currentQuestionFields =
        currentQuestion.querySelectorAll("input, select");

      const prevSection = getPrevSibling(currentSection, ".section");
      const nextSection = getNextSibling(currentSection, ".section");

      const prevQuestion = getPrevSibling(currentQuestion, ".question");
      const nextQuestion = getNextSibling(currentQuestion, ".question");

      if (direction === "next") {
        // Not the last question, validating current question before progressing
        if (nextQuestion || nextSection) {
          let fieldsValid = [];

          const errorMsg =
            currentQuestion.querySelector(".error-message") ||
            document.createElement("span");

          // Validate current question
          currentQuestionFields.forEach(function (field, index) {
            let fieldValidity;
            if (field.type === "checkbox") {
              fieldValidity = field.checked;
            } else {
              fieldValidity = field.checkValidity();
            }

            fieldsValid = [...fieldsValid, fieldValidity];

            // Field is not valid, show error
            if (!fieldValidity) {
              field.classList.add("has-error");
            } else {
              field.classList.remove("has-error");
            }
          });

          /**
           * @description helper function check if element is true, otherwise return false
           * @todo make it work, right now it always goes to true
           * @todo Currently written if the question is valid show no error otherwise show error message from data-error
           * @param {*} el
           */
          const isValid = (el) => el === true;
          console.log(isValid);

          // Question is
          // If any of fieldsValid returns true, return true.
          if (fieldsValid.some(isValid)) {
            errorMsg.innerText = "";
          } else {
            errorMsg.classList.add("error-message");
            errorMsg.innerText = currentQuestion.dataset.error;
            currentQuestion.insertAdjacentElement("beforeend", errorMsg);
            return;
          }

          updateActiveQuestion(AQ + 1);
        }

        // Is not last question
        if (nextQuestion) {
          currentQuestion.classList.add("ishidden");
          currentQuestion.classList.remove("isactive");
          nextQuestion.classList.remove("ishidden");
          nextQuestion.classList.add("isactive");
        } else if (nextSection) {
          const firstQuestion = nextSection.querySelector(".question");
          firstQuestion.classList.remove("ishidden");
          firstQuestion.classList.add("isactive");

          currentSection.classList.add("ishidden");
          currentSection.classList.remove("isactive");

          nextSection.classList.remove("ishidden");
          nextSection.classList.add("isactive");
        }
      } else if (direction === "prev") {
        if (prevQuestion || prevSection) {
          updateActiveQuestion(AQ - 1);
        }

        // Is not last question
        if (prevQuestion) {
          currentQuestion.classList.add("ishidden");
          currentQuestion.classList.remove("isactive");
          prevQuestion.classList.remove("ishidden");
          prevQuestion.classList.add("isactive");
        } else if (prevSection) {
          currentSection.classList.add("ishidden");
          currentSection.classList.remove("isactive");

          prevSection.classList.remove("ishidden");
          prevSection.classList.add("isactive");
        }
      }

      if (AQ === 1) {
        prevBtn.classList.add("isinvisible");
      } else {
        prevBtn.classList.remove("isinvisible");
      }

      if (AQ === formQuestions.length) {
        nextBtn.classList.add("ishidden");
        formSubmitBtn.classList.remove("ishidden");
      } else {
        nextBtn.classList.remove("ishidden");
        formSubmitBtn.classList.add("ishidden");
      }
    };
  }

  // Progress indicator
  function createProgressIndicator() {
    // Create progress bar
    progressBar = document.createElement("div");
    progressBar.classList.add("progress-bar");

    updateProgressIndicator();

    document.body.insertAdjacentElement("afterbegin", progressBar);

    // Set active question
    form.dataset.activeQuestion = AQ;
  }

  // Set correct width progress bar
  function updateProgressIndicator() {
    form.dataset.activeQuestion = AQ;
    progressBar.style.transform = `scaleX(${AQ / formQuestions.length})`;
  }

  function updateActiveQuestion(value) {
    AQ = value;
    updateProgressIndicator();
  }

  // Update form fields on input
  formInputs.forEach((input) => {
    input.addEventListener("input", updateInput);
  });

  formSelects.forEach((select) => {
    select.addEventListener("input", updateInput);
  });

  form.addEventListener("submit", handleFormSubmit);

  function updateInput(e) {
    const elName = this.getAttribute("name");
    const elValue = this.value;

    if (this.type === "checkbox") {
      const checkboxes = form.querySelectorAll(`input[name=${elName}]`);
      let checkboxesValues = [];

      checkboxes.forEach((checkbox, index) => {
        if (checkbox.checked) {
          checkboxesValues[index] = checkbox.value;
        }
      });

      formData[elName] = checkboxesValues;
    } else {
      formData[elName] = elValue;
    }

    if ("localStorage" in window) {
      localStorage.setItem("formData", JSON.stringify(formData));
    }
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    alert("Form submitted");
  }
})();
