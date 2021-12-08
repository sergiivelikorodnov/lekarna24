import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Languages } from '../../../../const';

function LanguageSwitcher(): JSX.Element{
  const [isDropdownOpening, setDropdownOpening] = useState(false);
  const setDropDownHandler = () => {
    setDropdownOpening(!isDropdownOpening);
  };

  const [language, setLanguage] = useState(Languages.English);
  const setLanguageHandler = (value:Languages) => {
    setLanguage(value);
  };

  return (
    <div className={`mad-dropdown mad-lang ${isDropdownOpening ? 'mad-dropdown--opened' : ''}`}>
      <Link to="/"
        onClick={() => {
          setDropDownHandler();
        }}
        className="mad-dropdown-title"
      >
        {language}
      </Link>
      <ul className="mad-dropdown-element">
        {Object.values(Languages).map((value) => (
          <li key={value}>
            <Link to="/" key={value} onClick={() => {setLanguageHandler(value); setDropdownOpening(false);}}>{value}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LanguageSwitcher;
