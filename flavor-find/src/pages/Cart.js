import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import RecipeCard from '../components/RecipeCard'
import { Grid, Table } from '@mantine/core';
import CartTable from '../components/CartTable'
import StripeContainer from '../components/StripeContainer'
import price from '../components/CartTable'
import CheckoutPage from './CheckoutPage';
import { NavLink } from 'react-router-dom'
import '../Header.css'

export default function Cart() {
    const addedToCart = useSelector((state) => {
        return state.recipeFilter.cart
    })
    const totalPrice = useSelector((state) => {
        return state.recipeFilter.price
    }
    )
    // const sum = totalPrice.reduce((partialSum, a) => partialSum + a, 0);
    // console.log(sum);


    console.log(addedToCart)

    return (
        <div>

            {<Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                {
                    addedToCart.map((recipe) => <CartTable

                        recipe={recipe} />)

                }
                {totalPrice}

            </Table>
            }
            <NavLink to="/Checkout">
                <button to="/Checkout">Checkout</button>

            </NavLink>




        </div>
    )
}
