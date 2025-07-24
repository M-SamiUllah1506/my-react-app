import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  const [price, setPrice] = useState(props.amount);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => setIsEditing(true);
  const handleSaveClick = () => setIsEditing(false);
  const handleTitleChange = (event) => setTitle(event.target.value);
  const handlePriceChange = (event) => setPrice(event.target.value);

  return (
    <Card className='expense-item full-inline'>
      <div className='expense-date-inline'>
        <ExpenseDate date={props.date} />
      </div>

      {isEditing ? (
        <>
          <input
            type='text'
            value={title}
            onChange={handleTitleChange}
            className='edit-input'
            placeholder='Enter title'
          />
          <input
            type='number'
            value={price}
            onChange={handlePriceChange}
            className='edit-input'
            placeholder='Enter price'
          />
          <button onClick={handleSaveClick} className='edit-btn'>
            Save
          </button>
        </>
      ) : (
        <>
          <h2 className='expense-title'>{title}</h2>
          <div className='expense-item__price'>${price}</div>
          <button onClick={handleEditClick} className='edit-btn'>
            Edit
          </button>
        </>
      )}
    </Card>
  );
}

export default ExpenseItem;
