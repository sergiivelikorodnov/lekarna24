import CurrencySwitcher from '../HeaderUI/currency-switcher';
import LanguageSwitcher from '../HeaderUI/language-switcher';
import PreheaderInfo from './preheader-info';
import PreheaderMenu from './preheader-menu';

function PreheaderContainer(): JSX.Element{
  return (
    <div className="mad-pre-header">
      <div className="container">
        <div className="mad-header-items">
          <div className="mad-header-item">
            <PreheaderInfo/>
          </div>
          <div className="mad-header-item">
            <PreheaderMenu />
            <div className="mad-config">
              <LanguageSwitcher/>
              <CurrencySwitcher/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreheaderContainer;
