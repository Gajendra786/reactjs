import React from 'react';

function Pagination({ tasks, itemsPerPage, currentPage, handlePageChange }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(tasks.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => handlePageChange(number)}
          className={currentPage === number ? 'page-number active-page' : 'page-number'}
        >
          {number}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
