import React from 'react';
import { MenuItem } from '../features/menu/menuSlice';

interface MenuTableProps {
  rows: MenuItem[];
}

const MenuTable: React.FC<MenuTableProps> = ({ rows }) => {
  return (
    <div className="menu-table">
      <div className="menu-table__wrapper">
        {rows.map((row) => (
          <div key={row.id} className="menu-table__row">
            <div className="menu-table__basic">
              <div className="menu-table__cell">{row.name}</div>
              <div className="menu-table__cell">{row.filial.name}</div>
              <div className="menu-table__cell">{row.tt.name}</div>
              <div className="menu-table__cell">{row.active ? 'Активно' : 'Не активно'}</div>
              <div className="menu-table__cell">{row.export.join(', ')}</div>
            </div>
            <div className="menu-table__actions">
              <button className="menu-table__btn" title="Статистика">
                <img src="/img/diagram-icon.svg" alt="Статистика" />
              </button>
              <button className="menu-table__btn" title="Редактировать">
                <img src="/img/pencil-icon.svg" alt="Редактировать" />
              </button>
              <button className="menu-table__btn" title="Удалить">
                <img src="/img/trash-icon.svg" alt="Удалить" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuTable;
