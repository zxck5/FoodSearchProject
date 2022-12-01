import '../App.scss';
import React, { useEffect, useState } from 'react';
import { Route, Routes, Link, NavLink, useNavigate, useParams } from 'react-router-dom';
import Nicknames from './userInfo.json';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



const App = () => {

    return (
        <div>

            <Navbar bg="light" expand="lg">
                <Container>

                    <Navbar.Brand> Lab10</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav>
                            <NavLink to="/" className='nav-link'>Home</NavLink>
                            <NavLink to="/login" className='nav-link' >Login</NavLink>
                            <NavDropdown title="Nicknames" >
                                <NavDropdown.Item href='/users/johnId/John'>John</NavDropdown.Item>
                                <NavDropdown.Item href='/users/carlId/Carl'>Carl</NavDropdown.Item>
                                <NavDropdown.Item href='/users/dogId/Dog'>Dog</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href='/users/info'>view all info</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>

            </Navbar>
            <Routes>
                <Route path={'/notfound'} element={<NotFound />} />
                <Route path={'/'} element={<Home />} />
                <Route path={'/'}>
                    <Route path={'login'} element={<Login />} />
                    <Route path={'users'}>
                        <Route path={'info'} element={<InfoList />} />
                        <Route path={':id/:nickname'} element={<UserInfo />} />
                    </Route>
                </Route>
                <Route path={'*'} element={<NotFound />}></Route>
            </Routes>
        </div>
    )
}
const Home = () => {
    return (
        <Container className='text-center'>
            <h1>Home</h1>
        </Container>
    )
}
const UserInfo = () => {
    var { id, nickname } = useParams();
    var navigate = useNavigate();

    var array = Nicknames.nicknames;
    var idx = -1;
    for (var i = 0; i < array.length; i++) {
        if (array[i].id === id) {
            idx = i;
        }
    }
    useEffect(() => {
        var array = Nicknames.nicknames;
        var idx = -1;
        for (var i = 0; i < array.length; i++) {
            if (array[i].id === id) {
                idx = i;
            }
        }
        if (idx === -1) {
            navigate('/notfound');
        }
    })
    return (
        <div className='text-center'>
            <Row className='text-center'>
                <Col>
                    <Image xs="true" md={3} lg={12} fluid rounded src={array[idx].imgUrl} />
                </Col>
            </Row>
            <Row>
                <Col> id : {id}</Col>
            </Row>
            <Row>
                <Col> Nick name : {nickname}</Col>
            </Row>
            <Row>
                <Col> Real name : {array[idx].name}</Col>
            </Row>
            <Row>
                <Col> description : {array[idx].description}</Col>
            </Row>

        </div>
    )
}



const InfoList = () => {
    let infoList = [];
    infoList.push({ name: 'Joe', id: 'johnId', nickname: 'John' })
    infoList.push({ name: 'Car', id: 'carlId', nickname: 'Carl' })
    infoList.push({ name: 'Doggy', id: 'dogId', nickname: 'Dog' })
    return (
        <Container>
            {console.log("infolist")} {console.log(infoList)}
            {infoList.map((element) => { return <InfoRow element={element} /> })}
        </Container>
    )
}
const InfoRow = (props) => {

    return (
        <Row className='m-2'>
            <Col>
                name : {props.element.name} {'/'} id : {props.element.id} {'/'}nickname : {props.element.nickname}
            </Col>
            <Col>
                <Link to={"../../users/" + props.element.id + "/" + props.element.nickname}><Button>click to see profile</Button></Link>
            </Col>
            <br></br>
        </Row>
    )
}

const NotFound = () => {
    return (
        <Container className='text-center'>
            <h1>Not Found</h1>
        </Container>
    )
}

const Login = () => {
    const [info, setInfo] = useState({});


    const onSubmit = (e) => {
        e.preventDefault();
        alert("Welcome\nid : " + info.id + "\npw : " + info.pw + "\ntext : " + info.txt);
    }
    const onChange = (e) => {
        var name = e.target.name;
        var value = e.target.value;

        setInfo({ ...info, [name]: value });

    }

    return (
        <Container>

            <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>id</Form.Label>
                    <Form.Control type="text" placeholder="Your id" name='id' onChange={onChange} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>password</Form.Label>
                    <Form.Control type="password" placeholder="Your password" name="pw" onChange={onChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>write about yourself</Form.Label>
                    <Form.Control as="textarea" rows={2} name="txt" onChange={onChange} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}


export default App;