import React from 'react';
import {
  Container,
  ListGroup
} from 'react-bootstrap';

const Results = () => {
  return (
    <Container >
      <h2>Results List</h2>
      <ListGroup defaultActiveKey="#link1">
        <ListGroup.Item action href="#link1">
          Link 1
        </ListGroup.Item>
        <ListGroup.Item action href="#link2" disabled>
          Link 2
        </ListGroup.Item>
        <ListGroup.Item action>This one is a button</ListGroup.Item>
      </ListGroup>
    </Container>
  );
}


export default Results;
