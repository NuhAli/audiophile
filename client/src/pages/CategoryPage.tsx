import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductItemType } from '../components/ProductCard/products';
import CategoryPageLayout from "../layouts/CategoryPageLayout";
import modalVisible$ from "../observables/modalVisible$";

const CategoryPage = () => {
    const [data, setData] = useState<ProductItemType[] | null>([])

    const { category } = useParams()

    useEffect(() =>{
        return () => {
            modalVisible$.next(false)
        }
    },[])

    useEffect(() => {
        axios.get(`http://localhost:4001/products/${category}`).then((res) => {setData(res.data)})
    }, [category])

    return (
        <>
            <CategoryPageLayout data={data} />
        </>
    )
}

export default CategoryPage
