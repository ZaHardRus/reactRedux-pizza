import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import {filtersReduser} from "./redusers/filters";
import {pizzasReduser} from "./redusers/pizzas";
import thunk from "redux-thunk";
import {cartReduser} from "./redusers/cart";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReduser = combineReducers({
    filters:filtersReduser,
    pizzas:pizzasReduser,
    cart:cartReduser,
});
const store = createStore(rootReduser, composeEnhancers(applyMiddleware(thunk)))

export default store