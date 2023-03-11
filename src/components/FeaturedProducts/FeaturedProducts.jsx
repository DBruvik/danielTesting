import {React} from 'react';
import './FeaturedProducts.css';
import Card from '../Card/Card';
import { useState, useEffect } from 'react';



const FeaturedProducts = ({type}) => {
    const data = [
        {
            id: 1,
            catID : "padel",
            img: "https://play-lh.googleusercontent.com/fpsKYYQyHIdFFvOfLZ_Oru8KLmgfSz7CT7OvnVxypbJ--WjfPNP_jiZCawnfv_LYYwY",
            img2: "https://bulls.no/wp-content/uploads/2019/04/donald-duck-produkt-1-1024x530.jpg",
            title: "Donald Duck",
            price: 100
        },
        {
            id: 2,
            catID: "import",
            img: "https://bulls.no/wp-content/uploads/2019/04/donald-duck-produkt-1-1024x530.jpg",
            img2: "https://play-lh.googleusercontent.com/fpsKYYQyHIdFFvOfLZ_Oru8KLmgfSz7CT7OvnVxypbJ--WjfPNP_jiZCawnfv_LYYwY",
            title: "Donald Duck",
            price: 110
        },
        {
            id: 3,
            catID: "klær",
            img: "https://play-lh.googleusercontent.com/fpsKYYQyHIdFFvOfLZ_Oru8KLmgfSz7CT7OvnVxypbJ--WjfPNP_jiZCawnfv_LYYwY",
            img2: "https://bulls.no/wp-content/uploads/2019/04/donald-duck-produkt-1-1024x530.jpg",
            title: "Donald Duck",
            price: 120
        },
        {
            id: 4,
            catID: "salg",
            img: "https://bulls.no/wp-content/uploads/2019/04/donald-duck-produkt-1-1024x530.jpg",
            img2: "https://play-lh.googleusercontent.com/fpsKYYQyHIdFFvOfLZ_Oru8KLmgfSz7CT7OvnVxypbJ--WjfPNP_jiZCawnfv_LYYwY",
            title: "Donald Duck",
            price: 130
        },
        {
            id: 5,
            catID: "tilbehør",
            img: "https://play-lh.googleusercontent.com/fpsKYYQyHIdFFvOfLZ_Oru8KLmgfSz7CT7OvnVxypbJ--WjfPNP_jiZCawnfv_LYYwY",
            img2: "https://bulls.no/wp-content/uploads/2019/04/donald-duck-produkt-1-1024x530.jpg",
            title: "Donald Duck",
            price: 140
        },        {
            id: 6,
            catID : "padel",
            img: "https://play-lh.googleusercontent.com/fpsKYYQyHIdFFvOfLZ_Oru8KLmgfSz7CT7OvnVxypbJ--WjfPNP_jiZCawnfv_LYYwY",
            img2: "https://bulls.no/wp-content/uploads/2019/04/donald-duck-produkt-1-1024x530.jpg",
            title: "Donald Duck",
            price: 100
        },
        {
            id: 7,
            catID: "import",
            img: "https://bulls.no/wp-content/uploads/2019/04/donald-duck-produkt-1-1024x530.jpg",
            img2: "https://play-lh.googleusercontent.com/fpsKYYQyHIdFFvOfLZ_Oru8KLmgfSz7CT7OvnVxypbJ--WjfPNP_jiZCawnfv_LYYwY",
            title: "Donald Duck",
            price: 110
        },
        {
            id: 8,
            catID: "klær",
            img: "https://play-lh.googleusercontent.com/fpsKYYQyHIdFFvOfLZ_Oru8KLmgfSz7CT7OvnVxypbJ--WjfPNP_jiZCawnfv_LYYwY",
            img2: "https://bulls.no/wp-content/uploads/2019/04/donald-duck-produkt-1-1024x530.jpg",
            title: "Donald Duck",
            price: 120
        },
        {
            id: 9,
            catID: "salg",
            img: "https://bulls.no/wp-content/uploads/2019/04/donald-duck-produkt-1-1024x530.jpg",
            img2: "https://play-lh.googleusercontent.com/fpsKYYQyHIdFFvOfLZ_Oru8KLmgfSz7CT7OvnVxypbJ--WjfPNP_jiZCawnfv_LYYwY",
            title: "Donald Duck",
            price: 130
        },
        {
            id: 10,
            catID: "tilbehør",
            img: "https://play-lh.googleusercontent.com/fpsKYYQyHIdFFvOfLZ_Oru8KLmgfSz7CT7OvnVxypbJ--WjfPNP_jiZCawnfv_LYYwY",
            img2: "https://bulls.no/wp-content/uploads/2019/04/donald-duck-produkt-1-1024x530.jpg",
            title: "Donald Duck",
            price: 140
        }
    ]

    return (
        <div className ="FeaturedProducts">
            <div className="top">
                <h2>{type}</h2>
                
            </div>
            <div className="bottom">
                {data.slice(0,5).map((item) =>(
                    <Card item = {item} key = {item.id}/>
                ))}
                
            </div>

        </div>
    )
    }

export default FeaturedProducts;