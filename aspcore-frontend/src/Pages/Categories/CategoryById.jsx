import React, { useEffect, useState } from "react";
import { findCategory, findCategoryById} from "../../api/CategoryApi";
import { Link, useParams } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

const CategoryById = () => {
  const { id } = useParams();
  const [category, setCategory] = useState(null);

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const categoryData = await findCategory(id);
        setCategory(categoryData);
      } catch (error) {
        // İstek sırasında bir hata oluştuğunda buraya düşer
        // Hata işleme kodları burada yer alabilir
        console.log(error);
      }
    };

    fetchCategoryData();
  }, [id]);

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
          {category ? (
            category.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">Veri Yok</td>
            </tr>
          )}
        </tbody>
      </div>
    </div>
  );
};

export default CategoryById;