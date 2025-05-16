import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../stores/hooks';
import { fetchMenu, setCurrentPage, setFilters  } from '../features/menu/menuSlice';
import Filter from '../components/Filter';
import MenuTable from '../components/MenuTable';
import Pagination from '../components/Pagination';

const MenuPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, currentPage, totalPages, status, filters } = useAppSelector(state => state.menu);
  const selectedFilial = useAppSelector(state => state.filial.selected);
  const limit = 5;

  useEffect(() => {
  if (selectedFilial) {
    // Сброс фильтра активности при смене филиала
    dispatch(setFilters({ active: null }));
  }
}, [selectedFilial, dispatch]);

  useEffect(() => {
  if (selectedFilial) {
    const activeParam =
      filters.active === true ? 'active' :
      filters.active === false ? 'no_active' :
      undefined;

    dispatch(fetchMenu({
      filialId: selectedFilial.id,
      page: currentPage,
      limit,
      active: activeParam,
    }));
  }
}, [dispatch, currentPage, selectedFilial, filters.active]);

  const handlePageChange = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <div className="menu-page">
      {status === 'loading' ? (
        <p>Загрузка...</p>
      ) : (
        <>
          <div>
            <Filter />
            <MenuTable rows={items} />
          </div>
          <div>
            <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default MenuPage;
