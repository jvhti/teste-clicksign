import React from "react";
import ConfirmDeletionModal from "./ConfirmDeletionModal";
import ContactModal from "./ContactModal";
import Backdrop from "../UI/Backdrop/Backdrop";

function modalManager({activeModal}) {
  let modal;

  if (activeModal === "confirmDeletion")
    modal = <ConfirmDeletionModal/>;
  else if (activeModal === "newContact")
    modal = <ContactModal/>;
  else if (activeModal === "editContact")
    modal = <ContactModal isEdition/>;

  if (modal) {
    return (
        <React.Fragment>
          {modal}
          <Backdrop/>
        </React.Fragment>
    );
  }

  return null;
}

export default modalManager;
