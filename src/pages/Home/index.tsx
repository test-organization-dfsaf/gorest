import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Col from '../../components/layout/Col';
import Container from '../../components/layout/Container';
import Row from '../../components/layout/Row';

const Home = (): JSX.Element => (
  <Container className="h-full w-full">
    <Row className="justify-center align-middle">
      <Col className="gap-1" sm={12}>
        <h1 className="text-center text-2xl font-bold">
          Welcome to gorest app
        </h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <Link to="/registration">
          <Button className="mt-4 w-full" type="button">Register</Button>
        </Link>
      </Col>
    </Row>
  </Container>
);

export default Home;
