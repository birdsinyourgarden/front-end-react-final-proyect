import React, { useState } from 'react';
import './Absences.css';

function Dropdown() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  }

  return (
    <div className="dropdown-container">
      <select value={selectedOption} onChange={handleOptionChange} className="dropdown">
        <option value="">Виберіть елемент</option>
        <optgroup label="Колонка 1">
          <option value="option1">Елемент 1</option>
          <option value="option2">Елемент 2</option>
          <option value="option3">Елемент 3</option>
        </optgroup>
        <optgroup label="Колонка 2">
          <option value="option4">Елемент 4</option>
          <option value="option5">Елемент 5</option>
          <option value="option6">Елемент 6</option>
        </optgroup>
      </select>
    </div>
  );
}