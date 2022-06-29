import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const ProductDetails = () => {
  const { pid } = useParams();
  const [data, setData] = useState({});

  const getSingleProduct = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${pid}`)
      .catch((err) => console.log(err.message));
    setData(response.data);
  };

  useEffect(() => {
    
    getSingleProduct();
  }, []);

  return (
    <div>
      <main className="mt-5 pt-4">
        <div className="container dark-grey-text mt-5">
          <div className="row wow fadeIn">
            <div className="col-md-6 mb-4">
              <img
                src={data.image}
                className="img-fluid" style={{ width: '400px',textAlign: 'center', margin: '0 auto',
                  display: 'block', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}
                alt={data.title}
              />
            </div>

            <div className="col-md-6 mb-4">
              <div className="p-4">

                <p className="lead"> {data.title} <br />
                  <span className="m-4">
                    <del>${data.price + 50}</del>
                  </span>
                  <span>${data.price}</span>
                </p>

                <p className="lead font-weight-bold">Description</p>

                <p>{data.description}</p>

                <form className="d-flex justify-content-center">
                  <input
                    type="number"
                    value="1"
                    aria-label="Search"
                    className="form-control"
                    style={{ width: "100px" }}
                  />
                  <button
                    className="btn btn-primary btn-md my-0 p"
                    type="submit"
                  >
                    Add to cart
                    <i className="fas fa-shopping-cart ml-1"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
