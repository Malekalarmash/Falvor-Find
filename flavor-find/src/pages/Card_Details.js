import React from 'react'
import { useState } from 'react'
import filterOptions from '../components/Search'
import { useSelector } from 'react-redux'
import RecipeCard from '../components/RecipeCard'
import { Badge, Grid } from '@mantine/core';
import { setFavorit, addedToCart, setPrice, IsClicked, setRecipes } from '../redux/actions';
import { Card, Image, Text } from '@mantine/core';

export default function Card_Details({ setRecipes }) {
    const recipes = useSelector((state) => {
        return state.recipeFilter.clickedCard
    })
    console.log("in the Card Details", recipes)


    return (

        <div><>

            {
                recipes.map((recipe) =>
                    <Card
                        shadow="sm"
                        padding="xl"
                        component="a"
                        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                        target="_blank"
                    >
                        <Card.Section>
                            <Image
                                src={recipe.image}
                                height={160}
                                alt={recipe.label}
                            />
                        </Card.Section>
                        {recipe.healthLabels.map((healthLabel) => {
                            return <Card.Section>
                                <Badge color="pink" variant="light">
                                    {healthLabel}
                                </Badge>
                            </Card.Section>
                        })}
                        <Text weight={500} size="lg" mt="md">
                            {recipe.label}
                        </Text>
                        <Text weight={700} size="lg" mt="md">Ingredients</Text>
                        {recipe.ingredients.map((ingredient) => {
                            return <Text weight={500} size="md" mt="md">
                                {ingredient.text}

                            </Text>


                        })}

                    </Card>

                )
            }
        </>

        </div >
    )
}
