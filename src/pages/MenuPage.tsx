import React from 'react';
import { useState } from 'react';
import Filter from '../components/Filter';
import MenuTable from '../components/MenuTable';
import Pagination from '../components/Pagination';

const MenuPage: React.FC = () => {
  const [page, setPage] = useState(1);

  return (
    <div className="menu-page">
      <div>
        <Filter />
        <MenuTable />
      </div>
      <div>
        <Pagination currentPage={page} totalPages={10} onPageChange={setPage} />
      </div>
    </div>
  );
};

export default MenuPage;
