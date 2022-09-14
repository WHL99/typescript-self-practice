import React, { useState } from "react";
import "./App.css";
// import Greeter from "./components/Greeter";
import ShoppingList from "./components/ShoppingList";
import ShoppingListForm from "./components/ShoppingListForm";

import Item from "./models/item";
import { v4 as getId } from "uuid";

function App() {
  const [items, setItems] = useState<Item[]>([]);
  // const items = [
  //   { id: 1, product: "lemon", quantity: 3 },
  //   { id: 2, product: "apple", quantity: 5 },
  // ];

  const addItem = (product: string, quantity: number) => {
    console.log(product);
    setItems([...items, { id: getId(), product, quantity }]);
  };

  return (
    <div className="App">
      {/* <Greeter person="Lisa" /> */}
      <ShoppingList items={items} />
      <ShoppingListForm onAddItem={addItem} />
    </div>
  );
}

export default App;
