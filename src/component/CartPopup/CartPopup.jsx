import {PopupItem} from "./PopupItem";

export const CartPopup = ({items,id,setPopupVisible}) => {
    return(
        <div  className={'overlay'}>
            <div className={'popupWrapper'}>
                <div className={'buttonWrapper'}>
                    <button className={'popupClose'} onClick={()=>setPopupVisible(false)}>X</button>
                </div>
                {
                    items[id].items.map(el=><PopupItem
                        type={el.type}
                        id={el.id}
                        name={el.name}
                        imageUrl={el.imageUrl}
                        size={el.size}
                        price={el.price}
                        type={el.type}
                        objectId={el.objectId}
                        />)
                }
            </div>
        </div>
    )
}