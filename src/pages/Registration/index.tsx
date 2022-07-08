import React from 'react';
import {
  Formik,
  Form,
} from 'formik';
import * as Yup from 'yup';
import Button from '../../components/Button';
import FormControl from '../../components/Form/FormControl';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  gender: Yup.string().required('Gender is required'),
  status: Yup.string().required('Status is required'),
});

const initialValues = {
  name: '',
  email: '',
  gender: '',
  status: '',
};

type FormValuesType = typeof initialValues;

// make registration form
const Registration = (): JSX.Element => (
  <div>
    <h1>Signup</h1>

    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values: FormValuesType): void => {
        // same shape as initial values
        console.log(values);
      }}
      validator={():void => {}}
    >
      {({ errors, touched }): JSX.Element => (
        <Form>
          <FormControl
            name="name"
            type="text"
            placeholder="Name"
            isValid={!(errors.name && touched.name)}
            errorMessage={errors.name}
          />

          <FormControl
            name="email"
            type="email"
            placeholder="Email"
            isValid={!(errors.email && touched.email)}
            errorMessage={errors.email}
          />

          <FormControl
            name="gender"
            type="text"
            placeholder="Gender"
            isValid={!(errors.gender && touched.gender)}
            errorMessage={errors.gender}
          />
          <Button className="w-full" type="submit">Submit</Button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Registration;
