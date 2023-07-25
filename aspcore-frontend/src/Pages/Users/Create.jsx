import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createUser } from "../../api/UserApi";
import { Container, Nav, Navbar } from "react-bootstrap";

const Create = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhone] = useState("");
    const [address, setAddress] = useState("");
    
    const handleSubmit = () => {
        createUser({name, email, password, phoneNumber, address})
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
                <h5>Kullanıcı Ekle</h5>
                <div className="ms-auto">
                    <Link to="/users" className="btn btn-primary">
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
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input 
                        type="email" 
                        className="form-control"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Şifre
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                        Telefon Numarası
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="phone"
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div className="mb-3" >
                    <label htmlFor="address" className="form-label">
                        Adres
                    </label>
                    <textarea
                        name="address"
                        id="address"
                        rows="10"
                        className="form-control"
                        onChange={(e) => setAddress(e.target.value)}
                    ></textarea>
                </div>
                <div className="mb-3">
                    <button onClick={handleSubmit} className="btn btn-primary">
                    Olustur 
                    </button>
            </div>
        </div>
    </div>
    );
};

export default Create;