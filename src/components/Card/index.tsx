import Col from '../layout/Col';
import Container from '../layout/Container';
import Row from '../layout/Row';

interface ICardProps {
  children: JSX.Element;
}

const Card = ({ children }: ICardProps): JSX.Element => (
  <Container className="my-2 rounded-xl border border-gray-200 p-4 shadow-md">
    <Row>
      <Col sm={12}>
        {children}
      </Col>
    </Row>
  </Container>
);

export default Card;
