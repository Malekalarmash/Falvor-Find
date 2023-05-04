import React from 'react'
import { useState } from 'react'
import filterOptions from '../components/Search'
import { useSelector } from 'react-redux'
import RecipeCard from '../components/RecipeCard'
import { Grid } from '@mantine/core';


export default function Favorit() {
    const favoritItems = useSelector((state) => {
        return state.recipeFilter.favorit
    })
    console.log(favoritItems)

    return (
        <div>
            <Grid>
                {
                    favoritItems.map((recipe) =>
                        <Grid.Col md={2} lg={4} >
                            <RecipeCard recipe={recipe} />
                        </Grid.Col>
                    )
                }
            </Grid>
        </div>
    )
}
