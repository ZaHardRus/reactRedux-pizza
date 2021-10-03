function CalcFinalPrice(val) {
    return Math.round(val / 10) * 10;
}
export const  calcFinalPrice = (price,sizePizza,activeSize) => {
    let finalPrice = price;
    if(sizePizza[activeSize] === 30){
        finalPrice = price * 1.5
    }
    if(sizePizza[activeSize] === 40){
        finalPrice = price * 2
    }
    return CalcFinalPrice(finalPrice)
}