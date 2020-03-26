import { applyMiddleware, createStore } from "redux";
import productosReducer from "./productos/reducer";
import { apiUrlProducts } from "../utils/constants";
// Para conseguir informacion de un GET, ASYNC
import axios from "axios";
// Para hacer logs con colores
import logger from "redux-logger";
// Pemite con una fuction dispatch despachar varios a la vez
import thunk from "redux-thunk";
// Cuando tenemos más de un axios, se hace el código más limpio
import promise from "redux-promise-middleware";

const middleware = applyMiddleware(promise, thunk, logger);
let store = createStore(productosReducer, middleware);

store.dispatch({ type: "FETCH_PRODUCTS", payload: axios.get(apiUrlProducts) });

export default store;
