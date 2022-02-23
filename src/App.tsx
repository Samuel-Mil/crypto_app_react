import { useEffect, useState } from "react";
import axios from "axios";
import { Coin } from "./components/Coin";
import { Header } from "./components/Header";
import "./App.css";

interface ICoin{
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  total_volume: number;
  market_cap: number;
  price_change_percentage_24h: number;
}

function App() {
  const url =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";


  const [coins, setCoins] = useState<ICoin[]>([]);
  const [search, setSearch] = useState('');

  useEffect(()=>{
    axios.get(url).then((res) => {
      setCoins(res.data);
    }).catch(error => console.log(error));
  }, []);

  const handleChange = (e: any) => {
    setSearch(e.target.value);
  }

  const filteredCoins = coins.filter(coin => {
    return coin.name.toLowerCase().includes(search.toLowerCase());
  })

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search a currency</h1>
        <form>
          <input type="text" placeholder="Search" className="coin-input" onChange={handleChange}/>
        </form>
      </div>

      {filteredCoins.map(coin=>{
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            volume={coin.total_volume}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            marketcap={coin.market_cap}
          />
        )
      })}
    </div>
  );
}

export default App
