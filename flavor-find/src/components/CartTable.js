import { Card, Image, Text, Badge, Button, Group, Box, NavLink } from '@mantine/core';
import React from 'react'
import { useDispatch } from 'react-redux';
import { Table } from '@mantine/core';
import { setFavorit, addedToCart, setPrice } from '../redux/actions';

export default function CartTable({ recipe }) {
    const dispatch = useDispatch()
    const price = Math.floor(recipe.calories / 100)
    const elements = [
        { position: recipe.label, price: price, symbol: '', name: '' }
    ];
    const totalCumulativePrice = elements.reduce((accumulator, element) => {
        return accumulator + (element.price);
    }, 0);
    console.log(elements)
    const rows = elements.map((element) => (
        <tr key={element.name}>
            <td>{element.position}</td>
            <td>{element.price}</td>
            <td>{element.quantity}</td>

        </tr>
    ));
    return (
        <tbody>
            <div>
                {rows}
                <p>{totalCumulativePrice}</p>
            </div>
        </tbody>

    );

}
