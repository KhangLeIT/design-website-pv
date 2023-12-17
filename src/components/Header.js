// Trong component Header.js
import React, { useEffect, useState } from 'react';
import './Header.css'; // Import file CSS cho header
import logo from '../images/logo/logo.png';
import faceIcon from '../images/icons/facebook-icon-white-png.png'
import shoppeIcon from '../images/icons/shoppe.png'
import whatsAppIcon from '../images/icons/whatsapp.png';
import menuIcon from '../images/icons/menu.png'

// Tạo một thành phần Header mới
function MobileHeader({ toggleMenu }) {
    return (
        <header className="mobile-header">
            <div className="mobile-logo">
                <img src={logo} alt="Logo" />
            </div>
            {/* Các phần tử của header khi hiển thị trên điện thoại */}
            <nav className="mobile-navigation">
                {/* Các mục menu khi hiển thị trên điện thoại */}
                <ul className="mobile-ulMenu">
                    <li className="mobile-menu-item"><a href="/products">Products</a></li>
                    <li className="mobile-menu-item"><a href="/Home">Home</a></li>
                    <li className="mobile-menu-item"><a href="/contact">Contact</a></li>
                </ul>
            </nav>
            {/* Các icon khác khi hiển thị trên điện thoại */}
            <div className="mobile-icons">
                <a href="/shopee"><img src={shoppeIcon} alt="Shopee" /></a>
                
                <a href="/facebook"><img src={faceIcon} alt="Facebook" /></a>
                <a href="/whatsapp"><img src={whatsAppIcon} alt="WhatsApp" /></a>
            </div>

            
                
        </header>

        
    );
}


function Header() {
    const [showMenu, setShowMenu] = useState(false);

    const [selectedItem, setSelectedItem] = useState('Products');

    const toggleMenu = () => {
        setShowMenu(prevShowMenu => !prevShowMenu);

    };
    useEffect(() => {
        const storedSelectedItem = localStorage.getItem('selectedItem');
        if (storedSelectedItem) {
            setSelectedItem(storedSelectedItem);
        }
    }, []);

    const handleItemClick = (itemName) => {
        setSelectedItem(itemName);
        localStorage.setItem('selectedItem', itemName); // Lưu trạng thái được chọn vào localStorage
        setShowMenu(false); // Đóng menu khi mục được chọn
    };




    return (
        <div className="header-container">
            {/* Hiển thị icon menu khi Header bị ẩn */}

            <div className="bottom-right" onClick={toggleMenu}>
                <div className='icons'>
                    <img src={menuIcon} alt="Menu" />
                </div>
            </div>

            {/* Hiển thị header phù hợp với trạng thái showMenu */}
            {/* Nội dung của header */}
            <header className="header">
                <div className="logo">
                    {/* Logo và các phần khác */}
                    <img src={logo} alt="Logo" />
                </div>
                <nav className="navigation">
                    <ul className="ulMenu">
                        <li className={`menu-item ${selectedItem === 'Products' ? 'selected' : ''}`}>
                            <a href="/products" onClick={() => handleItemClick('Products')}>Products</a>
                        </li>
                        <li className={`menu-item ${selectedItem === 'Home' ? 'selected' : ''}`}>
                            <a href="/Home" onClick={() => handleItemClick('Home')}>Home</a>
                        </li>
                        <li className={`menu-item ${selectedItem === 'Contact' ? 'selected' : ''}`}>
                            <a href="/contact" onClick={() => handleItemClick('Contact')}>Contact</a>
                        </li>
                    </ul>
                </nav>
                <div className="icons">
                    {/* Các icon khác */}
                    <a href="/shopee"><img src={shoppeIcon} alt="Shopee" /></a>
                    <a href="/facebook"><img src={faceIcon} alt="Facebook" /></a>
                    <a href="/whatsapp"><img src={whatsAppIcon} alt="WhatsApp" /></a>
                </div>
            </header>


            {/* Hiển thị MobileHeader chỉ khi Header bị ẩn */}
            {showMenu && (
                <MobileHeader toggleMenu={toggleMenu} />
            )}
        </div>


    );
}

export default Header;
