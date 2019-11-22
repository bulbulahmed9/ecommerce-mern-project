import { SEE_DETAILS } from './types'


export const seeDetails = (products, id) => dispatch => {

    const detailsProduct = products.find(item => item._id === id)
    dispatch({
        type: SEE_DETAILS,
        payload: detailsProduct
    })

}