import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {setFilterAC} from "../../redux/redusers/filters";


export const Categories = React.memo(() => {
    const items = ['Мясные', 'Вегетарианская','Гриль', 'Острые', 'Рыбные']
    const selectedCategory = useSelector(state => state.filters.filterCategory)
    const dispatch = useDispatch()

    const onSelectCategory = (index) => {
        dispatch(setFilterAC(index))
    }
    return (
        <div className="categories">
            <ul>
                <li
                    onClick={() => onSelectCategory(null)}
                    className={selectedCategory === null ? 'active' : ''}
                >
                    {'Все'}
                </li>
                {items && items.map((el, i) =>
                    <li
                        onClick={() => onSelectCategory(i)}
                        key={el}
                        className={selectedCategory === i ? 'active' : ''}
                    >
                        {el}
                    </li>
                )}
            </ul>
        </div>
    )
})