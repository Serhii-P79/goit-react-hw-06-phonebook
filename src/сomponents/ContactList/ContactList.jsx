import React from 'react';
// import PropTypes from 'prop-types';
import { CssForm, CssContactList, ContactItem } from 'сomponents';

import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/store';

export function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const getFilteringContacts = () => {
    const normolizeFiltr = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normolizeFiltr)
    );
  };

  return (
    <CssContactList.ContactList>
      {getFilteringContacts().map(({ id, name, number }) => {
        return (
          <ContactItem key={id} name={name} number={number}>
            <CssForm.Button
              type="button"
              name="del"
              onClick={e => {
                dispatch(deleteContact(id));
              }}
            >
              Delete
            </CssForm.Button>
          </ContactItem>
          // <CssContactList.Contact key={id}>
          //   <CssContactList.Name>{name}:</CssContactList.Name> tel:{' '}
          //   <CssContactList.Number>{number}</CssContactList.Number>
          //   <CssForm.Button
          //     type="button"
          //     name="del"
          //     onClick={e => onDelete(e, id)}
          //   >
          //     Delete
          //   </CssForm.Button>
          // </CssContactList.Contact>
        );
      })}
    </CssContactList.ContactList>
  );
}

// ContactList.propTypes = {
//   contact: PropTypes.arrayOf(PropTypes.object).isRequired,
//   onDelete: PropTypes.func.isRequired,
// };
