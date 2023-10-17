import React, { useState } from 'react';

function Footer() {
  const [email, setEmail] = useState(''); // Состояние для email
  const [isSubscribed, setIsSubscribed] = useState(false); // Состояние для отслеживания подписки

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = () => {
    // Здесь костар можешь сделать логику для отправки email на сервер, если необходимо.
    setIsSubscribed(true);
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
              <li>Каталог</li>
              <li>Доставка</li>
              <li>Оплата</li>
            </ul>
          </div>
          <div className="footer-column">
            <p>Категории</p>
            <ul>
              <li>Женское</li>
              <li>Мужское</li>
              <li>Унисекс</li>
            </ul>
          </div>
          <div className="footer-column">
            <p>Полезные ссылки</p>
            <ul>
              <li>Таблица размеров</li>
              <li>Блог о моде</li>
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