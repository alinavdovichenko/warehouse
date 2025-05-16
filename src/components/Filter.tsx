import React from 'react';
import CustomSelect from './CustomSelect';
import { useAppDispatch, useAppSelector } from '../stores/hooks';
import { setFilters } from '../features/menu/menuSlice';

const Filter: React.FC = () => {
  const dispatch = useAppDispatch();
  const active = useAppSelector(state => state.menu.filters.active);

  const handleStatusChange = (value: string) => {
    dispatch(setFilters({
      active: value === 'Активно' ? true : value === 'Не активно' ? false : null,
    }));
  };

  return (
    <div className="filter">
      <div className="filter__field">Название меню</div>
      <div className="filter__field">Филиал</div>
      <div className="filter__field">Торговая точка</div>
      <div className="filter__select">
        <CustomSelect
          selected={active === true ? 'Активно' : active === false ? 'Не активно' : 'Все'}
          options={['Все', 'Активно', 'Не активно']}
          onChange={handleStatusChange}
        />
      </div>
      <button className="filter__export">Экспорт</button>
    </div>
  );
};

export default Filter;
