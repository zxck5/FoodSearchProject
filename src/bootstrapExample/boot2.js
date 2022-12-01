import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Alert from 'react-bootstrap/Alert';

function App() {
  var imageURLs = [
    'https://i.guim.co.uk/img/media/684c9d087dab923db1ce4057903f03293b07deac/205_132_1915_1150/master/1915.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=14a95b5026c1567b823629ba35c40aa0'
    ,
    'https://scx2.b-cdn.net/gfx/news/hires/2018/2-dog.jpg'
    ,
    'https://iheartcats.com/wp-content/uploads/2020/11/unhappy-cat.jpg'
    ,
    'https://i.pinimg.com/736x/20/ee/16/20ee1686d0f4b15f3f506478e2a3b142.jpg'
    ,
    'https://cdn.petcarerx.com/blog/wp-content-uploads-2017-07-1-1.jpg'
    ,
    'https://images.unsplash.com/photo-1491604612772-6853927639ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nJTIwcHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&w=1000&q=80']
  return (
    <Container className="shadow rounder border p-4 mt-4">
      <Row className={"justify-content-md-center"}>
        {imageURLs.map(img => {
          return <Col xs md={6} lg={3}>
            <Image fluid rounded src={img} />
          </Col>
        })}
      </Row>
      <Row>
        <Col xs md={6} lg={3} xl={2}>
          <Button className={"col-12"} variant={"primary"}>Accept</Button>
        </Col>
        <Col xs md={6} lg={3} xl={2}>
          <Button className={"col-12"} variant={"danger"}>Decline</Button>
        </Col>
      </Row>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
      <Alert dismissible variant="success">
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          Change this and that and try again.
        </p>
      </Alert>

    </Container>
  );
}

export default App;