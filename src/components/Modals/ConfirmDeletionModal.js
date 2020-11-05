import React from 'react';
import Modal from "../UI/Modal/Modal";

const contactModal = () => {
  return (
      <Modal title="Excluir contato" confirmLabel="Excluir">
        <p>Deseja realmente excluir o contato?</p>
        <br/>
      </Modal>
  );
};

export default contactModal;
