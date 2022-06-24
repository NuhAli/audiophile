import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CategoryPageLayout from "../layouts/CategoryPageLayout";

const CategoryPage = () => {

    const [data, dataSet] = useState()

    useEffect(() => {
        axios.get("http://localhost:4001/").then((res) => {
            dataSet(res.data)
        })
    }, [])

    return (
        <>
            <CategoryPageLayout />
        </>
    )
}

export default CategoryPage
