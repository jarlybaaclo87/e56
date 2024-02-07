import React from 'react';
import { Card } from 'react-bootstrap';

const Section2 = () => {
  return (
    <div>
      <h1 className='ms-5'>Second Section</h1>
    <div className="d-flex w-100 imgSize mx-5 my-5" style={{ margin: '50px' }}>
      <Card className="fluid" style={{ width: '18rem', marginLeft: '100px' }}>
      <Card.Img variant="top" src="./images/com.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
      <Card className="" style={{ width: '18rem', marginLeft: '100px' }}>
      <Card.Img variant="top" src="./images/com.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className="" style={{ width: '18rem', marginLeft: '100px' }}>
      <Card.Img variant="top" src="./images/com.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className="" style={{ width: '18rem', marginLeft: '100px' }}>
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

export default Section2;
