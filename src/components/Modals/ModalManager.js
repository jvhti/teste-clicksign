import React from "react";
import ConfirmDeletionModal from "./ConfirmDeletionModal";
import ContactModal from "../../containers/Modals/ContactModal";
import Backdrop from "../UI/Backdrop/Backdrop";

function modalManager({activeModal, closeModal}) {
  let modal;

  if (activeModal === "confirmDeletion")
    modal = <ConfirmDeletionModal cancelAction={closeModal}/>;
  else if (activeModal === "newContact")
    modal = <ContactModal cancelAction={closeModal}/>;
  else if (activeModal === "editContact")
    modal = <ContactModal isEdition cancelAction={closeModal}/>;

  if (modal) {
    return (
        <React.Fragment>
          {modal}
          <Backdrop onClick={closeModal}/>
        </React.Fragment>
    );
  }

  return null;
}

export default React.memo(modalManager);
