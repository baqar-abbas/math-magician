import React, { useState, useEffect } from 'react';

export default function Quotes() {
  const apiUrl = 'https://api.api-ninjas.com/v1/quotes/';
  const token = '7S0u6pLB1w+pswQwJ+9APw==KJCk7HlkqeXHsrvZ';
  const [quote, setQuote] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(apiUrl, {
      headers: { 'X-API-Key': `${token}` },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('An error occurred while fetching the quote.');
        }
        return res.json();
      })
      .then((data) => {
        setQuote(data[0].quote);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
        throw new Error(err);
      });
  }, []);
  return (
    <div className="quote">
      <span>{isLoading ? 'Loading ...' : ''}</span>
      <span>{error || ''}</span>
      {quote}
    </div>
  );
}
