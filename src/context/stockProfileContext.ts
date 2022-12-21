import { createContext } from 'react';
import { Company } from '../interfaces/Company';

export interface StockProfileContextValue {
  symbol: string;
  data: Company[];
  error: any;
  loading: boolean;
  setSymbol: (symbol: string) => void;
}

const StockProfileContext = createContext<StockProfileContextValue>({
  symbol: "",
  data: [],
  error: null,
  loading: false,
  setSymbol: () => {},
});

export { StockProfileContext };