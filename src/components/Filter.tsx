import React from 'react';
import CustomSelect from './CustomSelect';

const Filter: React.FC = () => {
  return (
    <div className="filter">
      <div className="filter__field">Название меню</div>
      <div className="filter__field">Филиал</div>
      <div className="filter__field">Торговая точка</div>
      <div className="filter__select">
        <CustomSelect
          selected="Активно"
          options={['Активно', 'Не активно']}
          onChange={() => {}}
        />
      </div>
      <button className="filter__export">Экспорт</button>
    </div>
  );
};

export default Filter;
