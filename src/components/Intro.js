import { Button, Col, Container, Row } from 'react-bootstrap';

const intro = () => {
  return (
    <div className='intro'>
      <Container className='text-white d-flex justify-content-center align-items-center text-center'>
        <Row>
          <Col>
            <div className='title'>Nonton Film Gratis,</div>
            <div className='title'>Tanpa Karcis!</div>
            <div className='introButton mt-4 text-center'>
              <Button variant='dark'>Lihat Semua List</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default intro;