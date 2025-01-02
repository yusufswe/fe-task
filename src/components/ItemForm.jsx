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
    <div className="text-slate-900 fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="rounded-lg bg-slate-800 p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 text-white">{item ? "Edit Data" : "Add Data"}</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 text-sm font-medium text-white">Title</label>
            <input
              className="w-full p-2 rounded-md bg-slate-500 text-slate-800"
              type="text"
              value={formData.title}
              required
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-white">Description</label>
            <input
              className="w-full p-2 rounded-md bg-slate-500 text-slate-800"
              type="text"
              value={formData.description}
              required
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
          </div>
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={() => onClose()}
              className="px-4 py-2 border rounded-md text-white"
            >
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 border rounded-md text-white">
              {item ? "Update" : "Add"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
