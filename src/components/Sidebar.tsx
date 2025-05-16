import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../stores/hooks';
import { fetchFilials, setSelectedFilial } from '../features/filial/filialSlice';
import { NavLink } from 'react-router-dom';
import CustomSelect from './CustomSelect';

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const { filials, selected } = useAppSelector(state => state.filial);

  useEffect(() => {
    dispatch(fetchFilials());
  }, [dispatch]);

  const handleFilialChange = (name: string) => {
    const selected = filials.find(f => f.name === name);
    if (selected) {
      dispatch(setSelectedFilial(selected));
    }
  };

  const menuItems = [
    { label: 'Компоненты', path: '/components' },
    { label: 'Полуфабрикаты', path: '/semi-finished' },
    { label: 'Товары', path: '/products' },
    { label: 'Меню', path: '/menu' },
    { label: 'Перемещения', path: '/movement' },
    { label: 'Инвентаризация', path: '/inventory' },
    { label: 'Выпуск товара', path: '/production' },
    { label: 'Списание', path: '/write-off' },
    { label: 'Накладные', path: '/documents' },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar__company-data">
        <div className="sidebar__top">
          <div className="sidebar__logo">Ф</div>
          <div className="sidebar__title">
            <div className="sidebar__company">НАЗВАНИЕ ФИРМЫ</div>
            <div className="sidebar__user">Лоскутникова В.П.</div>
          </div>
        </div>
        <div className="sidebar__section">
          <img src="/img/logo.svg" alt="Logo" />
          <span>СКЛАДСКОЙ УЧЁТ</span>
        </div>
      </div>

      <div className="sidebar__dropdown">
        <label className="sidebar__label">Филиалы</label>
        <CustomSelect
          options={filials.map(f => f.name)}
          selected={selected?.name || 'Иркутск'}
          onChange={handleFilialChange}
        />
      </div>

      <nav className="sidebar__nav">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? 'sidebar__link sidebar__link--active'
                : 'sidebar__link'
            }
          >
            - {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
