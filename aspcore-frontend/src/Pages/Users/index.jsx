import React from "react";
import { Link } from "react-router-dom";
import { deleteUser, findUsers } from "../../api/UserApi";
import { useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Home = () => {
  const [users, setUsers] = useState(false);

  useEffect(() => {
    findUsers(setUsers);
  }, []);

  const deleteHandle = (id) => {
    deleteUser(id);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
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
        <h5>Kullanıcı Listesi</h5>
        <div className="ms-auto">
          <Link to="/users/create" className="btn btn-primary">
            Yeni Ekle
          </Link>
        </div>
      </div>
      <div className="table">
        <thead className="table-dark">
          <tr>
            <th>Ad</th>
            <th>Email</th>
            <th>Şifre</th>
            <th>Telefon</th>
            <th>Adres</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {users ? (
            users.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                <td>{item.phoneNumber}</td>
                <td>{item.address}</td>
                <td>
                  <Link
                    to={`/users/edit/${item.id}`}
                    className="btn btn-primary me-2"
                  >
                    Düzenle
                  </Link>
                  <button
                    onClick={() => deleteHandle(item.id)}
                    className="btn btn-danger me-2"
                  >
                    Sil
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">Kullanıcı bulunamadı</td>
            </tr>
          )}
        </tbody>
      </div>
    </div>
  );
};

export default Home;
