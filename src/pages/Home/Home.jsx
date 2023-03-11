import React from "react"
import './Home.css'
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts"
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="homePage">
            <FeaturedProducts type="Aktuelt Nå" />
            <FeaturedProducts type="Topp Rackets" />
            <div className="seMer">
                <Link to="/products/padel">
                    <button className="seMerKnapp">Se mer</button>
                </Link>
            </div>
        </div>
    )
}

export default Home