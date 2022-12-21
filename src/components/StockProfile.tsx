import React, { useContext, useState } from 'react';
import { StockProfileContext } from '../context/stockProfileContext';
import { Company } from '../interfaces/Company';

function StockProfile() {
  const { data, error, loading, setSymbol } = useContext(StockProfileContext);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSymbol(searchTerm);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {!data && <div>No data</div>}
      {data && (
        <div>
          {data?.map((company: Company) => (
            <div key={company.ticker}>
              <h1>{company.name}</h1>
              <p>{company.exchange}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default StockProfile