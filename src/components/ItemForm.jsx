import React, { useState } from "react";

export const ItemForm = ({ item, onSubmit, onClose }) => {
  const [formData, setFormData] = useState(
    item ? { title: item.title, description: item.description } : { title: "", description: "" }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="rounded-lg bg-slate-800 p-6 w-full max-w-md mx-4 sm:mx-0">
        <h2 className="text-xl font-bold mb-4 text-white">{item ? "Edit Data" : "Add Data"}</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 text-sm font-medium text-white">Title</label>
            <input
              className="w-full p-2 rounded-md bg-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="text"
              value={formData.title}
              required
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Enter title"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-white">Description</label>
            <input
              className="w-full p-2 rounded-md bg-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="text"
              value={formData.description}
              required
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Enter description"
            />
          </div>
          <div className="flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-3">
            <button
              type="button"
              onClick={() => onClose()}
              className="px-4 py-2 bg-slate-700 text-white rounded-md hover:bg-slate-600 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
            >
              {item ? "Update" : "Add"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
