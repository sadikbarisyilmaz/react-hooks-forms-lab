import React, { useState } from "react";

function ItemForm({ onItemFormSubmit, itemFormData, setItemFormData }) {
  const handleTextInput = (e) => {
    setItemFormData({
      ...itemFormData,
      name: e.target.value,
    });
  };
  const handleSelectInput = (e) => {
    setItemFormData({
      ...itemFormData,
      category: e.target.value,
    });
  };
  return (
    <form onSubmit={onItemFormSubmit} className="NewItem">
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={itemFormData.name}
          onChange={handleTextInput}
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          onChange={handleSelectInput}
          value={itemFormData.category}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
