import React, { useEffect, useState } from "react";
import { deleteCategory, findCategories} from "../../api/CategoryApi";
import { Link } from "react-router-dom";

const HomeCategory = () => {
  const [categories, setCategories] = useState(false);

  useEffect(() => {
    findCategories(setCategories);
  }, []);

  const deleteHandle = (id) => {
    deleteCategory(id);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <div className="container my-5">
      <div className="d-flex align-items-center mb-5">
        <h5>Kategori Listesi</h5>
        <div className="ms-auto">
          <Link to="/categories/create" className="btn btn-primary">
            Yeni Ekle
          </Link>
        </div>
      </div>
      <div className="table">
        <thead className="table-dark">
          <tr>
            <th>Ad</th>
            <th>Tanım</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {categories ? (
            categories.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>
                  <Link
                    to={`/categories/edit/${item.id}`}
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

export default HomeCategory;