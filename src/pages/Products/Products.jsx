import React from "react"
import { useParams } from "react-router-dom"
import './Products.css'
import ProductList from "../../components/ProductList/ProductList"

const Products = () => {
    const param = useParams()
    console.log(param)



    return (

        <div className="products">  
            <ProductList />  
        </div>
        

    )
}
export default Products