import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';
import { getDefaultNormalizer } from '@testing-library/dom';

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalData);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  });
  console.log(list);

  function getLocalData() {
    const localStorageList = JSON.parse(localStorage.getItem('list'));
    if (localStorageList) {
      return localStorageList;
    } else {
      return [];
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    //1- check not to be empty
    if (!name) {
      // setAlert({ show: true, msg: 'field is empty', type: 'danger' });
      showAlert(true, 'field is empty!', 'danger');
    } else if (isEditing) {
      const newList = list.map((item) => {
        if (item.id === editId) {
          item.title = name;
        }
        return item;
      });
      setList(newList);

      showAlert(true, 'Item edited successfully!', 'success');
      setIsEditing(false);
      setName('');
      setEditId(null);

      // setAlert({ show: true, msg: 'item edited', type: 'success' });
    }
    //3- if not editing
    else {
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      // setAlert({ show: true, msg: 'Item added', type: 'success' });
      showAlert(true, 'Item has been added successfuly!', 'success');
      setName('');
    }
  }

  function showAlert(show = false, msg = '', type = '') {
    setAlert({ show, msg, type });
  }

  function clearList() {
    showAlert('true', 'all items wes removed', 'danger');
    setList('');
  }

  function removeItem(title) {
    showAlert(true, 'item deleted', 'danger');
    const newList = list.filter((item) => title !== item.title);
    setList(newList);
  }

  function editItem(id) {
    const selectedElement = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditId(id);
    setName(selectedElement.title);
  }
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} showAlert={showAlert} />}
        <h3>grocery bud</h3>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='e.g. eggs'
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <button type='submit' className='submit-btn'>
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className='grocery-container'>
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className='clear-btn' onClick={clearList}>
            clear the List
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
