import { Plus, Search } from "lucide-react";
import React from "react";
import { Pagination } from "./Pagination";

export const ItemList = ({
  items,
  searchTerm,
  onSearchChange,
  currentPage,
  totalPages,
  onPageChange,
  onEdit,
  onDelete,
  onShowForm,
}) => {
  return (
    <div className="max-w-7xl mx-auto mt-10 text-white rounded-lg sm:px-6">
      <div className="flex justify-between items-center mb-9">
        <h2 className="font-bold text-2xl text-slate-800 dark:text-white">Data Karyawan</h2>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => onShowForm(true)}
            className="bg-slate-800 text-white dark:text-white dark:bg-slate-800 px-4 py-2 flex items-center font-bold gap-3 rounded-lg"
          >
            <Plus className="w-5 h-5" />
            Tambah Data
          </button>
        </div>
      </div>
      <div className="mb-6 relative">
        <Search className="absolute m-3 w-5 h-7" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full p-4 rounded-lg bg-slate-800 text-white pl-11"
          placeholder="Cari data karyawan..."
        />
      </div>

      <div className="bg-slate-800 rounded-lg">
        <ul>
          {items.map((item) => (
            <li key={item.id} className="p-4">
              <div className="flex justify-between">
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm mt-1">{item.description}</p>
                </div>
                <div className="flex space-x-3 items-center">
                  <button
                    onClick={() => onEdit(item)}
                    className="text-sm  text-indigo-500 rounded-lg font-semibold"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(item.id)}
                    className="text-sm  text-red-500 rounded-lg font-semibold"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {totalPages > 1 && (
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
      )}
    </div>
  );
};
