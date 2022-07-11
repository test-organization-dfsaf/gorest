import { Form, Formik } from 'formik';
import { useCallback, useMemo, useState } from 'react';
import * as Yup from 'yup';
import Button from '../Button';
import FormControl from '../Form/FormControl';
import Col from '../layout/Col';
import Container from '../layout/Container';
import Row from '../layout/Row';
import { fetchUserById, removeUserById } from '../../api/users';
import Alert from '../Alert';

interface IUserOperation {
  operation: 'get' | 'delete';
  onChange?: () => void;
}

const initialValues = {
  value: '',
};

const validationSchema = Yup.object().shape({
  value: Yup.string().required('Value is required'),
});

// form control with button to submit operation
const UserOperation = ({ operation, onChange }: IUserOperation): JSX.Element => {
  const [errorMessage, setErrorMessage] = useState<string>();
  const [userData, setUserData] = useState<any>();

  const handleSubmit = useCallback(async (values: any): Promise<void> => {
    switch (operation) {
      case 'get':
        await fetchUserById(values.value).then((res) => setUserData(res)).catch((err: any) => {
          setErrorMessage(err.message);
        });
        break;
      case 'delete':
        removeUserById(values.value).then(() => onChange && onChange()).catch((err: any) => {
          setErrorMessage(err.message);
        });
        break;
      default:
        break;
    }
  }, [onChange, operation]);

  // row with user data
  const userDataJSON = useMemo(() => {
    if (!userData) return <></>;
    return (
      <Row>
        <Col>
          <pre>{JSON.stringify(userData, null, 2)}</pre>
        </Col>
      </Row>
    );
  }, [userData]);

  return (
    <Container>
      <Row>
        <Col sm={12}>
          <h2>{operation}</h2>
        </Col>
      </Row>
      <Row>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({
            errors, touched,
          }): JSX.Element => (
            <Form className="w-full">
              <Container>
                <Row>
                  <Col sm={8}>
                    <FormControl
                      name="value"
                      type="text"
                      placeholder="value"
                      isValid={!(errors.value && touched.value)}
                      errorMessage={errors.value}
                    />
                  </Col>
                  <Col sm={4}>
                    <Button
                      className="-ml-1 mt-1.5 w-full rounded-l-none bg-primary-500 text-white hover:translate-y-0 active:translate-y-0"
                      type="submit"
                    >
                      Send
                    </Button>
                  </Col>

                </Row>
              </Container>
            </Form>
          )}
        </Formik>
      </Row>
      <Row>
        <Col sm={12}>
          <Alert message={errorMessage} show={!!errorMessage} />
        </Col>
      </Row>
      {userDataJSON}
    </Container>
  );
};

export default UserOperation;
