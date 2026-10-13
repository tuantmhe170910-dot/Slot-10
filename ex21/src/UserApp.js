import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { users } from "./usersData";

// Component hiển thị danh sách người dùng
const UserList = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>User List</h2>
      <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
        {users.map((user) => (
          <li key={user.id} style={{ margin: "8px 0" }}>
            <Link
              to={`/users/${user.id}`}
              style={{
                fontSize: "18px",
                color: "#1a0dab",
                textDecoration: "underline",
              }}
            >
              {user.firstName} {user.lastName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Component hiển thị chi tiết người dùng
const UserDetail = () => {
  const { id } = useParams();
  const user = users.find((u) => u.id === parseInt(id, 10));

  if (!user) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>User Not Found</h2>
        <Link to="/">Back to User List</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>
        {user.firstName} {user.lastName} : {user.age}
      </h1>
      <p>
        <Link to="/" style={{ color: "#0066cc", textDecoration: "none" }}>
          &larr; Back to list
        </Link>
      </p>
    </div>
  );
};

export default function UserApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route
          path="*"
          element={<div style={{ padding: "20px" }}>Page Not Found</div>}
        />
      </Routes>
    </Router>
  );
}
