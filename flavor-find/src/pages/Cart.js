import React from 'react'
import { useState } from 'react'
import filterOptions from '../components/Search'
import { useSelector } from 'react-redux'
import RecipeCard from '../components/RecipeCard'
import { Grid, Table } from '@mantine/core';
import CartTable from '../components/CartTable'


export default function Cart() {
    const addedToCart = useSelector((state) => {
        return state.recipeFilter.cart
    })

    console.log(addedToCart)

    return (
        <div>
            {<Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>

                    </tr>
                </thead>
                {
                    addedToCart.map((recipe) => <CartTable

                        recipe={recipe} />)

                }

            </Table>
            }
        </div>
    )
}
