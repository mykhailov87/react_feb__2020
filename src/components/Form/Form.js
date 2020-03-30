// Modules
import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Field, reduxForm, initialize, formValueSelector } from 'redux-form'

const formName = 'my_first_redux_form';

const selector = formValueSelector(formName);

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = 'Required'
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.age) {
    errors.age = 'Required'
  } else if (isNaN(Number(values.age))) {
    errors.age = 'Must be a number'
  } else if (Number(values.age) < 18) {
    errors.age = 'Sorry, you must be at least 18 years old'
  }
  return errors
};

const warn = values => {
  const warnings = {};
  if (values.age < 19) {
    warnings.age = 'Hmm, you seem a bit young...'
  }
  if (values.age > 100) {
    warnings.age = 'You are so old...'
  }
  return warnings
};

function Form(props) {
  const { handleSubmit } = props;
  const dispatch = useDispatch();
  const formValues = useSelector(state => selector(state, 'username', 'email'));

  const formSubmit = useCallback((formData) => {
    console.log(formData)
    // API request here
  }, []);

  const renderField = useCallback((props) => {
    const {
      input,
      label,
      type,
      meta: { touched, error, warning }
    } = props;

    return (
      <div>
        <label>{label}</label>
        <div>
          <input {...input} placeholder={label} type={type} />
          {touched && (
            (error && <span style={{ color: 'red', display: 'block' }}>{error}</span>) ||
            (warning && <span>{warning}</span>))
          }
        </div>
      </div>
    )
  }, []);

  useEffect(() => {
    dispatch(initialize(formName, {
      isDone: true,
      search: 'OLOLO',
      ololo: true
    }))
  }, [dispatch]);

  return (
    <form onSubmit={handleSubmit(formSubmit)}>
      <Field
        name="username"
        component={renderField}
        label="enter value"
        type="text"
        ololo
      />
      {formValues.username && (
        <div>Hello, {formValues.username}</div>
      )}
      <Field
        name="email"
        component={renderField}
        label="enter email"
        type="email"
      />
      <Field
        name="age"
        component={renderField}
        label="enter value"
        type="number"
      />
    </form>
  )
}

export default reduxForm({
  form: formName,
  validate,
  warn
})(Form)
