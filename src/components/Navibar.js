import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navibar = ()=> {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">KodeGo Bootcamp</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Services</Nav.Link>
            <Nav.Link href="#pricing">Experts</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navibar;