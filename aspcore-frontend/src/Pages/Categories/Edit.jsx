import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { findCategories, findCategory, saveCategory } from "../../api/CategoryApi";
import { useParams } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

const Create = () => {
  const { category_id } = useParams();

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const [category, setCategory] = useState(false);

  useEffect(() => {
    findCategory(category_id, setCategory);
  }, []);

  useEffect(() => {
    if (category) {
      setName(category.name);
      setDesc(category.description);
    }
  }, [category]);

  const handleSubmit = () => {
    saveCategory(category_id, { name, desc });
  };

  return (
    <div className="container my-5">
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="http://localhost:3000/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link 
            to={`/categories`}
            className="nav-link" 
            >
              Categories
            </Link>
            <Link 
            to={`/users`}
            className="nav-link"
            >
              Users
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <br /><br />
      <div className="d-flex align-items-center mb-5">
        <h5>Kategori Düzenle</h5>
        <div className="ms-auto">
          <Link to="/categories" className="btn btn-primary">
            Geri Don
          </Link>
        </div>
      </div>
      {category && (
        <div className="">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Ad
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="desc" className="form-label">
              Aciklama
            </label>
            <textarea
              name="desc"
              id="desc"
              rows="10"
              className="form-control"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
          </div>
          <div className="mb-3">
            <button className="btn btn-primary" onClick={handleSubmit}>
              Kaydet
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Create;
