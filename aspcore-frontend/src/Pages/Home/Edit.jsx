import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { findCategories } from "../../api/CategoryApi";
import { findEvent, saveEvent } from "../../api/EventApi";
import { useParams } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

const Create = () => {
  const { event_id } = useParams();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [organizer, setOrganizer] = useState("");
  const [desc, setDesc] = useState("");
  const [isStatus, setIsStatus] = useState(false);

  const [categories, setCategories] = useState([]);
  const [event, setEvent] = useState(false);

  useEffect(() => {
    findEvent(event_id, setEvent);
    findCategories(setCategories);
  }, []);

  useEffect(() => {
    if (event) {
      setName(event.name);
      setPrice(event.price);
      setDate(new Date(event.date).toISOString().slice(0, 10));
      setLocation(event.location);
      setCategory(event.categoryId);
      setOrganizer(event.organizer);
      setDesc(event.description);
      setIsStatus(true);
    }
  }, [event]);

  const handleSubmit = () => {
    saveEvent(event_id, { name, price, date, location, category, organizer, desc, isStatus });
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
        <h5>Etkinlik Düzenle</h5>
        <div className="ms-auto">
          <Link to="/" className="btn btn-primary">
            Geri Don
          </Link>
        </div>
      </div>
      {event && (
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
            <label htmlFor="price" className="form-label">
              Fiyat
            </label>
            <input
              type="text"
              className="form-control"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="date" className="form-label">
              Tarih
            </label>
            <input
              type="date"
              className="form-control"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="location" className="form-label">
              Lokasyon
            </label>
            <input
              type="text"
              className="form-control"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="category" className="form-label">
              Kategori
            </label>
            <select
              name="category"
              id="category"
              className="form-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Kategori Seçiniz</option>
              {categories &&
                categories.map((item, index) => (
                  <option key={index} value={item.id}>
                    {item.name}
                  </option>
                ))}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="organizer" className="form-label">
              Organizor
            </label>
            <input
              type="text"
              className="form-control"
              id="organizer"
              value={organizer}
              onChange={(e) => setOrganizer(e.target.value)}
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
