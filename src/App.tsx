import React from 'react';
import './App.scss';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Container from './components/layout/Container';
import Row from './components/layout/Row';
import Col from './components/layout/Col';
import Home from './pages/Home';
import Registration from './pages/Registration';
import Success from './pages/Success';

const App = (): JSX.Element => (
  <Container className="mx-auto flex min-h-screen bg-white">
    <Row className="my-auto h-full w-screen items-stretch justify-center px-4 align-middle">
      <Col sm={4}>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        </HashRouter>
      </Col>
    </Row>
  </Container>
);

export default App;
