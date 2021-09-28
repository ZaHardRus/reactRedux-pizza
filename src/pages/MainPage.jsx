import {Categories} from "../component/Categories/Categories";
import {SortByCategory} from "../component/SortByCategory/SortByCategory";
import {Card} from "../component/Card/Card";
import {useDispatch, useSelector} from "react-redux";
import {CardLoader} from "../component/Card/CardLoader";
import {useEffect} from "react";
import {fetchPizzasTC} from "../redux/redusers/pizzas";
import {addPizzaToCartAC} from "../redux/redusers/cart";
import { v4 as uuidv4 } from 'uuid';

export const MainPage = () => {

    const selectedCategory = useSelector(state => state.filtersReduser.filterCategory)
    const sortBy = useSelector(state => state.filtersReduser.sortBy)
    const pizzasList = useSelector(state=>state.pizzasReduser.items)
    const isLoaded = useSelector(state=>state.pizzasReduser.isLoaded)
    const cartItems = useSelector(state=>state.cartReduser.items)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchPizzasTC(selectedCategory,sortBy))
    },[selectedCategory,sortBy])

    const onAddPizza = (pizza) => {
        const objectId = uuidv4()
        dispatch(addPizzaToCartAC({...pizza,objectId}))
    }
    return (
        <div className="container">
            <div className="content__top">
                <Categories/>
                <SortByCategory/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded ? pizzasList.map(el =>
                    <Card
                        addedPizzas={cartItems[el.id] && cartItems[el.id].items.length}
                        onAddPizza={onAddPizza}
                        key={el.id}
                        {...el}
                    />
                )
                :Array(10).fill(1).map((el,i)=><CardLoader key={'fake'+i}/>)}
            </div>
        </div>
    )
}