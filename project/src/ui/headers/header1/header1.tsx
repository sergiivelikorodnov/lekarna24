import Logo from './HeaderUI/logo';
import PreheaderContainer from './Preheader/preheader-container';
import SearchInput from './HeaderUI/search-input';
import ShopElementsContainer from './ShopHeaderUI/shop-elements-container';
import HeaderContainer from './Navigation/navigation-container';


function Header1(): JSX.Element {
  return (
    <header id="mad-header" className="mad-header">
      <PreheaderContainer />
      <div className="mad-header-section">
        <div className="container">
          <div className="row align-items-center">
            <Logo />
            <SearchInput />
            <ShopElementsContainer />
          </div>
        </div>
      </div>
      <div className="mad-header-section--sticky-xl">
        <HeaderContainer/>
      </div>
    </header>
  );
}

export default Header1;
