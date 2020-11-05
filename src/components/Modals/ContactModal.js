import React from 'react';
import Modal from "../UI/Modal/Modal";
import InputWithLabel from "../UI/InputWithLabel/InputWithLabel";

const contactModal = ({isEdition}) => {
  return (
      <Modal title={(isEdition ? "Editar" : "Criar novo") + " Contato"}>
        <InputWithLabel label="Nome"/>
        <InputWithLabel label="E-mail"/>
        <InputWithLabel label="Telefone" maxWidth={128}/>
      </Modal>
  );
};

export default contactModal;
