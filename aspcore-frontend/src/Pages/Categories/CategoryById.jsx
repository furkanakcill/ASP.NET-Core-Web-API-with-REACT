import React, { useEffect, useState } from "react";
import { findCategory, findCategoryById } from "../../api/CategoryApi";
import { Link, useParams } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

const CategoryById = () => {
  const { category_id } = useParams();
  const [category, setCategory] = useState(null);

  useEffect(() => {
    findCategory(category_id, setCategory);
  }, []);

  return (
    <div className="container my-5">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="http://localhost:3000/">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to={`/categories`} className="nav-link">
                Categories
              </Link>
              <Link to={`/users`} className="nav-link">
                Users
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
      <br />
      <div className="d-flex align-items-center mb-5">
        <h5>Kategori Listesi</h5>
      </div>
      <div className="table">
        <thead className="table-dark">
          <tr>
            <th>Id</th>
            <th>Ad</th>
            <th>Tanım</th>
          </tr>
        </thead>
        <tbody>
          {category && (
            <>
              <tr>
                <td>{category.id}</td>
                <td>{category.name}</td>
                <td>{category.description}</td>
              </tr>
            </>
          )}
        </tbody>
      </div>
    </div>
  );
};

export default CategoryById;
