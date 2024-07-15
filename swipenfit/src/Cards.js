import React, { useState, useEffect, useRef } from "react";
import Papa from "papaparse";
import "./Cards.css";

function TinderCards() {
  const [products, setProducts] = useState([]);
  const [wishlistMessage, setWishlistMessage] = useState(null);
  const csvFilePath = `${process.env.PUBLIC_URL}/Fashion Dataset v2.csv`;
  const cardRefs = useRef([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(csvFilePath);
        const reader = response.body.getReader();
        const result = await reader.read(); // raw array
        const decoder = new TextDecoder("utf-8");
        const csv = decoder.decode(result.value); // the csv text
        const parsedData = Papa.parse(csv, { header: true }).data; // parse the CSV

        console.log(parsedData); // Log the parsed data to verify
        setProducts(parsedData);
      } catch (error) {
        console.error("Error fetching and parsing CSV data:", error);
      }
    }

    fetchData();
  }, [csvFilePath]);

  const handleMove = (card, x, y) => {
    const offsetX = x - card.startX;
    const offsetY = y - card.startY;
    const rotate = offsetX * 0.1;
    card.style.transform = `translate(${offsetX}px, ${offsetY}px) rotate(${rotate}deg)`;

    if (Math.abs(offsetY) > card.clientHeight * 0.7) {
      // Consider it a swipe up if vertical displacement is greater than horizontal displacement
      card.dismiss(2);
    } else if (Math.abs(offsetX) > card.clientWidth * 0.7) {
      card.dismiss(offsetX > 0 ? 1 : -1);
    }
  };

  const handleMouseMove = (card, e) => {
    e.preventDefault();
    if (!card.startX) return;
    handleMove(card, e.clientX, e.clientY);
  };

  const handleTouchMove = (card, e) => {
    if (!card.startX) return;
    const touch = e.changedTouches[0];
    if (!touch) return;
    handleMove(card, touch.clientX, touch.clientY);
  };

  const handleEnd = (card) => {
    card.startX = null;
    document.removeEventListener('mousemove', card.mouseMoveHandler);
    document.removeEventListener('touchmove', card.touchMoveHandler);
    card.style.transform = '';
  };

  const dismiss = (card, direction) => {
    card.startX = null;
    document.removeEventListener('mousemove', card.mouseMoveHandler);
    document.removeEventListener('touchmove', card.touchMoveHandler);
    card.style.transition = 'transform 1s';
    
    if (direction === 2) {
      card.style.transform = `translate(0, -${window.innerHeight}px) rotate(0deg)`;
      setWishlistMessage(`Item "${card.dataset.name}" added to wishlist!`);
      setTimeout(() => setWishlistMessage(null), 2000); // Hide the message after 2 seconds
    } else {
      card.style.transform = `translate(${direction * window.innerWidth}px, ${card.offsetY}px) rotate(${90 * direction}deg)`;
    }

    card.classList.add('dismissing');
    setTimeout(() => {
      card.remove();
    }, 1000);
  };

  useEffect(() => {
    const cards = cardRefs.current;
    cards.forEach((card, index) => {
      card.startX = null;

      const handleMouseDown = (e) => {
        card.startX = e.clientX;
        card.startY = e.clientY;
        card.mouseMoveHandler = (e) => handleMouseMove(card, e);
        document.addEventListener('mousemove', card.mouseMoveHandler);
        card.style.transition = 'transform 0s';
      };

      const handleTouchStart = (e) => {
        const touch = e.changedTouches[0];
        if (!touch) return;
        card.startX = touch.clientX;
        card.startY = touch.clientY;
        card.touchMoveHandler = (e) => handleTouchMove(card, e);
        document.addEventListener('touchmove', card.touchMoveHandler);
        card.style.transition = 'transform 0s';
      };

      card.addEventListener('mousedown', handleMouseDown);
      card.addEventListener('touchstart', handleTouchStart);
      document.addEventListener('mouseup', () => handleEnd(card));
      document.addEventListener('touchend', () => handleEnd(card));

      card.dismiss = (direction) => dismiss(card, direction);
    });
  }, [products]);

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {products.map((product, index) => (
          <div
            className="card"
            key={product.p_id || index}
            ref={(el) => (cardRefs.current[index] = el)}
            data-name={product.name} // Store product name in data attribute
          >
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
          </div>
        ))}
      </div>
      {wishlistMessage && <div className="wishlistMessage">{wishlistMessage}</div>}
    </div>
  );
}

export default TinderCards;
