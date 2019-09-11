import React from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const Pica = styled.div`
background-color: gray;
color: gray;
text-align: center;
margin-top: 1vh;
margin-bottom: 1vh;

  &:hover {
  background-image: url('tile.png');
  color: #373fff;
  border-radius: 5px;
  }

`

const Apply = styled.div`
background-color: gray;
height: 100vh;
padding-top: 1vh;
padding-bottom: 1vh;
`

const Ccard = (props) => {
    return (
        <Pica >{props.text}</Pica>
    )
}

const App = () => {
  return (
      <Apply>
        <Container>
          <Row>
            <Col><Ccard text={"you"} color={"pink"}/></Col>
            <Col><Ccard text={"are"} color={"brown"}/></Col>
            <Col><Ccard text={"a"} color={"chartreuse"}/></Col>          
          </Row>
          <Row>
            <Col><Ccard text={"uh"} color={"chartreuse"}/></Col>                      
            <Col><Ccard text={"may"} color={"orange"}/></Col>
            <Col><Ccard text={"zing"} color={"brown"}/></Col>            
          </Row>
          <Row>
            <Col><Ccard text={"inspiration"} color={"brown"}/></Col>            
          </Row>
          <Row>
            <Col><Ccard text={"ur amazing!!!"} color={"brown"}/></Col>            
          </Row>
          <Row>
            <Col><Ccard text={"keep it up!"} color={"yellow"}/></Col>
          </Row>
          <Row>
            <img alt="lamp" style={{width: '100%',height: 'auto',display:'block',margin:'auto'}} src="lamp.svg"/>
          </Row>
          
      </Container>
      </Apply>
  );
}

const Appalt = () => {
    return (
        <div style={{height: '100vh',backgroundColor: 'gray'}}>
        <img alt="lamp" style={{width: '50%',height: 'auto',display:'block',margin:'auto'}} src="hands.svg"/>
        </div>
    )
}
export default App;





















