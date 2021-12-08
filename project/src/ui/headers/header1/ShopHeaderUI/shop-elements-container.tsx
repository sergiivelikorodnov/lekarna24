import HeaderCompare from './header-compare';
import HeaderFavorite from './header-favorite';
import HeaderLogin from './header-login';
import HeaderShoppingCart from './header-shoping-cart';

function ShopElementsContainer (): JSX.Element {
  return (
    <div className="col-xl-3 col-lg-4 col-sm-6">
      <div className="mad-actions">
        <HeaderCompare />
        <HeaderFavorite />
        <HeaderLogin />
        <HeaderShoppingCart />
      </div>
    </div>
  );
}

export default ShopElementsContainer;
