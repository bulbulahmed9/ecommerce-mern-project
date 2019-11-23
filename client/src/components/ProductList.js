import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { getProduct } from "../actions/productAction";
import spinner from '../img/spinner.jpg'

import uuid from "uuid";

import Product from "./Product";

const ProductList = ({ getProduct, products, loading }) => {
  useEffect(() => {
    getProduct();
  }, [getProduct]);

  return (
    <Fragment>
      {loading ? (
        <div className="spinner-box"><img className="spinner" src={spinner} alt="loading..." /></div>
      ) : (
        <Fragment>
          <div className="container">
          <h1 className="large text-primary title">Products</h1>
          <div className="row">
            {products.length > 0 ? (
              products.map((product, index) => (
                <div key={product._id} className="col-md-3">
                  <Product product={product} />
                </div>
              ))
            ) : (
              <h4>No products found...</h4>
            )}
          </div>
          </div>
        </Fragment>
      )}
      {/* <div className="product-modal">
        Hello{}
      </div> */}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  products: state.productReducer.product,
  loading: state.productReducer.loading
});

export default connect(mapStateToProps, { getProduct })(ProductList);
