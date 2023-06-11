import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };
  const filterByName = items.filter((item) => item.name.includes(search));
  const [itemFormData, setItemFormData] = useState({
    id: uuid(),
    name: "",
    category: "Produce",
  });

  const onItemFormSubmit = (e) => {
    e.preventDefault();
    setItems([...items, itemFormData]);
    setItemFormData({
      id: uuid(),
      name: "",
      category: "Produce",
    });
  };
  return (
    <div className="ShoppingList">
      <ItemForm
        onItemFormSubmit={onItemFormSubmit}
        itemFormData={itemFormData}
        setItemFormData={setItemFormData}
      />
      <Filter
        search={search}
        onSearchChange={onSearchChange}
        onCategoryChange={handleCategoryChange}
      />
      <ul className="Items">
        {search === ""
          ? itemsToDisplay.map((item) => (
              <Item key={item.id} name={item.name} category={item.category} />
            ))
          : filterByName.map((item) => (
              <Item key={item.id} name={item.name} category={item.category} />
            ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
