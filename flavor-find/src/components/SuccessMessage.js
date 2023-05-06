import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../redux/actions'
export default function SuccessMessage() {
    const dispatch = useDispatch()

    useEffect(
        () => {
            dispatch(clearCart())
        }
        , [])

    return (

        alert('Your payment was successful!')

    )
}
