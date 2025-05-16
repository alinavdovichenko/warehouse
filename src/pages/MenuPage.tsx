import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../stores/hooks';
import { fetchMenu, setCurrentPage } from '../features/menu/menuSlice';
import Filter from '../components/Filter';
import MenuTable from '../components/MenuTable';
import Pagination from '../components/Pagination';

const MenuPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, currentPage, totalPages, status } = useAppSelector(state => state.menu);
  const selectedFilial = useAppSelector(state => state.filial.selected);
  const limit = 5;

  useEffect(() => {
    if (selectedFilial) {
      dispatch(fetchMenu({ filialId: selectedFilial.id, page: currentPage, limit }));
    }
  }, [dispatch, currentPage, selectedFilial]);

  const handlePageChange = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <div className="menu-page">
      {status === 'loading' ? (
        <p>Загрузка...</p>
      ) : (
        <>
          <Filter />
          <MenuTable rows={items} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};

export default MenuPage;
