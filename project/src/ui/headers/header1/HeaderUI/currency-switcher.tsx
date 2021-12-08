import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Currencies } from '../../../../const';

function CurrencySwitcher(): JSX.Element{
  const [isDropdownOpening, setDropdownOpening] = useState(false);
  const setDropDownHandler = () => {
    setDropdownOpening(!isDropdownOpening);
  };

  const [currentCurrency, setCurrentCurrency] = useState(Currencies.USD);
  const setCurrentCurrencyHandler = (value:Currencies) => {
    setCurrentCurrency(value);
  };

  return (
    <div className={`mad-dropdown mad-price ${isDropdownOpening ? 'mad-dropdown--opened' : ''}`}>
      <Link to="/"
        className="mad-dropdown-title"
        onClick={() => {
          setDropDownHandler();
        }}
      >
        {currentCurrency}
      </Link>
      <ul className="mad-dropdown-element">
        {Object.values(Currencies).map((value) => (
          <li key={value}>
            <Link to="/" key={value} onClick={() => {setCurrentCurrencyHandler(value); setDropdownOpening(false);}}>{value}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CurrencySwitcher;
