import {combineReducers} from "redux";
import accountReducer from "./accountReducer";

//combine all reducers
const reducers = combineReducers ({
    //the store will have a key called account and the value is from accountReducer
    account: accountReducer
})

export default reducers;