import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import '../Header.css'



export default function Header() {
    const cartCount = useSelector((state) => {
        return state.recipeFilter.cart.length
    })
    const favoriteCount = useSelector((state) => {
        return state.recipeFilter.favorit.length
    })

    return (
        <>

            <div className='container mx-400 justify-center mb-20 ' >
                <ul className="flex mt-10">
                    <li className="flex-1 mr-2">
                        <NavLink className="text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white" to="/Home">Home</NavLink>
                    </li>
                    <li className="flex-1 mr-2">
                        <NavLink className="text-center block border border-primary rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4" to="/Favorit">Favorite ({favoriteCount})</NavLink>
                    </li>
                    <li className="flex-1 mr-2">
                        <NavLink className="text-center block border border-primary rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4" to="/Cart"> Cart 🛒 ({cartCount})</NavLink>
                    </li>


                </ul>

            </div >
        </>
    )
}
