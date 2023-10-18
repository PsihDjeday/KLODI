import React, { useState } from 'react';

function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = () => {
    if (email.includes("@mail")) {
      setIsSubscribed(true);
    } else {
      alert("Поле содержит неправильные символы, убедитесь в правильности написания вашего Email.");
    }
  };

  // не работает надо пофиксить //
  const handleCatalogClick = () => {
    const womensClothing = document.getElementById('womens-clothing');
  
    if (womensClothing) {
      const yOffset = womensClothing.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: yOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p>У нас вы найдете лучший подбор костюмов, созданных с заботой о вашем комфорте, на все случаи жизни.</p>
          <div className="footer-logo">
            <a href="#">KLODI</a>
          </div>
        </div>
        <div className="footer-center">
          <div className="footer-column">
            <p>Основные ссылки</p>
            <ul>
              <li>О нас</li>
              <li><a href="#womens-clothing" onClick={handleCatalogClick}>Каталог</a></li>
              <li>Доставка</li>
            </ul>
          </div>
          <div className="footer-column">
            <p>Категории</p>
            <ul>
            <li><a href="#womens-clothing">Женское</a></li>
            <li><a href="#mens-clothing">Мужское</a></li>
            <li><a href="#unisex-clothing">Унисекс</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <p>Полезные ссылки</p>
            <ul>
            <li><a href="https://sheitesnami.ru/razmernye-tablicy-odezhdy">Таблица размеров</a></li>
              <li><a href="https://www.elle.ru/moda/fashion-blog/">Блог о моде</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-right">
          <p>Подпишитесь на нашу рассылку</p>
          <div className="subscribe">
            {/* Если пользователь подписан */}
            {isSubscribed ? (
              <p>Вы подписаны!</p>
            ) : (
              <>
                <input
                  type="email"
                  placeholder="Ваш Email"
                  value={email}
                  onChange={handleEmailChange}
                />
                <button onClick={handleSubscribe}>Подписаться</button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;