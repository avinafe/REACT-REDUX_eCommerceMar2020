import { apiUrlProducts } from "../../utils/constants";

const fetchUrl = url => {
  return fetch(url)
    .then(resp => resp.json())
    .then(results => console.log(results));
};

const initialState = {
  fetching: false,
  fetched: false,
  products: [],
  error: null
};

export default (state = initialState, action) => {
  if (action.type === "FETCH_PRODUCTS_PENDING") {
    return {
      ...state,
      fetching: true
    };
  }
  if (action.type === "FETCH_PRODUCTS_FULFILLED") {
    return {
      ...state,
      fetching: false,
      products: action.payload,
      fetched: true
    };
  }
  if (action.type === "FETCH_PRODUCTS_REJECTED") {
    return {
      ...state,
      fetching: false,
      error: action.payload
    };
  }
  return state;
};
