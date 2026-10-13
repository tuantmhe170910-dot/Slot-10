import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

// Các component hiển thị nội dung từng trang
const Home = () => (
  <div style={{ textAlign: "center", marginTop: "20px" }}>Home Component</div>
);
const About = () => (
  <div style={{ textAlign: "center", marginTop: "20px" }}>About Component</div>
);
const Contact = () => (
  <div style={{ textAlign: "center", marginTop: "20px" }}>
    Contact Component
  </div>
);
const Profile = () => (
  <div style={{ textAlign: "center", marginTop: "20px" }}>
    Profile Component
  </div>
);

// Component thanh điều hướng (Navbar)
const CustomNavbar = () => {
  return (
    <Navbar color="dark" dark expand="md" className="px-3">
      {/* Sử dụng tag={Link} để kết hợp reactstrap với react-router-dom mà không bị tải lại trang */}
      <NavbarBrand tag={Link} to="/">
        Logo
      </NavbarBrand>
      <Nav className="me-auto" navbar>
        <NavItem>
          <NavLink tag={Link} to="/">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/about">
            About
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/contact">
            Contact
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/profile">
            Profile
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

// Component chính cấu hình App và Routes
const App = () => {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* Hỗ trợ optional parameter trong React Router v6:
            Dùng dấu hỏi chấm (?) ở cuối param để route nhận cả /profile và /profile/123 */}
      </Routes>
    </Router>
  );
};

export default App;
