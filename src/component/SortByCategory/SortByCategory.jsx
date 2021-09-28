import React from "react";
import {useEffect, useRef, useState} from "react";
import classNames from "classnames/bind";
import {useDispatch, useSelector} from "react-redux";
import {setCategoriesAC, setSortAC} from "../../redux/redusers/filters";

export const SortByCategory = React.memo( ({sortBy}) => {
    const param = [
        {category: 'популярности', type: 'popular'},
        {category: 'цене', type: 'price'},
        {category: 'алфавиту', type: 'alphabet'}]
    const sortCategory = useSelector(state => state.filtersReduser.sortCategory)

    const selectedParam = param[sortCategory].category
    const [popupVisible, setPopupVisible] = useState(false)
    const sortBlock = useRef()
    const dispatch = useDispatch()

    const toggleVisiblePopup = () => {
        setPopupVisible(prev => !prev)
    }
    const changeParam = (el, i) => {
        dispatch(setSortAC(el.type))
        dispatch(setCategoriesAC(i))
        setPopupVisible(false)
    }
    const handleOutsideClick = (e) => {
        const path = e.path || (e.composedPath && e.composedPath()) || e.composedPath(e.target);
        if (!path.includes(sortBlock.current)) {
            setPopupVisible(false)
        }
    }

    useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick)
    }, [])

    useEffect(() => {
        return () => {
            document.body.removeEventListener('click', handleOutsideClick)
        }
    }, [])

    return (
        <div ref={sortBlock} className="sort">
            <div onClick={toggleVisiblePopup} className="sort__label">
                <svg
                    className={classNames('svg', {'svg-rotate': popupVisible})}
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C"
                    />
                </svg>
                <div className='sort__param'>
                    <b>Сортировка по:</b>
                    <span>{selectedParam}</span>
                </div>
            </div>
            <div className={classNames("sort__popup", {'sort__popup--hidden': !popupVisible})}>
                <ul>
                    {param.map((el, i) =>
                        <li
                            key={el.type}
                            onClick={() => changeParam(el, i)}
                            className={selectedParam === el.category ? 'active' : ''}>{el.category}</li>
                    )}
                </ul>
            </div>
        </div>
    )
})