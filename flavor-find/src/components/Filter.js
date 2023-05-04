import React, { useState } from 'react'
import { createSlice, configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux';
import SecretKey from './SecretKey'
import { Checkbox } from '@mantine/core';
import { useDispatch } from "react-redux"
import { setVegan, setGlutenFree, setRecipes } from '../redux/actions'
import { useSelector } from 'react-redux';
import queryString from './SecretKey'



export default function Filter() {

    const dispatch = useDispatch()


    return (


        <form className='flex mb-5'>
            <Checkbox className='mr-5' onChange={() => dispatch(setVegan(true))} label="Vegan" />
            <Checkbox onChange={() => dispatch(setGlutenFree(true))} label="Gluten-Free" />
        </form>


    )
}
