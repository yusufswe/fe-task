import React, { useEffect, useState } from "react";
import { ItemList } from "../components/ItemList";
import { useSearchParams } from "react-router-dom";
import { getStoredItems, setStoredItems } from "../utils/storage";
import { ITEMS_PER_PAGE } from "../utils/constants";
import { ItemForm } from "../components/ItemForm";

export default function Dashboard() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState(searchParams.get("search") || "");
  const [currentPage, setCurrentPage] = useState(Number(searchParams.get("page")) || 1);
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    setItems(getStoredItems());
  }, []);

  useEffect(() => {
    const params = {};
    if (searchTerm) params.search = searchTerm;
    if (currentPage > 1) params.page = currentPage.toString();
    setSearchParams(params);
  }, [searchTerm, currentPage, setSearchParams]);

  const filteredItems = items.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);

  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleSubmit = (formData) => {
    if (editingItem) {
      const updatedItems = items.map((item) =>
        item.id === editingItem.id ? { ...item, ...formData } : item
      );
      setItems(updatedItems);
      setStoredItems(updatedItems);
      setEditingItem(null);
    } else {
      const addItem = {
        id: crypto.randomUUID(),
        ...formData,
      };
      const updatedItems = [...items, addItem];
      setItems(updatedItems);
      setStoredItems(updatedItems);
    }
    setShowForm(false);
  };

  const handleDelete = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
    setStoredItems(updatedItems);
  };

  return (
    <div>
      <ItemList
        items={paginatedItems}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        onEdit={(item) => {
          setEditingItem(item);
          setShowForm(true);
        }}
        onShowForm={setShowForm}
        onDelete={handleDelete}
      />

      {showForm && (
        <ItemForm
          item={editingItem}
          onSubmit={handleSubmit}
          onClose={() => {
            setShowForm(false);
            setEditingItem(null);
          }}
        />
      )}
    </div>
  );
}
