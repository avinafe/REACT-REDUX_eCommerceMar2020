import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import { apiUrlProducts } from "../utils/constants";
// Logger is for customize our logs, more visuals
import logger from "redux-logger";
// Redux library is for async calls
import thunk from "redux-thunk";

let store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

// store.dispatch({ type: "FETCH_PRODUCTS", payload: axios.get(apiUrlProducts) });

export default store;
