import { createStore } from "redux";
import reducer from "./ducks/reducer.js";

let store = createStore(reducer);

export default store;