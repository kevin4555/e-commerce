import "./Category.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import PageNavbar from "../../navbar/PageNavbar";
import ProductMini from "../../ProductMini/ProductMini";
import Carousel from "react-bootstrap/Carousel";
import Newsletter from "../../Newsletter/Newsletter";
import Footer from "../../Footer/Footer";
import Loading from "../../Loading/Loading";

function Category() {
  const [products, setProducts] = useState([]);
  const [productsFromSelectedCategory, setProductsFromSelectedCategory] = useState(products);
  const [categoryTitle, setCategoryTitle] = useState("Todos nuestros productos");

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios({
          method: "get",
          url: `${process.env.REACT_APP_API_BASE_URL}/products`,
        });
        setProducts(response.data);
        setProductsFromSelectedCategory(products);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  const productsFromCategory1 = products.filter((product) => product.categoryId === 1);
  const productsFromCategory2 = products.filter((product) => product.categoryId === 2);
  const productsFromCategory3 = products.filter((product) => product.categoryId === 3);
  const productsFromCategory4 = products.filter((product) => product.categoryId === 4);
  const productsFromCategory5 = products.filter((product) => product.categoryId === 5);

  function scrollToCategory(id) {
    const elemento = document.getElementById(id);
    const posicion = elemento.getBoundingClientRect();
    window.scrollTo({
      top: posicion.top + window.pageYOffset,
      behavior: "smooth",
    });
  }

  function showProducts(arrayProducts) {
    return (
      arrayProducts && (
        <div className="row">
          {arrayProducts.map((product) => {
            return <ProductMini product={product} key={`${product.name}_${product.id}`} />;
          })}
        </div>
      )
    );
  }

  if (products[0]) {
    return (
      <>
        <PageNavbar />
        <main>
          <div className="container">
            <h3 className="fs-1 mt-4 text-center">Categorías</h3>
            <div className="row rounded border-bottom" id="categoryDisplay">
              <div
                className="col-2"
                onClick={() => {
                  setProductsFromSelectedCategory(productsFromCategory1);
                  setCategoryTitle("Pinturas");
                  scrollToCategory("products");
                }}
              >
                <img
                  src={
                    process.env.REACT_APP_API_BASE_URL + `/img/${productsFromCategory1[2].img.img1}`
                  }
                  alt=""
                  className="categories-img"
                />
                <h5 className="mt-3">Pinturas</h5>
              </div>
              <div
                className="col-2"
                onClick={() => {
                  setProductsFromSelectedCategory(productsFromCategory2);
                  setCategoryTitle("Cerámicas");
                  scrollToCategory("products");
                }}
              >
                <img
                  src={
                    process.env.REACT_APP_API_BASE_URL + `/img/${productsFromCategory2[1].img.img1}`
                  }
                  alt=""
                  className="categories-img"
                />
                <h5 className="mt-3">Cerámicas</h5>
              </div>
              <div
                className="col-2"
                onClick={() => {
                  setProductsFromSelectedCategory(productsFromCategory3);

                  setCategoryTitle("Maderas");
                  scrollToCategory("products");
                }}
              >
                <img
                  src={
                    process.env.REACT_APP_API_BASE_URL + `/img/${productsFromCategory3[0].img.img1}`
                  }
                  className="categories-img"
                  alt=""
                />
                <h5 className="mt-3">Maderas</h5>
              </div>
              <div
                className="col-2"
                onClick={() => {
                  setProductsFromSelectedCategory(productsFromCategory4);

                  setCategoryTitle("Tejidos");
                  scrollToCategory("products");
                }}
              >
                <img
                  src={
                    process.env.REACT_APP_API_BASE_URL + `/img/${productsFromCategory4[0].img.img1}`
                  }
                  className="categories-img"
                  alt=""
                />
                <h5 className="mt-3">Tejidos</h5>
              </div>
              <div
                className="col-2"
                onClick={() => {
                  setProductsFromSelectedCategory(productsFromCategory5);
                  setCategoryTitle("Decoraciones");
                  scrollToCategory("products");
                }}
              >
                <img
                  src={
                    process.env.REACT_APP_API_BASE_URL + `/img/${productsFromCategory2[3].img.img1}`
                  }
                  className="categories-img"
                  alt=""
                />
                <h5 className="mt-3">Decoraciones</h5>
              </div>
            </div>
            <div className="mt-5 mb-5 ms-2">
              <h3 className="pt-5 pb-4 d-inline fs-2" id="products">
                {categoryTitle}
              </h3>
              {/* <Link to={"/"} className="categoryLink">
                ver todos <i className="bi bi-arrow-right-short"></i>
              </Link> */}
            </div>
            {showProducts(productsFromSelectedCategory)} artículos
          </div>
        </main>
        <Newsletter />
        <Footer />
      </>
    );
  } else {
    return <Loading />;
  }
}

export default Category;
