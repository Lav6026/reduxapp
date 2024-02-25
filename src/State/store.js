import { applyMiddleware, legacy_createStore } from "redux";
import Reducers from "./Action Creators/Reducers";
import { thunk } from "redux-thunk";

export const store=legacy_createStore(Reducers,{},applyMiddleware(thunk))