import React from 'react';
// css
import './css/groupCard.css';

export default function Card({ ...list }) {
  const { id, name, contributions } = list;
  return (
    <section className='group-card-container'>
      <div>
        <h3>{name}</h3>
        <p>{contributions}</p>
      </div>
    </section>
  );
}
