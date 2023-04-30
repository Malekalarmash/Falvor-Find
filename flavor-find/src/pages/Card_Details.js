import React from 'react'
import { useState } from 'react'
import filterOptions from '../components/Search'
import { useSelector } from 'react-redux'
import RecipeCard from '../components/RecipeCard'
import { Grid } from '@mantine/core';
import { setFavorit, addedToCart, setPrice, IsClicked, setRecipes } from '../redux/actions';


export default function Card_Details() {
    const recipe = setRecipes(recipe)
    console.log("in the Card Details", recipe)


    return (

        <RecipeCard recipe={recipe[0]} />

    )
}
