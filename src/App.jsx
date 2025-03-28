import { useState, useEffect } from "react";
import ItemList from "./components/ItemList";

const API_URI = `https://${import.meta.env.VITE_API_URI}/doors`;

function App() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await fetch(API_URI);
      const data = await response.json();
      setItems(data);
    } catch (err) {
      setError("Failed to fetch items");
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${API_URI}/${id}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        setItems(items.filter(item => item.id !== id));
      }
    } catch (err) {
      setError("Failed to delete item");
      console.error(err);
    }
  };

  if (error) return <div>Error: {error}</div>;

  return <ItemList items={items} onDelete={handleDelete} />;
}

export default App;
