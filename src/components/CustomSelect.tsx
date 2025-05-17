import React, { useState, useEffect, useRef } from 'react';

interface CustomSelectProps {
  options: string[];
  selected: string;
  onChange: (value: string) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options, selected, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleOptionClick = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

    useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="custom-select" ref={ref}>
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
