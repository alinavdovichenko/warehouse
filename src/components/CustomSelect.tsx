import React, { useState } from 'react';

interface CustomSelectProps {
  options: string[];
  selected: string;
  onChange: (value: string) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options, selected, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="custom-select">
      <div
        className={`custom-select__selected ${isOpen ? 'custom-select__selected--open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected}
        <span className={`custom-select__arrow ${isOpen ? 'custom-select__arrow--rotated' : ''}`}>v</span>
      </div>
      {isOpen && (
        <ul className="custom-select__options">
          {options.map((option) => (
            <li
              key={option}
              className={`custom-select__option ${
                    option === selected ? 'custom-select__option--active' : ''
                    }`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
