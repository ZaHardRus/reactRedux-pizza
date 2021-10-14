import {PopupItem} from "./PopupItem";
import {useEffect, useRef} from "react";

export const CartPopup = ({items,id,setPopupVisible, popupVisible}) => {
    const body = useRef(document.body)
    const closePopup = () => {
        setPopupVisible(false)
    }
    if(popupVisible){
        body.current.style.overflow = 'hidden'
    }
    useEffect(  ()=>{
       return function (){
           body.current.style.overflow = 'auto'
       }
    },[])
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