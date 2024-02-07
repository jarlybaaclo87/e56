import React from 'react';
import { Card } from 'react-bootstrap';

const Section3 = () => {
  return (
  
    <div>
      <h1 className='ms-5'>ThirdSection</h1>
      <div className="d-flex w-100 imgSize px-5 mb-5">
      <Card className=" ms-4" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./images/com.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className=" ms-4" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./images/com.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
    </div>
  );
};

export default Section3;
