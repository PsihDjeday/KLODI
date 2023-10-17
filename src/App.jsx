// App.js
import React from 'react';
import './App.css';
import Announcement from './Announcement';
import Header from './Header';
import Slider from './Slider';
import Catalog from './Collection';
import Footer from './Footer';

function App() {
  const slides = [
    'https://cdnn1.img.sputnik.tj/img/07e5/0b/07/1043300441_0:320:3073:2048_1920x0_80_0_0_633b08ca6a8ede2cb3f689d646cb1ec0.jpg',
    'https://7nebonnov.ru/upload/iblock/0af/f9h4hg80jxk7ywapgykhr8agsnketjsr/1920kh1080_final.jpg',
    'https://i.ytimg.com/vi/_ioiT7xwjz4/maxresdefault.jpg',
  ];

  return (
    <div>
      <Announcement />
      <Header />
      <Slider slides={slides} /> {/* Передаем массив слайдов в компонент Slider */}
      {/* Добавьте другие компоненты и маршруты по мере необходимости */}
      <Catalog />
      <Footer />
    </div>
  );
}

export default App;
