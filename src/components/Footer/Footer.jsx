import React from "react"
import './Footer.css'
import { Link } from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <footer>
            <div className="skognesfooter">
                <h2 className='skognesmyaccount'>MIN KONTO</h2>
                    <div className="footercontentAccount">                                      
                        <ul>
                            <li><Link to="/#">Ordre status</Link></li>
                            <li><Link to="/registrer">Registrer</Link></li>
                            <li><Link to="/logginn">Logg inn</Link></li>
                        </ul>
                    </div>
                <h2 className='skogneshelp'>HJELP</h2>
                    <div className="footercontentHelp">                    
                        <ul>
                            <li><Link to="/aboutus">Størrelser</Link></li>
                            <li><Link to="/requestImport">Forespør import</Link></li>
                            <li><Link to="/aboutus">Retur</Link></li>
                            <li><Link to="/aboutus">Frakt</Link></li>
                        </ul>
                    </div>
                <h2 className='skognesaboutus'>OM OSS</h2>
                    <div className="footercontentAbout">                    
                        <ul>
                            <li><Link to="/aboutus">For bedrift</Link></li>
                            <li><Link to="/aboutus">Vår historie</Link></li>
                            <li><Link to="/contact">Kontakt</Link></li>
                        </ul>
                    </div>                    
                    <div className="footercontentFollow">
                        <h2 className="skognesfollowskognes">FOLLOW SKOGNES</h2>             
                        <div className="socialIcons">
                            <Link to="https://www.facebook.com" target="_blank">
                                <FacebookIcon />
                            </Link>
                            <Link to="https://www.twitter.com" target= "_blank">
                                <TwitterIcon />
                            </Link>
                            <Link to="https://www.instagram.com" target= "_blank">
                                <InstagramIcon />
                            </Link>
                            <Link to="https://www.linkedin.com" target= "_blank">
                                <LinkedInIcon />
                            </Link>
                        </div>
                    </div>
            </div>
        </footer>
    )
}

export default Footer;