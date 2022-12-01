import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import LinkContainer from 'react-router-bootstrap/LinkContainer';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Container>
      <LinkContainer to={"/about"}>
        <Button>
          To About us Yo
        </Button>
      </LinkContainer>
      <Link to={"/about"}>To About Us</Link>
      <Row>
        <Col xs={12} className={"bg-success"}>
          I am the menubar
        </Col>
        <Col xs={6} className={"bg-danger"}>
          Col2
        </Col>
        <Col className={"bg-warning"}>
          Col3
        </Col>
        <Col xs={1} className={"bg-primary"}>
          Col4
        </Col>
      </Row>
      <Row>
        <Col xs={1} className={"bg-primary"}>
          Col4
        </Col>
      </Row>
      <Row>
        <Col xs={1} className={"bg-primary"}>
          Col4
        </Col>
      </Row>
      <Alert dismissible variant="danger">
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          Change this and that and try again.
        </p>
      </Alert>
      <Button variant={"success"}>Hello World!</Button>

      <Routes>
        <Route path={"/about"} element={<About/>} ></Route>
      </Routes>
    </Container>
  );
}

function About() {
  return <div>
    Hello! This is About Page
  </div>
}
export default App;