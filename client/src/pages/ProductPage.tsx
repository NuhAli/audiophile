import axios from "axios"
import * as React from "react"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ProductItemType } from "../components/ProductCard/products"
import ProductPageLayout from "../layouts/ProductPageLayout"


const ProductPage = (): JSX.Element => {

    const [data, setData] = useState<ProductItemType[]>()

    const { category, id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:4001/products/${category}/${id}`, { data: id }).then((res) => {
            console.log(res)
            setData(res.data)
        })
    }, [category, id])

    return (
        <>
            {data && <ProductPageLayout data={data} />}
        </>
    )
}

export default ProductPage