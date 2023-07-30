import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const RequiredAuth = ({children}) => {


    const navigate = useNavigate();

    const {logedin} = useSelector((state)=>state.Books)

  return (logedin?children:
    <>
    <Container>
    <Row>
        <Col xs={{span:8,offset:2}}>
            <div  className='mt-5 text-center'>
                <h1>Oops!</h1>
                <p>Sorry, you must log in first</p>
                <Button variant="primary" onClick={()=>navigate("/",{replace:true})} >Go to login</Button>
            </div>
        </Col>
    </Row>
  </Container>
    </>
  
  );
}

export default RequiredAuth;
