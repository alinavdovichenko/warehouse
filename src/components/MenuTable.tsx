import React from 'react';

const MenuTable: React.FC = () => {
  const rows = [
    {
      name: 'Какое меню 1',
      branch: 'Западная Москва река и лодка',
      point: 'Сушу кручу',
      status: 'Активно',
      channel: 'Яндекс',
    },
    {
      name: 'Какое меню 2',
      branch: 'Восточная Москва река и лодка',
      point: 'Сушу кручу',
      status: 'Не активно',
      channel: 'Мобильное приложение',
    },
  ];

  return (
    <div className="menu-table">
      <div className="menu-table__wrapper">
          {rows.map((row, index) => (
            <div key={index} className="menu-table__row">
                <div className="menu-table__basic">
                    <div className="menu-table__cell">{row.name}</div>
                    <div className="menu-table__cell">{row.branch}</div>
                    <div className="menu-table__cell">{row.point}</div>
                    <div className="menu-table__cell">{row.status}</div>
                    <div className="menu-table__cell">{row.channel}</div>
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
