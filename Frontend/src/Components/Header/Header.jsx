// import React from 'react';
// import './Header.css';
// import headerDish from '../../assets/drink01.png';
// import food1 from '../../assets/food_27.png';
// import food2 from '../../assets/food_26.png';
// import food3 from '../../assets/food_2.png';
// import food4 from '../../assets/food_22.png';

// const foodItems = [
//   { name: "Must Explain", price: "$15.00", reviews: "2.5k", rating: "4.5⭐", img: food1 },
//   { name: "Must Explain", price: "$25.00", reviews: "2.5k", rating: "4.5⭐", img: food2 },
//   { name: "Must Explain", price: "$35.00", reviews: "2.5k", rating: "4.5⭐", img: food3 },
//   { name: "Must Explain", price: "$15.00", reviews: "2.5k", rating: "4.5⭐", img: food4 },
// ];

// const Header = () => {
//   return (
//     <div className="modern-header">
//       <div className="left">
//         <span className="tag">CHECKING THE PROXY! 🥙</span>
//         <h1>Taste the Best that<br />Surprise you</h1>
//         <p>
//           An effective advertising slogan gives an accurate picture of what your Fast Food Business is all about.
//         </p>
//         <div className="price-row">
//           <span className="price">$15.00</span>
//           <span className="cut-price">$25.00</span>
//         </div>
//         <div className="header-buttons">
//           <button className="buy-btn">Buy Now</button>
//           <button className="menu-btn">See Menu</button>
//         </div>
//       </div>

//       <div className="right">
//         <img src={headerDish} alt="Food Dish" className="main-dish" />
//       </div>

//       <div className="bottom-cards">
//         {foodItems.map((item, i) => (
//           <div className="food-card" key={i}>
//             <img src={item.img} alt={item.name} />
//             <h4>{item.name}</h4>
//             <p>at first</p>
//             <div className="card-info">
//               <span className='price'>{item.price}</span>
//               <span>{item.reviews} Reviews</span>
//               <span>{item.rating}</span>
//             </div>
//             <button className="cart-icon">🛒</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Header;


import React from 'react';
import './Header.css';
import { motion } from 'framer-motion';
import headerDish from '../../assets/drink01.png';
import food1 from '../../assets/food_27.png';
import food2 from '../../assets/food_26.png';
import food3 from '../../assets/food_2.png';
import food4 from '../../assets/food_22.png';

const foodItems = [
  { name: "Must Explain", price: "$15.00", reviews: "2.5k", rating: "4.5⭐", img: food1 },
  { name: "Must Explain", price: "$25.00", reviews: "2.5k", rating: "4.5⭐", img: food2 },
  { name: "Must Explain", price: "$35.00", reviews: "2.5k", rating: "4.5⭐", img: food3 },
  { name: "Must Explain", price: "$15.00", reviews: "2.5k", rating: "4.5⭐", img: food4 },
];

const Header = () => {
  return (
    <div className="modern-header">
      <div className="left">
        <span className="tag">CHECKING THE PROXY! 🥙</span>
        <h1>Taste the Best that<br />Surprise you</h1>
        <p>
          An effective advertising slogan gives an accurate picture of what your Fast Food Business is all about.
        </p>
        <div className="price-row">
          <span className="price">$15.00</span>
          <span className="cut-price">$25.00</span>
        </div>
        <div className="header-buttons">
          <button className="buy-btn">Buy Now</button>
          <button className="menu-btn">See Menu</button>
        </div>
      </div>

      <div className="right">
        <motion.img
          src={headerDish}
          alt="Food Dish"
          className="main-dish"
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
      </div>

      <div className="bottom-cards">
        {foodItems.map((item, i) => (
          <motion.div
            className="food-card"
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
          >
            <img src={item.img} alt={item.name} />
            <h4>{item.name}</h4>
            <p>at first</p>
          <div className="card-info">
  <div className="left-info">
    <span>{item.reviews} Reviews</span>
  </div>
  <div className="right-info">
    <span>{item.price}</span>
    <span>{item.rating}</span>
  </div>
</div>

            <motion.button
              className="cart-icon"
              whileHover={{ scale: 1.2, rotate: 15 }}
              whileTap={{ scale: 0.9, rotate: -15 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              🛒
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Header;
