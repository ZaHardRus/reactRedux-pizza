function CalcFinalPrice(val) {
    return Math.round(val / 10) * 10;
}
export const  calcFinalPrice = (price,sizePizza,activeSize) => {
    let finalPrice = price;
    if(sizePizza[activeSize] === 30){
        finalPrice = price * 1.3
    }
    if(sizePizza[activeSize] === 40){
        finalPrice = price * 1.7
    }
    return CalcFinalPrice(finalPrice)
}