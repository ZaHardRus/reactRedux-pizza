const SET_SORT_BY = 'SET_SORT_BY'
const SET_SORT_CATEGORIES = 'SET_CATEGORIES'
const SET_FILTER = 'SET_FILTER'

const initialState = {
    sortBy: 'popular',
    sortCategory: 0,
    filterCategory: null,
}

export const filtersReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_SORT_BY:
            return {
                ...state,
                sortBy: action.payload
            }
        case SET_SORT_CATEGORIES:
            return {
                ...state,
                sortCategory: action.payload
            }
        case SET_FILTER:
            return {
                ...state,
                filterCategory: action.payload
            }
        default: {
            return state
        }
    }
}
export const setSortAC = (type) => ({type: SET_SORT_BY, payload: type})
export const setCategoriesAC = (index) => ({type: SET_SORT_CATEGORIES, payload: index})
export const setFilterAC = (index) => ({type: SET_FILTER, payload: index})