import { validateData } from './validateData'
import { getDataFromForm } from './getDataFromForm'
import { handleErrors } from './handleErrors'

function addFormValidation(form, fields, fieldsValidationRules, handleData) {
  let haveValidationError = false

  form.addEventListener('submit', (e) => {
    e.preventDefault()

    const data = getDataFromForm(form, fields)

    console.log('data:', data)
    const errors = validateData(data, fieldsValidationRules)

    console.log('errors:', errors)

    if (errors.length === 0) {
      handleData(data)
      form.reset()
      haveValidationError = false
    }
    else {
      haveValidationError = true

      handleErrors(errors, form)
    }
  })

  form.addEventListener('input', () => {
    if (haveValidationError) {
      console.log('a')
      const data = getDataFromForm(form, fields)

      const errors = validateData(data, fieldsValidationRules)

      handleErrors(errors, form)
    }
  })
}

export { addFormValidation }
