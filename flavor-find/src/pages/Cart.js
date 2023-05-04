import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import RecipeCard from '../components/RecipeCard'
import { Burger, Button, Grid, Table } from '@mantine/core';
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
    const [showItem, setShowItem] = useState(false)




    console.log(addedToCart)

    return (
        <div>

            {<Table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        addedToCart.map((recipe) => <CartTable

                            recipe={recipe} />)

                    }
                    <tr className='font-bold' >
                        <td></td>
                        <td>Total</td>
                        <td>${totalPrice}
                        </td>

                    </tr>
                </tbody>

            </Table>
            }
            <>
                {showItem ? <StripeContainer />
                    : <>
                        <h3>{totalPrice}</h3>
                        <Button variant="light" onClick={() => setShowItem(true)}> Pay Now
                        </Button>
                    </>}

            </>
        </div>




    )
}
