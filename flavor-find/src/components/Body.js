import React, { useState } from 'react'
import { Card, Image, Text, Badge, Button, Group, Flex, Grid, Container } from '@mantine/core';
import RecipeCard from './RecipeCard';
import Search from './Search';
import Filter from './Filter';
import filterOptions from './Search'
import { setRecipes } from '../redux/actions';
function Body() {
    const [recipes, setReceipes] = useState([])

    console.log("Recipe", recipes)
    return (
        <div className=''>
            <Search setReceipes={setReceipes} />
            <Filter />
            <Grid>
                {recipes.map((recipe) => (
                    <Grid.Col span={3}>

                        <RecipeCard recipe={recipe.recipe} />
                    </Grid.Col>
                ))}
            </Grid>
        </div>
    )
}

export default Body