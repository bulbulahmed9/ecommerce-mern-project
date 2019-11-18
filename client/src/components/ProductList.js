import React, { useEffect, Fragment } from "react";
import { connect } from 'react-redux'
import { getProduct } from '../actions/productAction'

import Product from './Product'

const ProductList = ({ getProduct, products, loading }) => {
    useEffect( () => {
        getProduct()
    },[getProduct])
    
    
    return (

        <Fragment>
        {loading ? (
          <div>loading</div>
        ) : (
          <Fragment>
            <h1 className='large text-primary'>Developers</h1>
            <p className='lead'>
              <i className='fab fa-connectdevelop' /> Browse and connect with
              developers
            </p>
            <div className='profiles'>
              {products.length > 0 ? (
                products.map(profile => (
                <div>{profile.info.name}</div>
                ))
              ) : (
                <h4>No profiles found...</h4>
              )}
            </div>
          </Fragment>
        )}
      </Fragment>
    )
};

const mapStateToProps = state => ({
    products: state.productReducer.product ,
    loading: state.productReducer.loading
})

export default connect(mapStateToProps, { getProduct })(ProductList);
