import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createCategory } from "../../api/CategoryApi";

const Create = () => {
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    
    const handleSubmit = () => {
        createCategory({name, desc})
    };

    return (
        <div className="container my-5">
            <div className="d-flex align-items-center mb-5">
                <h5>Kategori Ekle</h5>
                <div className="ms-auto">
                    <Link to="/categories" className="btn btn-primary">
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
                    <button onClick={handleSubmit} className="btn btn-primary">
                    Olustur 
                    </button>
            </div>
        </div>
    </div>
    );
};

export default Create;