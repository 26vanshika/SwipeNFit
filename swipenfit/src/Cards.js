import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import  './Cards.css';

function Cards() {

    const[people, setPeople] = useState([
        {
            name: 'steve jobs',
            url: 'https://upload.wikimedia.org/wikipedia/en/e/e4/Steve_Jobs_by_Walter_Isaacson.jpg'
        },
        {
            name: 'mark zuckerburg',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/440px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg'
        }
    ]);


  return (
    <div>
      <h1>Cards</h1>

      <div className='swipeCards__cardContainer'>
      {people.map(person => (
        <TinderCard
            className='swipe'
            key={person.name}
            preventSwipe={['down']}
        
        >
            <div 
            style = {{ backgroundImage: `url(${person.url})` }}
            className='card'>
                <h3>{person.name}</h3>
            </div>
        </TinderCard>
      ))}
      </div>   
    </div>
  )
}

export default Cards
