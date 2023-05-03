import React from 'react'
import StripeContainer from '../components/StripeContainer'
import { useState } from 'react'
import sum from './Cart'
import { useSelector } from 'react-redux'


export default function CheckoutPage() {
    const [showItem, setShowItem] = useState(false)
    const totalPrice = useSelector((state) => {
        return state.recipeFilter.price
    }
    )
    console.log('In the Checkout Page')
    return (

        showItem ? <StripeContainer /> : <> <h3>{totalPrice}</h3>
            <button onClick={() => setShowItem(true)}> Pay Now
            </button></>

    )
}
