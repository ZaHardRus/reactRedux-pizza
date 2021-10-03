import {PopupItem} from "./PopupItem";

export const CartPopup = ({items,id,setPopupVisible}) => {
    const closePopup = () => {
        setPopupVisible(false)
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