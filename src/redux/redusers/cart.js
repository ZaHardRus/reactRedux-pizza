const ADD_PIZZA_TO_CART = 'ADD_PIZZA_TO_CART'
const CLEAR_CART = 'CLEAR_CART'
const REMOVE_GROUP = 'REMOVE_GROUP'
const REMOVE_ITEM = 'REMOVE_ITEM'

const initialState = {
    items: {},
    totalPrice: 0,
    itemsCount: 0,
}
const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0)
const getAllPizzas = (arr) => Object.values(arr).map(el => el.items).flat();

export const cartReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PIZZA_TO_CART:

            const currentPizza = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].items, action.payload]

            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentPizza,
                    price: getTotalPrice(currentPizza)
                }
            };

            const allPizzas = getAllPizzas(newItems)
            const totalPrice = getTotalPrice(allPizzas)

            return {
                ...state,
                items: newItems,
                itemsCount: allPizzas.length,
                totalPrice,
            };
        case CLEAR_CART: {
            return {
                ...state,
                items: {},
                totalPrice: 0,
                itemsCount: 0
            }
        }
        case REMOVE_GROUP: {
            const clone = {...state.items}
            delete clone[action.payload]

            const allPizzas = getAllPizzas(clone)
            const totalPrice = getTotalPrice(allPizzas)

            return {
                ...state,
                items: {...clone},
                totalPrice: totalPrice,
                itemsCount: allPizzas.length
            }
        }
        case REMOVE_ITEM: {
            const filteredClone = [...state.items[action.payload.id].items].filter(el => el.objectId !== action.payload.objectId)
            const currentPizza = [...state.items[action.payload.id].items = filteredClone]

            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentPizza,
                    price: getTotalPrice(currentPizza)
                }
            };

            const allPizzas = getAllPizzas(newItems)
            const totalPrice = getTotalPrice(allPizzas)

            return {
                ...state,
                items: newItems,
                itemsCount: allPizzas.length,
                totalPrice,
            };
        }
        default: {
            return state
        }
    }
}

export const addPizzaToCartAC = (pizza) => ({type: ADD_PIZZA_TO_CART, payload: pizza})
export const clearCartAC = () => ({type: CLEAR_CART})
export const removeGroupAC = (id) => ({type: REMOVE_GROUP, payload: id})
export const removeItemAC = (id, objectId) => ({type: REMOVE_ITEM, payload: {id, objectId}})
