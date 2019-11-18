import { GET_PRODUCT, FAILED_PRODUCT } from './types'
import axios from 'axios'


export const getProduct = () => async dispatch => {
    const res = await axios.get('/api/products')
    try {
        dispatch({
            type: GET_PRODUCT,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: FAILED_PRODUCT,
        })
    }
}