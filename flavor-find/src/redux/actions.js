
export function setVegan(isVegan) {
    return {
        type: 'SET_VEGAN',
        payload: isVegan
    }
}

export function setGlutenFree(isGlutenFree) {
    return {
        type: 'SET_GLUTEN_FREE',
        payload: isGlutenFree
    }
}
export function setRecipes(recipes) {
    return {
        type: 'SET_RECIPES',
        payload: recipes
    }
}
export function setFavorit(favorit) {
    return {
        type: 'SET_FAVORIT',
        payload: favorit
    }
}
export function addedToCart(cart) {
    return {
        type: 'ADD_TO_CART',
        payload: cart
    }
}
export function setPrice(price) {

    return {
        type: 'SET_PRICE',
        payload: price
    }
}
export function clickedCard(clickedCard) {
    return {
        type: 'CLICKED_CARD',
        payload: clickedCard
    }
}
export function clearCart(cart) {
    return {
        type: 'CLEAR_CART',
        payload: cart
    }
}


