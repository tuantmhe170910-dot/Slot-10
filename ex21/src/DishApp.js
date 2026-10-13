import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { dishes } from "./dishesData";

// Header Navigation
const Navbar = () => (
  <nav
    style={{
      backgroundColor: "#212529",
      padding: "12px 24px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <span style={{ color: "#fff", fontWeight: "bold", fontSize: "18px" }}>
      Restaurant App
    </span>
    <div style={{ display: "flex", gap: "20px" }}>
      <Link to="/" style={{ color: "#ccc", textDecoration: "none" }}>
        Home
      </Link>
      <Link to="/about" style={{ color: "#ccc", textDecoration: "none" }}>
        About
      </Link>
      <Link to="/contact" style={{ color: "#ccc", textDecoration: "none" }}>
        Contact
      </Link>
    </div>
  </nav>
);

// Danh sách món ăn hiển thị theo Grid 2 cột
const DishList = () => {
  return (
    <div style={{ maxWidth: "900px", margin: "20px auto", padding: "0 15px" }}>
      <h3 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>
        Menu Dishes
      </h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
        }}
      >
        {dishes.map((dish) => (
          <div
            key={dish.id}
            style={{
              border: "1px solid #e0e0e0",
              borderRadius: "8px",
              overflow: "hidden",
              textAlign: "center",
              backgroundColor: "#fff",
              boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
            }}
          >
            <img
              src={dish.image}
              alt={dish.name}
              style={{ width: "100%", height: "180px", objectFit: "cover" }}
            />
            <div style={{ padding: "15px" }}>
              <Link
                to={`/dishes/${dish.id}`}
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  color: "#0d6efd",
                  textDecoration: "none",
                }}
              >
                {dish.name}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Chi tiết món ăn lấy theo URL Param
const DishDetail = () => {
  const { dishId } = useParams();
  const dish = dishes.find((item) => item.id === parseInt(dishId, 10));

  if (!dish) {
    return (
      <div style={{ padding: "30px", textAlign: "center" }}>
        <h3>Món ăn không tồn tại!</h3>
        <Link to="/" style={{ color: "#0d6efd" }}>
          Quay lại Menu
        </Link>
      </div>
    );
  }

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "30px auto",
        border: "1px solid #ddd",
        borderRadius: "8px",
        overflow: "hidden",
        padding: "20px",
      }}
    >
      <img
        src={dish.image}
        alt={dish.name}
        style={{
          width: "100%",
          height: "260px",
          objectFit: "cover",
          borderRadius: "4px",
        }}
      />
      <div style={{ marginTop: "15px" }}>
        <h2 style={{ marginBottom: "10px" }}>
          {dish.name}{" "}
          {dish.label && (
            <span
              style={{
                fontSize: "13px",
                background: "#dc3545",
                color: "#fff",
                padding: "3px 8px",
                borderRadius: "4px",
              }}
            >
              {dish.label}
            </span>
          )}
        </h2>
        <p>
          <strong>Loại món:</strong> {dish.category}
        </p>
        <p>
          <strong>Giá:</strong> ${dish.price}
        </p>
        <p style={{ color: "#555", lineHeight: "1.5" }}>{dish.description}</p>
        <Link
          to="/"
          style={{
            display: "inline-block",
            marginTop: "10px",
            color: "#0d6efd",
          }}
        >
          &larr; Quay lại danh sách
        </Link>
      </div>
    </div>
  );
};

export default function DishApp() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<DishList />} />
        <Route
          path="/about"
          element={
            <div style={{ textAlign: "center", marginTop: "30px" }}>
              About Page
            </div>
          }
        />
        <Route
          path="/contact"
          element={
            <div style={{ textAlign: "center", marginTop: "30px" }}>
              Contact Page
            </div>
          }
        />
        <Route
          path="*"
          element={
            <div style={{ textAlign: "center", marginTop: "30px" }}>
              404 - Not Found
            </div>
          }
        />
      </Routes>
    </Router>
  );
}
