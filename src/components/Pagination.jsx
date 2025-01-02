import React from "react";

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center space-x-2 mt-6 mb-12">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="disabled:opacity-50 rounded-md px-4 py-2 border border-slate-800 text-slate-800 dark:border-white dark:text-white"
      >
        Previous
      </button>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 border rounded-md  border-slate-800 text-slate-800  dark:text-white dark:border-white`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="disabled:opacity-50 rounded-md px-4 py-2 border  border-slate-800 text-slate-800 dark:border-white dark:text-white"
      >
        Next
      </button>
    </div>
  );
};
