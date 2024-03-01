import React from 'react';

interface StockCardProps {
  logo_url: string;
  longName: string;
  symbol: string;
  regularMarketPrice: number;
  regularMarketChangePercent: number;
}

const StockCard: React.FC<StockCardProps> = ({
  logo_url,
  longName,
  symbol,
  regularMarketPrice,
  regularMarketChangePercent,
}) => {
  return (
    <div className=" my-6 rounded-lg shadow-md p-4" style={{backgroundColor:"#131C40"}}>
      <div className="flex justify-between items-center">
        <div className="flex items-center ml-8">
          <img src={logo_url} alt={longName} className="w-16 h-16 mr-2" />
          <div>
            <div className="text-lg text-white font-semibold">{longName}</div>
            <div className="text-sm text-white">{symbol}</div>
          </div>
        </div>
        <div className="text-yellow-500">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-16" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 0 1 .774.37l2.914 3.5 5.236.763a1 1 0 0 1 .553 1.705l-3.763 3.071 1.105 5.784a1 1 0 0 1-1.451 1.056L10 15.254l-4.908 2.878a1 1 0 0 1-1.451-1.056l1.105-5.784-3.763-3.07a1 1 0 0 1 .553-1.705l5.236-.763L9.226 2.37A1 1 0 0 1 10 2zm0 2.449l-1.645 1.982a1 1 0 0 1-.69.387l-2.158.314 1.56-1.274a1 1 0 0 1 .315-1.71L8.6 4.073l.736-3.862a1 1 0 0 1 1.825-.006l.736 3.868 2.462.358a1 1 0 0 1 .555 1.705l-1.797 1.47.61 3.207a1 1 0 0 1-.314 1.713l-2.084 1.377 2.084 1.376a1 1 0 0 1 .316 1.712l-.61 3.207 1.797-1.469a1 1 0 0 1 .555-1.705l2.462-.359-.737-3.861a1 1 0 0 1 1.825-.006l.736 3.864.004.003a1 1 0 0 1-.382.877l-1.645 1.275 2.158.314a1 1 0 0 1 .69.386l1.645 1.982-.736-3.863a1 1 0 0 1 .311-.883l1.336-1.098-2.022-.294a1 1 0 0 1-.752-.546L10 6.38l-.782 4.092a1 1 0 0 1-.751.547l-2.022.293 1.336 1.098a1 1 0 0 1 .311.883l-.736 3.862z"
                  clipRule="evenodd"
                />
              </svg>
        </div>
      </div>
      <div className="mt-12 flex flex-row justify-between">
    <div>
        <div className="text-xl ml-10 font-semibold">{regularMarketPrice} (USDT)</div>
        <div className={`text-sm pt-1 ml-10 ${regularMarketChangePercent >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            {regularMarketChangePercent >= 0 ? '+' : '-'}
            {regularMarketChangePercent.toFixed(2)}%
        </div>
    </div>
    <button className="mt-4 bg-violet-500 text-white px-4 py-2 rounded-md text-sm mr-10">Add to Wishlist</button>
</div>
    </div>
  );
};

export default StockCard;
