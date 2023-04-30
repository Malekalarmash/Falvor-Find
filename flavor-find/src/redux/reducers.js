import React from 'react'

const initialState = {
    isVegan: false,
    isGlutenFree: false,
    ingredients: [], // array of ingredient objects
    instructions: [], // array of instruction objects, 
    recipes: [],
    favorit: [],
    cart: [],
    price: [],
    IsClicked: false
};

export function recipeFilter(state = initialState, action) {

    switch (action.type) {
        case 'SET_VEGAN':
            return {
                ...state,
                isVegan: action.payload,
            }
        case 'SET_GLUTEN_FREE':
            return {
                ...state,
                isGlutenFree: action.payload,
            }
        case 'SET_RECIPES':
            return {
                ...state,
                recipes: action.payload
            }
        case 'SET_PRICE':
            return {
                ...state,
                price: [...state.price, action.payload]


            }
        case 'SET_FAVORIT':
            return {
                ...state,
                favorit: [...state.favorit, action.payload]

            }
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.payload]

            }
        case 'IS_CLICKED':
            return {
                ...state,
                IsClicked: action.payload,
            }


        default:
            return (
                state
            )
    }
}


