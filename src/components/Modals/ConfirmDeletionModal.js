import React from 'react';
import Modal from "../UI/Modal/Modal";

const contactModal = ({cancelAction}) => {
  return (
      <Modal title="Excluir contato" confirmLabel="Excluir" cancelAction={cancelAction}>
        <p>Deseja realmente excluir o contato?</p>
        <br/>
      </Modal>
  );
};

export default contactModal;
