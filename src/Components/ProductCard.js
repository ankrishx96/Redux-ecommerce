import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Icon } from "react-icons-kit";

import { shoppingCart } from "react-icons-kit/fa/shoppingCart";

export const ProductCard = () => {
  const products = useSelector((state) => state.prod.products);

  const renderproducts = products.map((data) => {
      const { id, title, image, price, category } = data;
      return (
        <div className='cardanim col-sm-3' style={{ marginBottom: "30px" }}>
          <div className='card h-100'>
            <Link to={`/product/${id}`}>
              <div className='main-img'>
                <img src={image} alt={title} className='card-img-top img' />
              </div>
            </Link>

            <div className='card-body'>
              <Link to={`/product/${id}`}>
                <div className='text-center'>
                  <h5 className='card-title'>{title}</h5>
                  <p className='text-muted mb-4'>{category}</p>
                </div>
                <div>
                  <div className='d-flex justify-content-between'>
                    <span>Price</span>
                    <span>${price}</span>
                  </div>
                </div>
              </Link>
              <div className='d-flex justify-content-center flex-column total font-weight-bold mt-4'>
                <button
                  type='button'
                  class='btn btn-outline-primary btn-rounded'
                  data-mdb-ripple-color='dark'>
                  <Icon icon={shoppingCart} /> ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    });
  return (
    <div>
      <section style={{ backgroundColor: "#eee" }}>
        <div className='container py-5'>
          <div className='row'>{renderproducts}</div>
        </div>
      </section>
    </div>
  );
};
