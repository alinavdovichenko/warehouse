import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pages = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);

      if (currentPage > 3) pages.push('...');

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) pages.push(i);

      if (currentPage < totalPages - 2) pages.push('...');

      pages.push(totalPages);
    }

    return pages;
  };

  const handleClick = (page: number | string) => {
    if (typeof page === 'number' && page !== currentPage) {
      onPageChange(page);
    }
  };

  return (
    <div className="pagination">
      <button
        className="pagination__arrow"
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
      >
        <img className="pagination__arrow--prev" src="/img/prev.svg" alt="" />
      </button>

      {getPageNumbers().map((page, index) => (
        <button
          key={index}
          className={`pagination__item ${
            page === currentPage ? 'pagination__item--active' : ''
          }`}
          onClick={() => handleClick(page)}
          disabled={typeof page === 'string'}
        >
          {page}
        </button>
      ))}

      <button
        className="pagination__arrow"
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
      >
        <img src="/img/next.svg" className="pagination__arrow--next" alt="" />
      </button>
    </div>
  );
};

export default Pagination;
