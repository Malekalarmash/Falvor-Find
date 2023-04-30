import React from 'react'
import { useState } from 'react';
import queryString from './SecretKey';
import { useSelector } from 'react-redux';
import { Button } from '@mantine/core';
import { useDispatch } from 'react-redux';
import { setRecipes } from '../redux/actions';


function Search({ setReceipes }) {
    const [input, setInput] = useState('')
    const filterOptions = useSelector((state) => {
        return state.recipeFilter
    })
    const dispatch = useDispatch()
    const handleClik = async (e, searchWord) => {
        e.preventDefault();
        const { app_id, app_key } = queryString;
        try {
            fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${searchWord}${filterOptions.isVegan === true ? '+Vegan' : ''
                }+${filterOptions.isGlutenFree === true ? '+Gluten free' : ''}&app_id=${app_id}&app_key=${app_key}`)
                .then(response => response.json())
                // Stores the object into the variable called data
                .then(data => {
                    let recipes = {
                        recipe: data.hits,
                        image: data.images,
                        source: data.source,
                        url: data.url,
                        ingredients: data.ingredients,
                        price: Math.floor(Math.random() * 7) + 9
                    }
                    dispatch(setRecipes(data.hits))
                    setReceipes(data.hits);
                    console.log(data.hits)
                    return recipes
                })
        } catch (error) {
            console.error(error);

        }
    }

    return (
        <div>
            <form >
                <input onChange={(event) => setInput(event.target.value)} class="placeholder:italic placeholder:text-slate-400 block sm-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search" />
                <Button type='submit' onClick={(event) => handleClik(event, input)}>Search for Recipe</Button>

            </form>
        </div>
    )
}

export default Search

