import React from 'react'
import { useState } from 'react'
import filterOptions from '../components/Search'
import { useSelector } from 'react-redux'
import RecipeCard from '../components/RecipeCard'
import { Grid } from '@mantine/core';


export default function Card_Details() {
    const isClicked = useSelector((state) => {
        return state.recipeFilter.isClicked
    })
    console.log(isClicked)

    return (

        isClicked === true ? ((recipe) => <RecipeCard recipe={recipe} />) : console.log('Not Clicked')

    )
}
