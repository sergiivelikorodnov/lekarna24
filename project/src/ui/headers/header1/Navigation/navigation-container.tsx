import BrowseCategories from './browse-categories';
import FreeShipping from './free-shipping';
import Navigation from './navigation';

function HeaderContainer(): JSX.Element{
  return (
    <div className="container">
      <div className="mad-header-items">
        <BrowseCategories/>
        <Navigation />
        <FreeShipping/>
      </div>
    </div>
  );
}

export default HeaderContainer;
