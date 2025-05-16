import React from 'react';

type MenuItem = {
  name: string;
  filial: { id: number; name: string };
  tt: { id: number; name: string };
  active: boolean;
  export: string[];
};

type Props = {
  rows?: MenuItem[]; // сделать опциональным и безопасным
};

const MenuTable: React.FC<Props> = ({ rows = [] }) => {
  return (
    <div className="menu-table">
      <div className="menu-table__wrapper">
        {rows.length > 0 ? (
          rows.map((row, index) => (
            <div key={index} className="menu-table__row">
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
          ))
        ) : (
          <div className="menu-table__empty">Нет данных для отображения</div>
        )}
      </div>
    </div>
  );
};

export default MenuTable;
