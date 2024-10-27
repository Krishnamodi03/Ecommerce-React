import React from 'react'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-left">
                <img src="./public/urban-arcade-white-logo.png" alt="" height='70px' />
                <p>Shopping Elevated - Welcome to Urban Arcade</p>
                <ul className='socials'>
                    <li><i className="fa-brands fa-instagram"></i></li>
                    <li><i className="fa-brands fa-facebook"></i></li>
                    <li><i className="fa-brands fa-linkedin"></i></li>
                    <li><i className="fa-brands fa-twitter"></i></li>
                    <li><i className="fa-brands fa-youtube"></i></li>
                </ul>
                <select name="country" id="countries">
                    <option value="India">India</option>
                    <option value="USA">United States Of America</option>
                    <option value="UK">United Kingdom</option>
                    <option value="Germany">Germany</option>
                    <option value="UAE">United Arab Emirates</option>
                </select>
                <p className="copyrights">
                    <i className="fa-regular fa-copyright"></i> 2023-24 Urban Arcade | All Rights Reserved
                </p>
            </div>
            <div className="footer-right">
                <section className='footer-sctn'>
                    <a className='headingLinks' href="#">BUILD YOUR BUSINESS</a>
                    <ul className='footer-links'>
                        <li><a href="#">Business Ideas</a></li>
                        <li><a href="#">Marketing</a></li>
                        <li><a href="#">Design and Branding</a></li>
                        <li><a href="#">DropShipping</a></li>
                    </ul>
                </section>
                <section className='footer-sctn'>
                    <a className='headingLinks' href="#">STORIES</a>
                    <ul className='footer-links'>
                        <li><a href="#">A day in my Life</a></li>
                        <li><a href="#">My first 90 days</a></li>
                        <li><a href="#">Raise the Bar</a></li>
                        <li><a href="#">Starter stories</a></li>
                    </ul>
                </section>
                <section className='footer-sctn'>
                    <a className='headingLinks' href="#">YOUR LIFE</a>
                    <ul className='footer-links'>
                        <li><a href="#">Mindset</a></li>
                        <li><a href="#">Money</a></li>
                        <li><a href="#">Productivity</a></li>
                        <li><a href="#">Wellbeing</a></li>
                    </ul>
                </section>
                <section className='footer-sctn'>
                    <a className='headingLinks' href="#">FREE BUSINESS TOOLS</a>
                    <ul className='footer-links'>
                        <li><a href="#">Business Name Generator</a></li>
                        <li><a href="#">Slogan Generator</a></li>
                        <li><a href="#">Traffic Calculator</a></li>
                        <li><a href="#">Profit Margin Calculator</a></li>
                    </ul>
                </section>
            </div>
        </div>
    )
}

export default Footer