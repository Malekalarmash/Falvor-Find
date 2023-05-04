import React, { useState } from 'react'
import { Card, Image, Text, Badge, Button, Group, Flex, Grid, Container } from '@mantine/core';
import RecipeCard from './RecipeCard';
import Search from './Search';
import Filter from './Filter';
import filterOptions from './Search'
import { setRecipes } from '../redux/actions';
import { useSelector } from 'react-redux';
function Body() {
    const recipes = useSelector((state) => {
        return state.recipeFilter.recipes
    })
    console.log("Recipe", recipes)
    return (
        <div className=''>
            <Search />
            <Filter />
            <Grid>
                {recipes.map((recipe) => (
                    <Grid.Col md={2} lg={4} >

                        <RecipeCard recipe={recipe.recipe} />
                    </Grid.Col>
                ))}
            </Grid>
        </div>
    )
}

export default Body