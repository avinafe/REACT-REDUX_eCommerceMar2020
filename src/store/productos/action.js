import axios from "axios";
import { apiUrlProducts } from "../../utils/constants";

export function fecthProducts() {
  return function(dispatch) {
    axios
      .get(apiUrlProducts)
      .then(response => {
        dispatch({
          type: "FETCH_PRODUCTS_FULFILLED",
          payload: response
        });
      })
      .catch(err => {
        dispatch({
          type: "FETCH_PRODUCTS_REJECTED",
          payload: err
        });
      });
  };
}
