import { useState } from "react";
import "./App.css";

function Dashboard() {
  const [sweets, setSweets] = useState([]);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const addSweet = () => {
    if (!name || !category || !price || !quantity) return;

    const newSweet = {
      id: Date.now(),
      name,
      category,
      price: Number(price),
      quantity: Number(quantity),
    };

    setSweets([...sweets, newSweet]);

    // reset form
    setName("");
    setCategory("");
    setPrice("");
    setQuantity("");
  };

  const purchaseSweet = (id) => {
    setSweets(
      sweets.map((sweet) =>
        sweet.id === id && sweet.quantity > 0
          ? { ...sweet, quantity: sweet.quantity - 1 }
          : sweet
      )
    );
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Sweet Shop Dashboard</h1>

        <h3>Add Sweet</h3>

        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />

        <button onClick={addSweet}>Add Sweet</button>

        <h3 style={{ marginTop: "20px" }}>Available Sweets</h3>

        {sweets.length === 0 && <p>No sweets added yet</p>}

        {sweets.map((sweet) => (
          <div key={sweet.id} className="sweet-card">
            <p><b>{sweet.name}</b> ({sweet.category})</p>
            <p>Price: ₹{sweet.price}</p>
            <p>Quantity: {sweet.quantity}</p>

            <button
              disabled={sweet.quantity === 0}
              onClick={() => purchaseSweet(sweet.id)}
            >
              {sweet.quantity === 0 ? "Out of Stock" : "Purchase"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
