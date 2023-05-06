import { Card, Image, Text, Badge, Button, Group, Box, NavLink } from '@mantine/core';
import Recipe from './Search';
import React from 'react'
import { useState } from 'react';
import { useFavicon } from '@mantine/hooks';
import { useDispatch, useSelector } from 'react-redux';
import { setFavorit, addedToCart, setPrice, clickedCard } from '../redux/actions';
import { Link } from 'react-router-dom';


export default function RecipeCard({ recipe }, props) {
    const dispatch = useDispatch()
    const price = Math.floor(recipe.calories / 100)
    const favoriteList = useSelector((state) => {
        return state.recipeFilter.favorit.find((favorit) => {
            return (recipe.label === favorit.label)


        })

    }
    )

    return (
        <Card className='flex-g' margin="20px" shadow="sm" padding="sm" radius="sm" withBorder >
            <Card.Section component="a" >
                <Link to="/Card_Details">
                    <Image
                        src={recipe.image}
                        height={160}
                        alt={recipe.label}
                        onClick={() => {
                            dispatch(clickedCard(recipe))
                            console.log('Card is Clicked')
                        }

                        }
                    />
                </Link>

            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>{recipe.label}</Text>
                <Badge color="pink" variant="light">
                    price: $ {price}
                </Badge>
            </Group>

            <Text size="sm" color="dimmed">
            </Text>
            {favoriteList ? <div></div>
                :
                <Button onClick={() => dispatch(setFavorit(recipe))} variant="light" color="blue" fullWidth mt="md" radius="md">
                    Add to Favorite
                </Button>

            }

            <Button onClick={() => {
                dispatch(addedToCart(recipe))
                dispatch(setPrice(price))
            }} variant="light" color="red" fullWidth mt="md" radius="md">
                Add to Cart
            </Button>
        </Card >



    );

}
