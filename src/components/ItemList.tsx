import React, { useState } from "react";

// Define the types for items
type Item = {
  id: number;
  name: string;
};

const ItemList: React.FC = () => {
  // Define the initial list of items
  const items: Item[] = [
    { id: 1, name: "Abdullah" },
    { id: 2, name: "Sazzad" },
    { id: 3, name: "Rohomot" },
  ];

  // State to hold the selected item name
  const [selectedItemName, setSelectedItemName] = useState<string | null>(null);

  // Handler for clicking an item
  const handleClick = (itemName: string) => {
    setSelectedItemName(itemName);
  };

  return (
    <div>
      <div className="item-list">
        {items.map((item) => (
          <div
            key={item.id}
            className="item"
            onClick={() => handleClick(item.name)}
          >
            {item.name}
          </div>
        ))}
      </div>

      <div className="item-details">
        {selectedItemName ? (
          <p>Selected Item: {selectedItemName}</p>
        ) : (
          <p>Select an item to see details</p>
        )}
      </div>
    </div>
  );
};

export default ItemList;
