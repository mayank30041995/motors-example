import React from 'react'
import { Formik, Field, ErrorMessage, Form } from 'formik'
import * as Yup from 'yup'

const LoginSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, 'First Name must be 3 characters at minimum')
    .required('First Name is required'),
  lastName: Yup.string()
    .min(3, 'Last Name must be 3 characters at minimum')
    .required('last Name is required'),
})

function FormFirstStep({ form, onSubmit }) {
  return (
    <Formik
      initialValues={{
        firstName: form.firstName || '',
        lastName: form.lastName || '',
      }}
      validationSchema={LoginSchema}
      onSubmit={onSubmit}
    >
      {(props) => (
        <div>
          <Form className="form">
            <div className="form-group">
              <h3>Step 1 (Form)</h3>
              <label htmlFor="firstName" className="label">
                First Name
              </label>
              <Field
                type="firstName"
                name="firstName"
                placeholder="First Name"
                autoComplete="off"
                className={`mt-2 form-control ${
                  props.touched.firstName && props.errors.firstName
                    ? 'is-invalid'
                    : ''
                }`}
              />

              <ErrorMessage
                component="div"
                name="firstName"
                className="invalid-feedback"
              />

              <label htmlFor="email" className="label">
                Last Name
              </label>
              <Field
                type="lastName"
                name="lastName"
                placeholder="Last Name"
                autoComplete="off"
                className={`mt-2 form-control ${
                  props.touched.lastName && props.errors.lastName
                    ? 'is-invalid'
                    : ''
                }`}
              />

              <ErrorMessage
                component="div"
                name="lastName"
                className="invalid-feedback"
              />
              <button
                type="submit"
                className="btn btn-primary btn-block mt-4"
                // disabled={props.isSubmitting}
              >
                Next
              </button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  )
}

export default FormFirstStep
