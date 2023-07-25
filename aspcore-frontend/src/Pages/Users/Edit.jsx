import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { findUser, saveUser } from "../../api/UserApi";

const Edit = () => {
    const { user_id } = useParams();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const [user, setUser] = useState(false);

    useEffect(() => {
        findUser(user_id, setUser);
    }, []);

    useEffect(() => {
        if (user) {
            setName(user.name);
            setEmail(user.email);
            setPassword(user.password);
            setPhone(user.phoneNumber);
            setAddress(user.address);
        }
    }, [user]);

    const handleSubmit = () => {
        saveUser(user_id, { name, email, password, phoneNumber, address });
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
                <h5>Kullanıcı Düzenle</h5>
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
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="phoneNumber" className="form-label">
                        Phone Number
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">
                        Address
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleSubmit}
                >
                    Kaydet
                </button>
            </div>
        </div>
    );
};

export default Edit;
