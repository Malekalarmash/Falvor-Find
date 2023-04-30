import { Card, Image, Text, Badge, Button, Group, Box, NavLink } from '@mantine/core';
import React from 'react'
import { useDispatch } from 'react-redux';
import { Table } from '@mantine/core';
import { setFavorit, addedToCart, setPrice } from '../redux/actions';

export default function CartTable({ recipe }) {
    const dispatch = useDispatch()

    const elements = [
        { position: recipe.label, price: recipe.price, symbol: '', name: '' }
    ];
    console.log(elements)
    const rows = elements.map((element) => (
        <tr key={element.name}>
            <td>{element.position}</td>
            <td>{element.quantity}</td>
            <td>{element.price}</td>
        </tr>
    ));
    return (

        <Table>
            <tbody>
                {rows}
            </tbody>
        </Table>



    );

}
