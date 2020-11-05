import React, {useEffect, useState} from "react";
import TopBar from "./components/TopBar/TopBar";
import EmptyPage from "./components/EmptyPage/EmptyPage";
import ModalManager from "./components/Modals/ModalManager";
import {getContactsList, setCallback} from './service/newContact';
import ContactTable from "./components/ContactTable/ContactTable";

function App() {
  const [activeModal, setActiveModal] = useState(null);
  const [contactId, setContactId] = useState(null);
  const [contactList, setContactList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const contactListTmp = getContactsList();
    if (contactListTmp.length !== contactList.length)
      setContactList(getContactsList());

    setCallback(setContactList);
  }, [setContactList, contactList.length]);

  const openNewContactModal = () => setActiveModal('newContact');

  return (
      <React.Fragment>
        <TopBar showCreateContact={contactList.length} openNewContactModal={openNewContactModal}
                setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>

        <ModalManager activeModal={activeModal} closeModal={() => setActiveModal(null)} contactId={contactId}/>

        {contactList.length ?
            <ContactTable contactList={contactList} setActiveModal={setActiveModal} setContactId={setContactId}/> :
            <EmptyPage openNewContactModal={openNewContactModal}/>}
      </React.Fragment>
  );
}

export default App;
