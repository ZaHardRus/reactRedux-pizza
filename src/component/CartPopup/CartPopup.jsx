import {PopupItem} from "./PopupItem";
import {useEffect, useRef} from "react";

export const CartPopup = ({items, id, setPopupVisible, popupVisible}) => {
    const body = useRef(document.body)
    const closePopup = () => {
        setPopupVisible(false)
    }
    if (popupVisible) {
        body.current.style.overflow = 'hidden'
    }
    useEffect(() => {
        return function () {
            body.current.style.overflow = 'auto'
        }
    }, [])
    return (
        <div className={'overlay'}>
            <div className={'popupWrapper'}>
                <div className={'buttonWrapper'}>
                    <button className={'popupClose'} onClick={closePopup}>X</button>
                </div>
                <div className={'popupTitle'}>
                    <img src={items[id].items[0].imageUrl} alt="select-pizza" width={100}/>
                    <h2>{items[id].items[0].name}</h2>
                </div>
                <div className={'popup__items-wrapper'}>
                    {items[id].items.map(el => <PopupItem
                        key={el.objectId}
                        type={el.type}
                        id={el.id}
                        size={el.size}
                        price={el.price}
                        objectId={el.objectId}
                    />)}
                </div>
            </div>
        </div>
    )
}