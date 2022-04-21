import {createStore} from "redux";
import reducers from "./reducers/index"

//create the store
export const store = createStore (
    reducers,
    {}  //default state
) 
