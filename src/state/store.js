import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers/index";
import thunk from "redux-thunk";

//create the store
export const store = createStore(
  reducers,
  {}, //default state
  applyMiddleware(thunk) //async function
);
