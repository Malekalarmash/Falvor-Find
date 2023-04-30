import { configureStore } from "@reduxjs/toolkit";
import { veganReducer, glutenReducer } from "./reducers";
import { combineReducers } from "@reduxjs/toolkit";
import { recipeFilter } from "./reducers";


const rootReducer = combineReducers({
    recipeFilter
})

const store = configureStore({ reducer: rootReducer })

export default store