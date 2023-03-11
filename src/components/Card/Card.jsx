import React from 'react';
import "./Card.css";
import { Link } from 'react-router-dom';

const Card = ({item}) => {
    return (
        <Link to={`/product/${item.id}`}>
        <div className="card">
            <div className="image">
                <img src={item.img} alt={item.title} className="mainImg"/>
            </div>
            <div className="title">
                <h3>{item.title}</h3>
            </div>
            <div className="price">
                <h5>NOK {item.price}</h5>
            </div>

        </div>
        </Link>
    )
}

export default Card;