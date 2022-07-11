import { useMemo } from 'react';
import Container from '../../layout/Container';
import Row from '../../layout/Row';
import FormMessageError from '../FormMessageError';

interface IFormGroupProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
  isValid?: boolean;
  errorMessage?: string;
}

const FormGroup = ({
  children,
  className,
  isValid,
  errorMessage,
}: IFormGroupProps): JSX.Element => {
  const messageError = useMemo(
    () => (!isValid && errorMessage ? <FormMessageError errorMessage={errorMessage} /> : <></>),
    [isValid, errorMessage],
  );

  return (
    <Container>
      <Row className={`${className} ${isValid === false && 'border-red-500'}`}>
        {children}
      </Row>
      <Row>
        {messageError}
      </Row>
    </Container>
  );
};

export default FormGroup;
