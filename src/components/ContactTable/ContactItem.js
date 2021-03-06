import React from 'react';
import classes from "./ContactTable.module.scss";
import editIcon from "../../resources/img/ic-edit.svg";
import deleteIcon from "../../resources/img/ic-delete.svg";

const colors = ['#fa8d68', '#90d26c', '#68a0fa', '#fab668', '#8368fa', '#fa68b5', '#5fe2c4', '#f55a5a'];

const contactItem = ({name, email, number, deleteAction, editAction, isHighlighted}) => {
  return (
      <tr className={isHighlighted ? classes.Active : undefined}>
        <td><span className={classes.ContactIcon}
                  style={{backgroundColor: colors[('Z'.charCodeAt(0) - name.trim().toUpperCase().charCodeAt(0)) % colors.length]}}>{name.trim().charAt(0)}</span>
        </td>
        <td>{name}</td>
        <td>{email}</td>
        <td>{number}</td>
        <td>
          <button className={classes.ActionButton} onClick={editAction}><img width={16} height={16} src={editIcon}
                                                                             alt="Editar"/></button>
          <button className={classes.ActionButton} onClick={deleteAction}><img width={16} height={16} src={deleteIcon}
                                                                               alt="Excluir"/></button>
        </td>
      </tr>
  );
};

export default React.memo(contactItem);
