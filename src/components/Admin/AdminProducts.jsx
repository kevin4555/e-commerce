import React from "react";
import "../Admin/Admin.css";
import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Sidebar from "../sidebar/Sidebar";
import Button from "react-bootstrap/Button";

const AdminProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios({
          method: "get",
          url: `${process.env.REACT_APP_API_BASE_URL}/products`,
        });
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);
  return (
    <>
      <Sidebar />
      <div className="container-fluid py-5 d-flex align-item-center justify-content-center flex-column">
        <header>
          <h1 className="fs-3 fw-bold text-light text-center">Panel de Administracion</h1>
        </header>
      </div>
      <Container fluid>
        <h2>Admin Products</h2>

        {/* Cambiar segun excalidraw */}
        <div className="text-end">
          <Button variant="success">Agregar nuevo producto</Button>
        </div>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th>Image 1</th>
              <th>Image 2</th>
              <th>Stock</th>
              <th>Featured</th>
              <th>Slug</th>
              <th>Rating</th>
              <th>Category Id</th>
              <th>Edit Category</th>
              <th>Erase Category</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return (
                <tr>
                  <td>{product.id}</td>
                  <td>{product.title}</td>
                  <td>{product.description}</td>
                  <td>{product.price}</td>
                  <td>
                    {
                      <img
                        src={process.env.REACT_APP_API_BASE_URL + `/img/${product.img.img1}`}
                        alt=""
                        className="categories-img"
                      />
                    }
                  </td>
                  <td>
                    <img
                      src={process.env.REACT_APP_API_BASE_URL + `/img/${product.img.img2}`}
                      alt=""
                      className="categories-img"
                    />
                  </td>
                  <td>{product.stock}</td>
                  <td>{product.featured}</td>
                  <td>{product.slug}</td>
                  <td>{product.rating}</td>
                  <td>{product.categoryId}</td>
                  <td>
                    {" "}
                    <Button variant="warning">Editar categoria</Button>
                  </td>
                  <td>
                    {" "}
                    <Button variant="danger">Eliminar categoria</Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
      ;
    </>
  );
};

export default AdminProducts;