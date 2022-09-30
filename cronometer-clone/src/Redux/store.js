import { legacy_createStore,applyMiddleware,combineReducers,compose } from "redux";

import { authReducer } from "./AuthReducer/reducer";
import thunk from "redux-thunk"

const mainreducer =combineReducers({
    authReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
    mainreducer,
    composeEnhancers(applyMiddleware(thunk))
);


