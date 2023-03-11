import React from "react"
import './Product.css'
import { useParams, useLocation, Link } from "react-router-dom"
import ProductList from "../../components/ProductList/ProductList"






const Product = () => {
    let location = useLocation();
    const param = useParams()
    const item = ProductList
    console.log(item)


    return (
        <>
        <div className="productPage">Product</div><div>

        </div></>
    )
}

export default Product