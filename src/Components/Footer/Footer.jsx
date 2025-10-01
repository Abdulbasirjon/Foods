import React from 'react';
import { NavLink } from 'react-router-dom';
import { LiaTelegramPlane } from "react-icons/lia";
import { PiInstagramLogoLight } from "react-icons/pi";
import { FaYoutube } from "react-icons/fa";
import './Footer.css';
const Footer = () => {
  return (
    <div className="footer">
        <div className="container">
            <div className="footer-head">
                <h2>SFood</h2>
                <ul className="ul">
                    <NavLink className="active">Главная</NavLink> <br />
                    <NavLink className="active">Филиалы</NavLink> <br />
                    <NavLink className="active">О нас</NavLink> <br />
                    <NavLink className="active">Контакты</NavLink> <br />
                </ul>
            </div>
            <div className="footer-main">
                <h3>Присоединяйтесь к нам</h3>
                <div>
                    <LiaTelegramPlane className='icons' />
                    <PiInstagramLogoLight className='icons' />
                    <FaYoutube className='icons' />
                </div>
            </div>
            <div className="footer-head">
                <h3>Заказывайте по номеру</h3>
                <a href="tel:+998934629992">+998934629992</a>
            </div>
        </div>
        <hr className='her' />
        <div className="div">
            <h3>© 2020–2022, ООО «Islombek Raximjanov», официальный сайт</h3>
            <h3>Developed by Islombek</h3>
        </div>
    </div>
  )
}
export default Footer;