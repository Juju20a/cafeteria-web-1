import { useState } from 'react';
import produtosDataSet from '../datasets/Produto';
import ComprasTable from '../components/ComprasTable';
import ProdutoForm from '../components/ProdutoForm';
import { Button, Modal } from 'react-bootstrap';

const Cardapio = () => {
  let [produtos, setProdutos] = useState([...produtosDataSet]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
     
      <ComprasTable produtos={produtos}></ComprasTable>
      <ProdutoForm><Modal show={show} onHide={handleClose}>
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
      </Modal></ProdutoForm>
      </Modal>
    </>
  );
};

export default Cardapio;
