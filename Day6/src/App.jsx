import { useState, useEffect } from "react";
import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import "./App.css";

function App() {
  // State
  const [count, setCount] = useState(0);

  // Side Effect
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  const users = [
    {
      id: 101,
      name: "DONALD TRUMP",
      role: "PRESIDENT OF THE UNITED STATES",
      age: 78,
      city: "Washington DC",
      image: "YOUR_BASE64_IMAGE_1",
    },
    {
      id: 102,
      name: "VLADIMIR PUTIN",
      role: "THE RUSSIAN PRESIDENT",
      age: 68,
      city: "Moscow",
      image: "YOUR_BASE64_IMAGE_2",
    },
    {
      id: 103,
      name: "DEVESH VAIDYA",
      role: "STUDENT @ CCET",
      age: 20,
      city: "Chandigarh",
      image: "YOUR_BASE64_IMAGE_3",
    },
  ];

  return (
    <div className="app">
      <Header />

      {/* Counter Section */}
      <div
        style={{
          textAlign: "center",
          margin: "30px 0",
        }}
      >
        <h2>Interactive Counter</h2>

        <h1>{count}</h1>

        <button onClick={() => setCount(count - 1)}>
          -
        </button>

        <button
          onClick={() => setCount(count + 1)}
          style={{ marginLeft: "10px" }}
        >
          +
        </button>
      </div>

      {/* Profile Cards */}
      <div className="profile-grid">
        {users.map((user) => (
          <ProfileCard
            key={user.id}
            name={user.name}
            role={user.role}
            age={user.age}
            city={user.city}
            image={user.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;