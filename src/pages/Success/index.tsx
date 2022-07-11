import { useCallback, useState } from 'react';
import Col from '../../components/layout/Col';
import Container from '../../components/layout/Container';
import Row from '../../components/layout/Row';
import UserOperation from '../../components/UserOperation';
import UserTable from '../../components/UserTable';

const Success = (): JSX.Element => {
  const [updateState, setUpdateState] = useState<number>(0);

  const updateUsers = useCallback(() => {
    setUpdateState(updateState + 1);
  }, [updateState]);

  return (
    <Container>
      <Row>
        <Col sm={12}>
          <UserTable title="Success!" key={updateState} />
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <UserOperation operation="get" />
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <UserOperation onChange={updateUsers} operation="delete" />
        </Col>
      </Row>
    </Container>
  );
};

export default Success;
