import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE
} from "./types";

export const fetchProductsRequest = () => {
  return {
    type: FETCH_PRODUCTS_REQUEST
  };
};

const fetchProductsSuccess = products => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products
  };
};

const fetchProductsFailure = error => {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: error
  };
};

export const fetchProducts = () => {
  return dispatch => {
    dispatch(fetchProductsRequest());
    fetch("https://www.amiiboapi.com/api/amiibo")
      .then(res => res.json())
      .then(res => {
        const products = res["amiibo"];
        dispatch(fetchProductsSuccess(products));
      })
      .catch(error => {
        const errorMsg = error.message;
        dispatch(fetchProductsFailure(errorMsg));
      });
  };
};
