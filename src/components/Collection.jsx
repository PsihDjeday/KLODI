import { useState } from "react";

function Catalog() {
  const womensProducts = [
    {
      name: "Комплект одежды Hola утепленный 1400Р",
      image: "https://ir.ozone.ru/s3/multimedia-i/wc750/6540167130.jpg",
    },
    {
      name: "Костюм классический EMILY COOPER 3000Р",
      image: "https://ir.ozone.ru/s3/multimedia-8/wc750/6552428468.jpg",
    },
    {
      name: "Костюм классический DE`MARKE 2400Р",
      image: "https://ir.ozone.ru/s3/multimedia-k/wc750/6655717388.jpg",
    },
    {
      name: "Костюм классический S.LAPSHINA 3100Р",
      image: "https://ir.ozone.ru/s3/multimedia-7/wc750/6720148303.jpg",
    },
    {
      name: "Костюм спортивный PTAXX 1100Р",
      image: "https://ir.ozone.ru/s3/multimedia-i/wc750/6701220882.jpg",
    },
    {
      name: "Пижама Trendyol 700Р",
      image: "https://ir.ozone.ru/s3/multimedia-v/wc750/6490176931.jpg",
    },
    {
      name: "Костюм классический BmB 3900Р",
      image: "https://ir.ozone.ru/s3/multimedia-9/wc750/6367591725.jpg",
    },
    {
      name: "Платье SAIMEIQI 2600Р",
      image: "https://ir.ozone.ru/s3/multimedia-x/wc750/6801018153.jpg",
    },
    {
      name: "Костюм спортивный Mamashow 2400Р",
      image: "https://ir.ozone.ru/s3/multimedia-f/wc750/6776010699.jpg",
    },
    {
      name: "Ночная сорочка Совушка 1400Р",
      image: "https://ir.ozone.ru/s3/multimedia-f/wc750/6400689663.jpg",
    },
  ];

  const mensProducts = [
    {
      name: "Комплект одежды BrutStars 3400Р",
      image: "https://ir.ozone.ru/s3/multimedia-g/wc750/6653533264.jpg",
    },
    {
      name: "Костюм классический NAIJIE 1400Р",
      image: "https://ir.ozone.ru/s3/multimedia-y/wc750/6584725258.jpg",
    },
    {
      name: "Костюм классический BARKLAND 5000Р",
      image: "https://ir.ozone.ru/s3/multimedia-q/wc750/6226014434.jpg",
    },
    {
      name: "Костюм классический TM LIMITED 1400Р",
      image: "https://ir.ozone.ru/s3/multimedia-8/wc750/6705853928.jpg",
    },
    {
      name: "Комплект одежды AMAZING CLOTHES 2100Р",
      image: "https://ir.ozone.ru/s3/multimedia-3/wc750/6618511371.jpg",
    },
    {
      name: "Комплект одежды KEML DESIGN oversize 1600Р",
      image: "https://ir.ozone.ru/s3/multimedia-b/wc750/6604109615.jpg",
    },
    {
      name: "Комплект одежды Cherry-93 oversize 1500Р",
      image: "https://ir.ozone.ru/s3/multimedia-j/wc750/6643465687.jpg",
    },
    {
      name: "Комплект одежды SveTekst Домашний 900Р",
      image: "https://ir.ozone.ru/s3/multimedia-p/wc700/6574956313.jpg",
    },
    {
      name: "Комплект одежды BaZaMo 4400Р",
      image: "https://ir.ozone.ru/s3/multimedia-v/wc750/6723794515.jpg",
    },
    {
      name: "Костюм классический Marc De Cler 7100Р",
      image: "https://ir.ozone.ru/s3/multimedia-q/wc750/6218878406.jpg",
    },
  ];

  const unisexProducts = [
    {
      name: "Комплект одежды NAUR 3600Р",
      image: "https://ir.ozone.ru/s3/multimedia-m/wc750/6751657030.jpg",
    },
    {
      name: "Комплект одежды City Comfort Sport 4700Р",
      image: "https://ir.ozone.ru/s3/multimedia-5/wc750/6569816285.jpg",
    },
    {
      name: "Комплект одежды SveTekst Домашний 990Р",
      image: "https://ir.ozone.ru/s3/multimedia-g/wc700/6248675632.jpg",
    },
    {
      name: "Комплект одежды Mika Atelier COMFORT 3700Р",
      image: "https://ir.ozone.ru/s3/multimedia-g/wc750/6680749660.jpg",
    },
    {
      name: "Комплект одежды IvPROF-group 1100Р",
      image: "https://ir.ozone.ru/s3/multimedia-j/wc750/6730657723.jpg",
    },
  ];

  const [hoveredProduct, setHoveredProduct] = useState(null);
  const handleProductHover = (product) => {
    setHoveredProduct(product);
  };

  return (
    <div className="catalog">
      <div className="collection-label" id="womens-clothing">
        <p>ЖЕНСКОЕ</p>
      </div>

      <div className="product-list">
        {womensProducts.map((product, index) => (
          <div
            className="product"
            key={index}
            onMouseEnter={() => handleProductHover(product)}
            onMouseLeave={() => handleProductHover(null)}
          >
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <p>{product.name}</p>
            {hoveredProduct?.name === product.name && (
              <div className="product-overlay">
                <p>В корзину</p>
                <select>
                  <option value="1">42/164-166</option>
                  <option value="2">44/166-168</option>
                  <option value="3">46/168-170</option>
                  <option value="4">48/170-173</option>
                  <option value="5">50/173-176</option>
                  <option value="6">52/176-179</option>
                </select>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="collection-label" id="mens-clothing">
        <p>МУЖСКОЕ</p>
      </div>
      <div className="product-list">
        {mensProducts.map((product, index) => (
          <div
            className="product"
            key={index}
            onMouseEnter={() => handleProductHover(product)}
            onMouseLeave={() => handleProductHover(null)}
          >
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <p>{product.name}</p>
            {hoveredProduct?.name === product.name && (
              <div className="product-overlay">
                <p>В корзину</p>
                <select>
                  <option value="1">46/170-176</option>
                  <option value="2">48/182-188</option>
                  <option value="3">50/182-188</option>
                  <option value="4">52/182-188</option>
                  <option value="5">54/182-188</option>
                  <option value="6">56/188-190</option>
                </select>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="collection-label" id="unisex-clothing">
        <p>УНИСЕКС</p>
      </div>
      <div className="product-list">
        {unisexProducts.map((product, index) => (
          <div
            className="product"
            key={index}
            onMouseEnter={() => handleProductHover(product)}
            onMouseLeave={() => handleProductHover(null)}
          >
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <p>{product.name}</p>
            {hoveredProduct?.name === product.name && (
              <div className="product-overlay">
                <p>В корзину</p>
                <select>
                  <option value="1">40-42/170-176</option>
                  <option value="2">44-46/182-188</option>
                  <option value="3">48-50/182-188</option>
                  <option value="4">54-56/182-188</option>
                  <option value="5">60-62/182-188</option>
                </select>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalog;
