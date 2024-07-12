import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import Papa from "papaparse";
import "./Cards.css";

function TinderCards() {
  const [products, setProducts] = useState([]);
  const csvFilePath = `${process.env.PUBLIC_URL}/Fashion Dataset v2.csv`; // Reference to the CSV file

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
  }, [csvFilePath]); // Add csvFilePath to the dependency array

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen");
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {products.map((product, index) => (
          <TinderCard
            className="swipe"
            key={product.p_id || index} // Use index as a fallback if p_id is not unique or undefined
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, product.name)}
            onCardLeftScreen={() => outOfFrame(product.name)}
          >
            <div
              style={{ backgroundImage: `url(${product.img})` }}
              className="card"
            >
              <h3>{product.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
