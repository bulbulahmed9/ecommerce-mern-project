import React from 'react'
import { connect } from 'react-redux'

const Cart = () => {
    
    return (
        <div className="container">
            Cart
        </div>
    )
}

const mapStateToProps = state => ({
    cartProducts: state.cartReducer,
    products: state.productReducer
})

export default connect(mapStateToProps)(Cart)
