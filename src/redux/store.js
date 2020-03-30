import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import { apiUrlProducts } from "../utils/constants";
// Para hacer logs con colores
import logger from "redux-logger";
// Pemite con una fuction dispatch despachar varios a la vez
import thunk from "redux-thunk";

let store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

// store.dispatch({ type: "FETCH_PRODUCTS", payload: axios.get(apiUrlProducts) });

export default store;
