import React from 'react';
const ContactList = ({ listData, filterKey,callbackfunc }) => {
  if (listData === undefined) return;
  let renderList = [...listData];
  if (filterKey !== '') {
    renderList = listData.filter(({ name }) =>
      name.toLowerCase().includes(filterKey.toLowerCase()),
    );    
  }  
  return (
    <div>
      {' '}
      <h2>Contacts</h2>
      <ul>
        {renderList.map(({ id, name, phoneNumber }) => (
          <li key={id}>
            {name}: {phoneNumber} <button
        onClick={() => callbackfunc(id)}       
        type='button'
      >
        delete
      </button>
          </li>
        ))}
      </ul>{' '}
    </div>
  );
};

export default ContactList;
