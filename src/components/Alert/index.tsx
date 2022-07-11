import React from 'react';
import Icon from '@mdi/react';
import { mdiAlertOutline } from '@mdi/js';
import Container from '../layout/Container';
import Row from '../layout/Row';
import Col from '../layout/Col';

interface IAlertProps {
  message?: string;
  type?: 'error' | 'warning';
  show: boolean;
}

// alert with tailwind and icon
const Alert = ({ message, type, show }: IAlertProps):JSX.Element => {
  if (!type) {
    type = 'error';
  }
  if (!message) {
    return <></>;
  }

  return show ? (
    <Container
      className={`my-4 mx-auto rounded-md ${
        type ? 'bg-red-500' : ''
      }`}
    >
      <Row className="items-center justify-between p-4">
        <Col className="flex" sm={2}>
          <Icon path={mdiAlertOutline} size={1} color="white" />
        </Col>
        <Col sm={10}>
          <span className="text-sm text-white">{message}</span>
        </Col>
      </Row>
    </Container>
  ) : <></>;
};

export default Alert;
