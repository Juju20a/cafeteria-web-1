import { Container } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Container>
      <Header></Header>
      <main>
        <Outlet></Outlet>
      </main>
      <Footer>
      <ComprasTable produtos={produtos}></ComprasTable>
      <ProdutoForm>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleShow}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal></Footer>
      </ProdutoForm>
    </Container>
  );
};

export default Layout;
