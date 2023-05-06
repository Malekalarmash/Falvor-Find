import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '@mantine/core'
import { clearCart } from '../redux/actions'
export default function DeleteCart() {
    const dispatch = useDispatch()
    const deleteBtn = useSelector((state) => {
        return state.recipeFilter.cart
    })

    return (
        <div>
            <Button variant="light" onClick={() => { dispatch(clearCart()) }}>Delete Cart</Button>
        </div >
    )
}
