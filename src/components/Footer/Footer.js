import React from 'react'
import './Footer.css'
import {IoLogoTwitter} from 'react-icons/io'
import { FiInstagram } from 'react-icons/fi';
import { FaFacebook } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate()
  return (

   
    <div className='footer'>
        <footer>
            <div className="footer__container">
                <div className="footer__row">
                    <div className="footer__col">
                        <h4>COMPANY</h4>
                        <ul>
                            
                            <li onClick={() => navigate('pp') }>Privacy and Policy</li>
                           <li href="" onClick={() => navigate('tc') }>Terms and Conditions</li>
                            <li>CodePeeps</li>
                        </ul>
                    </div>

                    <div className="footer__col">
                        <h4>QUICK LINKS</h4>
                        <ul>
                            <li onClick={() => navigate('/') }>Home</li>
                            <li onClick={() => navigate('about') }>About Us</li>
                            <li onClick={() => navigate('transactions') }>My Transations</li>
                            <li onClick={() => navigate('contact') }>Contact us</li>
                            
                        </ul>
                    </div>

                    <div className="footer__col">
                        <h4>GET HELP</h4>
                        <ul>
                            <li onClick={() => navigate('faq') }>FAQ</li>
                            
                            <li onClick={() => navigate('contact') }>Contact us</li>
                            
                        </ul>
                    </div>

                    <div className="footer__col">
                        <h4>FOLLOW US</h4>
                        <div className='social__links'>
                            
                            <a href="#" target='_blank' className='fa'><FaFacebook /></a>
                            <a href="#" target='_blank' className='ig'><FiInstagram /></a>
                            <a href="#" target='_blank' className='tw'><IoLogoTwitter /></a>
                            <a href="#" target='_blank' className='ln'><AiFillLinkedin /></a>
            
                        </div>
                    </div>
                </div>
            </div>
        </footer>












      

    </div>
  )
}

export default Footer