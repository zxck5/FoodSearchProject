
import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import Alert from 'react-bootstrap/Alert';

export default function Test2() {
    const [bool, setBool] = useState(false);
    const [err, setErr] = useState({name : "jiwon"});
  
    var type4 = "message4";
   

    const onClick = () => {
        setErr({...err, bool : true});
        setBool(true);
        if (bool ) {
            setBool(false);
            setErr({...err, bool : false});
           
        }
    }
  

    return (
        <Container className="shadow rounder border p-4 mt-4">
            <Row className={"justify-content-md-center"}>
                <Col>
                    <Image fluid rounded src={"https://upload.wikimedia.org/wikipedia/commons/3/33/Tom_Cruise_by_Gage_Skidmore_2.jpg"} />
                    <Button onClick={onClick} className={"col-6"} variant={"primary"}>Like</Button>
                    <Button onClick={onClick} className={"col-6"} variant={"danger"}>Dislike</Button>
                    <ShowMessage bool={bool} type = "m1"/>
                </Col>
                <Col>
                    <Image fluid rounded src={"https://mblogthumb-phinf.pstatic.net/MjAxODAxMjZfMjkw/MDAxNTE2OTM5NzQ2MjQ3.CxIRe3GT6dN1oWysXnngcOOprZIuPy-hdiDpOTvpaAAg.mQfKLoxi0rbyKqTllLJxYKdkd6Pe6knKwb4Lau6i6rIg.JPEG.kkotgilhanbok/image_2510107471516939720241.jpg?type=w800"} />
                    <Button onClick={onClick} className={"col-6"} variant={"primary"}>Like</Button>
                    <Button onClick={onClick} className={"col-6"} variant={"danger"}>Dislike</Button>

                    <ShowMessage bool={bool} />
                </Col>
                <Col>
                    <Image fluid rounded src={"https://miro.medium.com/max/1002/1*HBeJL3s2ekcDh-PVHxa3KA.jpeg"} />
                    <Button onClick={onClick} className={"col-6"} variant={"primary"}>Like</Button>
                    <Button onClick={onClick} className={"col-6"} variant={"danger"}>Dislike</Button>
                    <ShowMessage bool={bool} />
                </Col>
            </Row>
            <Row>

            </Row>
            <br></br>
            <Button onClick={onClick} className={"col-12"} variant={"info"}>Try to click here please</Button>
            <ShowMessage bool={bool} err={err} type = {type4}/>
        </Container>
    )
}
const ShowMessage = (props) => {
    var alert = <div></div>;
    console.log(props.bool);
    console.log(props.err);
  
    if (props.bool && props.type === "message4") {
        alert =  <Alert dismissible variant="success"><Alert.Heading>Don't click meeeee</Alert.Heading></Alert>
    }
    return <div>{alert}</div>
}

