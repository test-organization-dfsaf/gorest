import { Field } from 'formik';
import { useMemo } from 'react';
import Container from '../../layout/Container';
import Row from '../../layout/Row';
import FormMessageError from '../FormMessageError';

// interface input check
interface IFormCheckProps {
  id: string;
  type: 'radio' | 'checkbox';
  name: string;
  label: string;
  isValid?: boolean;
  errorMessage?: string;
}

const FormCheck = ({
  id,
  type,
  name,
  label,
  isValid,
  errorMessage,
}: IFormCheckProps): JSX.Element => {
  const messageError = useMemo(
    () => (!isValid && errorMessage ? <FormMessageError errorMessage={errorMessage} /> : <></>),
    [isValid, errorMessage],
  );
  return (
    <Container>
      <Row>
        <label htmlFor={id}>
          <Field
            className={`float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none ${type === 'radio' ? 'rounded-full' : 'rounded-md'} border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-primary-900 checked:bg-primary-500 focus:outline-none`}
            id={id}
            type={type}
            name={name}
            value={label}
          />
          <span className="ml-2">{label}</span>
        </label>
      </Row>
      <Row>
        {messageError}

      </Row>
    </Container>
  );
};

export default FormCheck;
