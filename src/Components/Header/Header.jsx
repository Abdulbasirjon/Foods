import './Header.css';
import { HiOutlineShoppingCart } from "react-icons/hi";
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import { FaWindowClose } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
const Header = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const handleLoginClick = () => {
        setModalOpen(true);
    };
    const handleSubmitClick = () => {
        setTimeout(() => {
            setModalOpen(false);
        }, 1000);
    };
    const[menu, isMenu] = useState(false);
    const bars = () => isMenu(true);
    const close = () => isMenu(false);
    return (
        <div className="header">
            <div className="header-container">
                <a className="logo-link" href="/">SFood</a>
                <ul className="nav-links">
                    <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/" id="nav-link">Главная</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/filial" id="nav-link">Филиалы</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/nas" id="nav-link">О нас</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/contac" id="nav-link">Контакты</NavLink>
                </ul>
                <HiOutlineShoppingCart className='cart-icon' />
                <button className="login-btn" onClick={handleLoginClick}>Войти</button>
                <CiMenuFries className='menu-icon' onClick={bars} />
            </div>
            {menu && (
                <div className="menu-bar">
                    <ul className="nav-link">
                        <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/" id="nav-links">Главная</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/filial" id="nav-links">Филиалы</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/nas" id="nav-links">О нас</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/contac" id="nav-links">Контакты</NavLink>
                    </ul>
                        <FaWindowClose onClick={close} className='close' />
                </div>
            )}
            {modalOpen && (
                <div className="modal">
                    <div className="modal-mir">
                        <label htmlFor="login-modal">Телефон номер</label> <br />
                        <input type="tel" placeholder='+998' /> <br />
                        <button className="submit-btn" onClick={handleSubmitClick}>Отправить</button> <br />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;