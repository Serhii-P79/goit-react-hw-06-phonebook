import React from 'react';
// import PropTypes from 'prop-types';
import { CssForm } from 'сomponents';

import { useSelector, useDispatch } from 'react-redux';

import { setfilter } from 'redux/store';

export function Filter() {
  const dispatch = useDispatch();

  const filter = useSelector(state => state.contacts.filter);

  const handleChangeFiltr = e => dispatch(setfilter(e.currentTarget.value));

  return (
    <div>
      <CssForm.Label>
        <span>Find contacts by name</span>
        <input type="text" value={filter} onChange={handleChangeFiltr}></input>
      </CssForm.Label>
    </div>
  );
}

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   handleChangeFiltrContacts: PropTypes.func.isRequired,
// };
