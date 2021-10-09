import {PopupItem} from "./PopupItem";
import {useRef} from "react";

export const CartPopup = ({items,id,setPopupVisible, popupVisible}) => {
    const closePopup = () => {
        setPopupVisible(false)
        body.current.style.overflow = 'auto'
    }
    const body = useRef(document.body)
    if(popupVisible){
        body.current.style.overflow = 'hidden'
    }
    return(
        <div  className={'overlay'}>
            <div className={'popupWrapper'}>
                <div className={'buttonWrapper'}>
                    <button className={'popupClose'} onClick={closePopup}>X</button>
                </div>
                {
                    items[id].items.map(el=><PopupItem
                        key={el.objectId}
                        type={el.type}
                        id={el.id}
                        name={el.name}
                        imageUrl={el.imageUrl}
                        size={el.size}
                        price={el.price}
                        objectId={el.objectId}
                        />)
                }
            </div>
        </div>
    )
}