import React from 'react';
import {
  Formik,
  Form,
} from 'formik';
import * as Yup from 'yup';
import Button from '../../components/Button';
import FormControl from '../../components/Form/FormControl';
import { UserRegistrationType } from '../../types';
import { createUser } from '../../api/registration';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  gender: Yup.string().required('Gender is required'),
  status: Yup.string().required('Status is required'),
});

const initialValues: UserRegistrationType = {
  name: '',
  email: '',
  gender: '',
  status: '',
};

// make registration form
const Registration = (): JSX.Element => {
  const handleSubmit = async (values: UserRegistrationType): Promise<void> => {
    await createUser(values);
  };

  return (
    <div>
      <h1>Signup</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        validator={():void => {}}
      >
        {({
          errors, touched,
        }): JSX.Element => (
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

            <FormControl
              name="status"
              type="text"
              placeholder="Status"
              isValid={!(errors.status && touched.status)}
              errorMessage={errors.status}
            />
            <Button
              className="w-full"
              type="submit"
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Registration;
