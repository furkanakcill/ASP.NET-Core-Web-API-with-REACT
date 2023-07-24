import React, { useEffect, useState } from "react";
import { deleteEvent, findEvents } from "../../api/EventApi";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Home = () => {
  const [events, setEvents] = useState(false);

  useEffect(() => {
    findEvents(setEvents);
  }, []);

  const deleteHandle = (id) => {
    deleteEvent(id);
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
      <br></br>
      <div className="d-flex align-items-center mb-5">
        <h5>Etkinlik Listesi</h5>
        <div className="ms-auto">
          <Link to="/event/create" className="btn btn-primary">
            Yeni Ekle
          </Link>
        </div>
      </div>
      <div className="table">
        <thead className="table-dark">
          <tr>
            <th>Ad</th>
            <th>Lokasyon</th>
            <th>Tarih</th>
            <th>Kategori Id</th>
            <th>Organizatör</th>
            <th>Tanım</th>
            <th>Fiyat</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {events ? (
            events.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.location}</td>
                <td>{item.date}</td>
                <td>
                <Link
                    to={`/categories/get/${item.categoryId}`}
                    className="btn btn-success me-2"
                  >
                    {item.categoryId}
                </Link>
                </td>
                <td>{item.organizer}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td>
                  <Link
                    to={`/event/edit/${item.id}`}
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
              <td colSpan="4">Veri Yok</td>
            </tr>
          )}
        </tbody>
      </div>
    </div>
  );
};

export default Home;
