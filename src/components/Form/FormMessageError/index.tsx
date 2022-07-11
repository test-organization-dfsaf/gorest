import Col from '../../layout/Col';
import Row from '../../layout/Row';

interface IFormControlProps {
  errorMessage: string;
}

const FormMessageError = ({ errorMessage }:IFormControlProps): JSX.Element => (
  <Row>
    <Col sm={12}>
      <p className="text-red-600">{errorMessage}</p>
    </Col>
  </Row>
);

export default FormMessageError;
