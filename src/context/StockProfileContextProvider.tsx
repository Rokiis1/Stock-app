import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StockProfileContext } from './stockProfileContext';
import { Company } from '../interfaces/Company';
import { useQuery } from '@tanstack/react-query';


function StockProfileContextProvider(props: { children: React.ReactNode }) {
    const [symbol, setSymbol] = useState('');
    const { data, error, isLoading } = useQuery<Company[], Error>(
        ['stockProfile', symbol],
        async () => {
            const result = await axios.get(
                `https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=cbqbg0aad3i9b8tff7f0`
            );
            return [result.data];
        }
    );

    return (
        <StockProfileContext.Provider
            value={{ symbol, data: data || [], error: error || null, loading: isLoading, setSymbol }}
        >
            {props.children}
        </StockProfileContext.Provider>
    );
}
export default StockProfileContextProvider