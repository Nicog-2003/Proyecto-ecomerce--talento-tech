import { Container, Row, Col, Image } from "react-bootstrap";

function MainBootstrap() {
  return (
    <Container className="my-4">
      <Row className='d-flex flex-column  justify-content-center  align-items-center '>
       
        <Col  xs={12}  md={8}  lg={8}>
          <h2>BIENVENIDO A GAMER WORLD </h2>
          <p>
           "Si los videojuegos son tu pasión y siempre estás buscando la próxima gran historia, en nuestra tienda vas a encontrar tu próximo mundo por descubrir."
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default MainBootstrap;