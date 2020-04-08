import React from 'react';
import styles from './ContactList.module.css';
const ContactList = ({ listData, filterKey, callbackfunc }) => {
  if (listData === undefined) return;
  let renderList = [...listData];
  if (filterKey !== '') {
    renderList = listData.filter(({ name }) =>
      name.toLowerCase().includes(filterKey.toLowerCase()),
    );
  }
  return (
    <div className={styles.contact_field}>
      <ul className={styles.contact_list}>
        {renderList.map(({ id, name, number }) => (
          <li key={id}>
            {name}: {number}{' '}
            <button
              className={styles.button}
              onClick={() => callbackfunc(id)}
              type="button"
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
