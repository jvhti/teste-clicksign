import React, {useCallback, useEffect, useState} from 'react';
import Modal from "../../components/UI/Modal/Modal";
import InputWithLabel from "../../components/UI/InputWithLabel/InputWithLabel";
import {editContact, getContactsList, saveContact} from "../../service/newContact";

const ContactModal = ({isEdition, cancelAction, contactId}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cellphone, setCellphone] = useState('');

  useEffect(() => {
    if (!isEdition) return;

    const contacts = getContactsList();
    const contact = contacts[contactId];

    setName(contact.name);
    setEmail(contact.email);
    setCellphone(contact.cellphone);
  }, [contactId, isEdition]);

  const saveAction = useCallback(() => {
    if (!isEdition)
      saveContact(name, email, cellphone);
    else
      editContact(contactId, name, email, cellphone);

    cancelAction();
  }, [name, email, cellphone, cancelAction, contactId, isEdition]);

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
