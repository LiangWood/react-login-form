import { legacy_createStore as createStore } from "redux";
import authReducer from "./reducers";

const store = createStore(authReducer);

export default store;
