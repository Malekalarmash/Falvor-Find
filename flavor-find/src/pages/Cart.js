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
import DeleteCart from '../components/DeleteCart';
import SuccessMessage from '../components/SuccessMessage';

export default function Cart() {
    const addedToCart = useSelector((state) => {
        return state.recipeFilter.cart
    })
    const totalPrice = useSelector((state) => {
        return state.recipeFilter.price
    }
    )
    const [showItem, setShowItem] = useState(false)




    console.log("In the cart", addedToCart)

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
                        <td>{addedToCart.length === 0 ? 0
                            : totalPrice
                        }</td>
                        <td><DeleteCart /></td>

                    </tr>
                </tbody>

            </Table>
            }
            <>
                {(showItem) && (addedToCart.length > 0) ? <StripeContainer />
                    : <>

                        <Button variant="light" onClick={() => setShowItem(true)}> Pay Now
                        </Button>

                    </>}

            </>
        </div>




    )
}
