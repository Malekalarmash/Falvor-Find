import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Header.css'



export default function Header() {

    return (
        <>

            <div className='container mx-400 justify-center mb-20 ' >
                <ul className="flex mt-10">
                    <li className="flex-1 mr-2">
                        <NavLink className="text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white" to="/Home">Home</NavLink>
                    </li>
                    <li className="flex-1 mr-2">
                        <NavLink className="text-center block border border-primary rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4" to="/Favorit">Favorit Recipes</NavLink>
                    </li>
                    <li className="flex-1 mr-2">
                        <NavLink className="text-center block border border-primary rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4" to="/Cart">Cart</NavLink>
                    </li>
                </ul>

            </div >
        </>
    )
}
