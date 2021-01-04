import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import reduser from "./reduser";


export default createStore(
    reduser,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);