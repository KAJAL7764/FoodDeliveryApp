// PopularFoods.jsx
import React from 'react';
import './PopularFoods.css';

const foods = [
  { name: 'Chilly Paneer Footlong', price: 35, img: 'https://images.unsplash.com/photo-1690401769082-5f475f87fb22?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hpbGxpJTIwcGFuZWVyfGVufDB8fDB8fHww' },
  { name: 'Chilly Garlic Bread', price: 55, img: 'https://media.istockphoto.com/id/1344196189/photo/indian-food-garlic-naan-bread.webp?a=1&b=1&s=612x612&w=0&k=20&c=kVa3PRjgzs1R3uDNhLpGD6G_1vcZ6dayVdxVYivhRHE=' },
  { name: 'Mutton King Burger', price: 85, img: 'https://images.unsplash.com/photo-1697862446672-4bd74cc476d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG11dHRvbnxlbnwwfHwwfHx8MA%3D%3D' },
  { name: 'Kebab Mutton Spicy', price: 97, img: 'https://images.unsplash.com/photo-1559203244-78de52adba0e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG11dHRvbnxlbnwwfHwwfHx8MA%3D%3D' },
  { name: 'Kebab Mutton Spicy', price: 97, img: 'https://images.unsplash.com/photo-1559203244-78de52adba0e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG11dHRvbnxlbnwwfHwwfHx8MA%3D%3D' },
  { name: 'Mutton King Burger', price: 85, img: 'https://images.unsplash.com/photo-1697862446672-4bd74cc476d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG11dHRvbnxlbnwwfHwwfHx8MA%3D%3D' },
  { name: 'Chilly Garlic Bread', price: 55, img: 'https://media.istockphoto.com/id/1344196189/photo/indian-food-garlic-naan-bread.webp?a=1&b=1&s=612x612&w=0&k=20&c=kVa3PRjgzs1R3uDNhLpGD6G_1vcZ6dayVdxVYivhRHE=' },
  { name: 'Chilly Paneer Footlong', price: 35, img: 'https://images.unsplash.com/photo-1690401769082-5f475f87fb22?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hpbGxpJTIwcGFuZWVyfGVufDB8fDB8fHww' },

];

const PopularFoods = () => {
  return (
    <div className="foods-section">
      <h3>Most Searched Foods</h3>
      <div className="food-grid">
        {foods.map((food, index) => (
          <div className="food-card" key={index}>
            <img src={food.img} alt={food.name} />
            <div>
              <h4>{food.name}</h4>
              <p>₹{food.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularFoods;
