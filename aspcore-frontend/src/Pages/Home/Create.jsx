import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { findCategories } from "../../api/CategoryApi";
import { createEvent } from "../../api/EventApi";

const Create = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [organizer, setOrganizer] = useState("");
  const [desc, setDesc] = useState("");

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    findCategories(setCategories);
  }, []);

  const handleSubmit = () => {
    createEvent({name, price, date, location, category, organizer, desc})
  };

  return (
    <div className="container my-5">
      <div className="d-flex align-items-center mb-5">
        <h5>Etkinlik Ekle</h5>
        <div className="ms-auto">
          <Link to="/" className="btn btn-primary">
            Geri Don
          </Link>
        </div>
      </div>
      <div className="table">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Ad
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
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
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <button className="btn btn-primary" onClick={handleSubmit}>
            Olustur
          </button>
        </div>
      </div>
    </div>
  );
};

export default Create;
