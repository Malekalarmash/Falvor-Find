import { Card, Image, Text, Badge, Button, Group, Box, NavLink } from '@mantine/core';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Table } from '@mantine/core';
import { setFavorit, addedToCart, setPrice } from '../redux/actions';

export default function CartTable({ recipe }) {
    const dispatch = useDispatch()
    const price = Math.floor(recipe.calories / 100)

    const elements = [
        { position: recipe.label, price: price, symbol: '', name: '', img: recipe.image }
    ];

    console.log(elements)
    const rows = elements.map((element) => (
        <tr key={element.name}>
            <td><img width={100} src={element.img}></img></td>
            <td>{element.position}</td>
            <td>${element.price}</td>

        </tr >
    ));
    return (
        <>
            {rows}


        </>


    );

}
