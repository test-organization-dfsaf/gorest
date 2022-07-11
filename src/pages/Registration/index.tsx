import React, {
  useCallback, useEffect, useState,
} from 'react';
import {
  Formik,
  Form,
} from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import FormControl from '../../components/Form/FormControl';
import { UserListType, UserRegistrationType } from '../../types';
import { createUser, fetchUsers } from '../../api/registration';
import FormCheck from '../../components/Form/FormCheck';
import Container from '../../components/layout/Container';
import Row from '../../components/layout/Row';
import FormGroup from '../../components/Form/FormGroup';
import Alert from '../../components/Alert';
import Col from '../../components/layout/Col';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required').min(2, 'Nam is too short')
    .max(20, 'Name is too long')
    .matches(/^[a-zA-Z ]+$/, 'Name is invalid'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  gender: Yup.string().required('Gender is required'),
});

const initialValues: UserRegistrationType = {
  name: '',
  email: '',
  gender: '',
  status: 'inactive',
};

// make registration form
const Registration = (): JSX.Element => {
  const [userList, setUserList] = useState<UserListType>();
  const [errorMessage, setErrorMessage] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const getUserList = useCallback(async () => {
    if (!isLoading) return;
    await fetchUsers().then((res) => {
      setUserList(res);
    }).catch((err: any) => {
      setErrorMessage(err.message);
    }).finally(() => {
      setIsLoading(false);
    });
  }, [isLoading]);

  useEffect(() => {
    setIsLoading(true);
    if (!userList) {
      getUserList();
    }
  }, [getUserList, userList]);

  const handleSubmit = useCallback(async (values: UserRegistrationType): Promise<void> => {
    // check if values.status is array
    if (Array.isArray(values.status)) {
      const [status] = values.status;
      values.status = status;
    }
    if (values.status === '' || values.status === undefined) {
      values.status = 'inactive';
    }
    await createUser(values).then(() => {
      navigate('/success', { replace: true });
    }).catch((err: any) => setErrorMessage(err.message));
  }, [navigate]);

  const handleEmailValidation = useCallback(
    (email: string): any => (userList?.find((user) => user.email === email) && 'Email is already taken'),
    [userList],
  );

  return (
    <Container>
      <Row className="justify-center">
        <Col sm={12}>
          <h1>Registration</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            validator={():void => {}}
          >
            {({
              errors, touched, isValid,
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
                  validate={handleEmailValidation}
                  isValid={!(errors.email && touched.email)}
                  errorMessage={errors.email}
                />
                <FormGroup
                  className="gap-4 py-1"
                  isValid={!(errors.gender && touched.gender)}
                  errorMessage={errors.gender}
                >
                  <span>Gender:</span>

                  <FormCheck
                    id="male"
                    label="male"
                    name="gender"
                    type="radio"
                  />

                  <FormCheck
                    id="female"
                    label="female"
                    name="gender"
                    type="radio"
                  />
                </FormGroup>

                <Container className="py-1">
                  <Row className="gap-4">
                    <span>Status:</span>
                    <FormCheck
                      id="status"
                      label="active"
                      name="status"
                      type="checkbox"
                      isValid={!(errors.status && touched.status)}
                      errorMessage={errors.status}
                    />
                  </Row>
                </Container>

                <Button
                  className="my-4 w-full"
                  type="submit"
                  disabled={!isValid}
                >
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
          <Alert message={errorMessage} show={!!errorMessage} />
        </Col>
      </Row>
    </Container>
  );
};

export default Registration;
