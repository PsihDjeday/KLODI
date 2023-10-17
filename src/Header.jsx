// Header.js
import React from 'react';
import './App.css'; 

function Header() {
  const scrollToWomensClothing = () => {
    const womensClothingElement = document.getElementById('womens-clothing');
    if (womensClothingElement) {
      const yOffset = -50; // Отступ от верхней части экрана (может потребоваться настроить)
      const y = womensClothingElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };
  return (
    <header className="header"> {/* класс из CSS */}
      <div className="header-container">
        <div className="header-left">
          <ul className="header-menu">
            <li><a href="#">О нас</a></li>
            <li><a href="#">Контакты</a></li>
            <li><a href="#">Доставка</a></li>
            <li><a href="#" onClick={scrollToWomensClothing}>Каталог</a></li>
          </ul>
        </div>
        <div className="center-section">
          <div className="logo">
            <a href="#">KLODI</a>
          </div>
        </div>
        <div className="right-section">
          <ul className="header-menu">
            <li><a href="#">Корзина</a></li>
            <li><a href="#">Профиль</a></li>
            <li><a href="#">Список желаемого</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
}
export default Header;