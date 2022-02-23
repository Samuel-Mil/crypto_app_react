import "./style.css";

interface ICoinRequest {
  image: string;
  name: string;
  symbol: string;
  price: number;
  volume: number;
  priceChange: number;
  marketcap: number;
}

function Coin({image, name, symbol, price, volume, priceChange, marketcap}: ICoinRequest){
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">${price}</p>
          <p className="coin-volume">${volume.toLocaleString()}</p>
          {
            priceChange < 0 ? (
              <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
              ) : (
              <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
            )
          }
          <p className="coin-market-cap">Mkt cap: ${marketcap.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}

export {Coin};
