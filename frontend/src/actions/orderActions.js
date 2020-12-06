import { CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, CREATE_ORDER_FAIL } from '../constants/orderConstants';
import { axios } from 'axios'

export const orderCreate = (order) => async (dispatch, getState) => {
    try {
      dispatch({
        type: CREATE_ORDER_REQUEST,
      });
  
      const { userLogin: { userInfo }, orderCreate } = getState()
  
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${userInfo.token}`
        },
      };
  
      const { data } = await axios.post(
        "/api/orders",
        order,
        config
      );
  
      dispatch({
        type: CREATE_ORDER_SUCCESS,
        payload: data,
      });
  
    } catch (error) {
      dispatch({
        type: CREATE_ORDER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };