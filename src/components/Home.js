import React from 'react';

export default function Home() {
  const lineheight = {
    wordSpacing: '0.2rem',
    fontSize: '18px',
    fontWeight: '500',
  };
  return (
    <div className="home-wrap">
      <h2>Welcome to our Home Page!</h2>
      <p style={lineheight}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Eos quod sit quos corporis laboriosam cupiditate omnis dignissimos,
        explicabo, voluptatum similique laudantium praesentium tempore.
        Recusandae culpa eos eius, sed ab quibusdam.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero corrupti ipsum,
        asperiores sed nihil reprehenderit officia harum earum recusandae nobis provident.
        Modi facere repellat fugiat quisquam quos tempore tempora aspernatur.
      </p>
      <p style={lineheight}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Eos quod sit quos corporis laboriosam cupiditate omnis dignissimos,
        explicabo, voluptatum similique laudantium praesentium tempore.
        Recusandae culpa eos eius, sed ab quibusdam.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero corrupti ipsum,
        asperiores sed nihil reprehenderit officia harum earum recusandae nobis provident.
        Modi facere repellat fugiat quisquam quos tempore tempora aspernatur.
      </p>
    </div>
  );
}
