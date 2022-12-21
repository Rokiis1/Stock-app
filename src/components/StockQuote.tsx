import { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { StockProfileContext } from '../context/stockProfileContext';
import axios from 'axios';
import { StockPrice } from '../interfaces/StockPrice';

function StockQuote() {
    const { symbol } = useContext(StockProfileContext);
  const { data: priceData, error, isLoading} = useQuery<StockPrice, Error>(
    ['stockPrice', symbol],
    async () => {
      const result = await axios.get(
        `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=cbqbg0aad3i9b8tff7f0`
      );
      return result.data;
    }
  );

    if (isLoading) {
    return <div>Loading stock price...</div>;
  }

    if (error) {
        return <div>Error loading stock price: {error.message}</div>;
  }

  if (!priceData) {
    return <div>No stock price data</div>;
  }

  return <div>Current stock price: ${priceData.c}</div>;
}

export default StockQuote