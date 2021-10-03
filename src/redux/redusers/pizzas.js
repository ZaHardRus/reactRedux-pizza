import axios from "axios";

const SET_PIZZAS = 'SET_PIZZAS'
const SET_LOADED = 'SET_LOADED'

const initialState = {
    items: [],
    isLoaded: false
}

export const pizzasReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_PIZZAS:
            return {
                ...state,
                items: action.payload,
                isLoaded: true
            }
        case SET_LOADED:
            return {
                ...state,
                isLoaded: action.payload
            }
        default: {
            return state
        }
    }
}
export const setPizzasAC = (items) => ({type: SET_PIZZAS, payload: items})
export const setLoadedAC = (payload) => ({type: SET_LOADED, payload})

export const fetchPizzasTC = (category = null, sort = 'rating') => async (dispatch) => {
    const sortMap = {
        popular: {param: 'rating', order: 'desc'},
        price: {param: 'price', order: 'asc'},
        alphabet: {param: 'name', order: 'asc'}
    }
    let sortBy = sortMap[sort].param
    let order = sortMap[sort].order
    let selectedCategory = category === null ? '' : `category=${category}`


    dispatch(setLoadedAC(false))
    const fetchCards = await axios.get(`/pizzas?${selectedCategory}&_sort=${sortBy}&_order=${order}`)
    dispatch(setPizzasAC(fetchCards.data))
}
