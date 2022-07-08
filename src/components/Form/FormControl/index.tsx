import React from 'react';
import { Field } from 'formik';
import Container from '../../layout/Container';
import Row from '../../layout/Row';
import Col from '../../layout/Col';

interface IFormControlProps {
  name: string;
  type?: string;
  placeholder?: string;
  isValid?: boolean;
  errorMessage?: string;
}

const FormControl = ({
  name,
  type,
  placeholder,
  isValid,
  errorMessage,
}: IFormControlProps): JSX.Element => (
  <Container className="py-2">
    <Row>
      <Col sm={12}>
        <Field
          name={name}
          type={type}
          placeholder={placeholder}
          className={`w-full appearance-none rounded border-0 border-b-2 bg-gray-50 py-2 px-3 leading-tight text-gray-700 hover:bg-gray-100 focus:border-primary-500 focus:bg-gray-100 focus:outline-none ${isValid === false && 'border-red-500'}`}
        />
      </Col>
    </Row>
    <Row>
      <Col sm={12}>
        <p>{isValid === false && errorMessage}</p>
      </Col>
    </Row>
  </Container>
);

export default FormControl;
