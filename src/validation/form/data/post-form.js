export const fields = [
  {
    inputName: 'name',
    type: 'text',
  },
  {
    inputName: 'email',
    type: 'text',
  },
  {
    inputName: 'phone',
    type: 'text',
  },

]

export const fieldsValidationRules = [
  {
    inputName: 'name',
    rules: [
      {
        ruleName: 'required',
        SpecificErrorMessage: 'i said name is a required field',
      },
      {
        ruleName: 'minLength',
        value: 3,
        SpecificErrorMessage: 'length of title  should be at least {value} characters',

      },
    ],
  },

  {
    inputName: 'email',
    rules: [{
      ruleName: 'required',
    },
    {
      ruleName: 'email',
    }],
  },
  {
    inputName: 'phone',
    rules: [{
      ruleName: 'required',
    },
    {
      ruleName: 'phone',
    }],
  },

]
