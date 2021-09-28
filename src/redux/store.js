import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import {filtersReduser} from "./redusers/filters";
import {pizzasReduser} from "./redusers/pizzas";
import thunk from "redux-thunk";
import {cartReduser} from "./redusers/cart";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootRedusers = combineReducers({
    filtersReduser,
    pizzasReduser,
    cartReduser,
});
const store = createStore(rootRedusers, composeEnhancers(applyMiddleware(thunk)))

export default store