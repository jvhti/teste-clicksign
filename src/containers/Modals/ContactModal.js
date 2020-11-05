import React, {useCallback, useState} from 'react';
import Modal from "../../components/UI/Modal/Modal";
import InputWithLabel from "../../components/UI/InputWithLabel/InputWithLabel";
import {saveContact} from "../../service/newContact";

const ContactModal = ({isEdition, cancelAction}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cellphone, setCellphone] = useState('');

  const saveAction = useCallback(() => {
    saveContact(name, email, cellphone);
    cancelAction();
  }, [name, email, cellphone, cancelAction]);

  return (
      <Modal title={(isEdition ? "Editar" : "Criar novo") + " Contato"} confirmAction={saveAction}
             cancelAction={cancelAction}>
        <InputWithLabel label="Nome" value={name} onChange={(e) => {
          setName(e.target.value);
        }}/>
        <InputWithLabel label="E-mail" value={email} onChange={(e) => {
          setEmail(e.target.value);
        }}/>
        <InputWithLabel label="Telefone" maxWidth={128} value={cellphone} onChange={(e) => {
          setCellphone(e.target.value);
        }}/>
      </Modal>
  );
};

export default ContactModal;
