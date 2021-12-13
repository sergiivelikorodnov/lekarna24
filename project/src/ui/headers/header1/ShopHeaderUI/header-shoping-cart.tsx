function HeaderShoppingCart(): JSX.Element{
  return (
    <div className="mad-col mad-dropdown-cart">
      <a href="shop_cart.html" className="mad-dropdown-title">
        <i className="material-icons-outlined">
                      shopping_bag<span>3</span>
        </i>
        <span className="price-text">$49.99</span>
      </a>
      <div className="shopping-cart mad-dropdown-element">
        <div className="mad-products hr-type style-2">
          <div className="mad-product">
            <button className="mad-close-item">
              <i className="material-icons-outlined">close</i>
            </button>
            <div className="mad-product-image">
              <img src="images/96x96_product1.jpg" alt="" />
            </div>
            <div className="mad-col">
              {/* <!-- product-info --> */}
              <div className="mad-product-description">
                <h6 className="mad-product-title">
                  <a
                    href="shop_layout_boxed.html"
                    className="mad-link"
                  >
                                John Plunkett Super­Fade Face Cream ...
                  </a>
                </h6>
              </div>
              {/* <!--/ product-info --> */}
              <div className="mad-product-info">
                <div className="mad-info-item">
                  <div className="mad-product-price">
                                1 x $17.99
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mad-product">
            <button className="mad-close-item">
              <i className="material-icons-outlined">close</i>
            </button>
            <div className="mad-product-image">
              <img src="images/96x96_product2.jpg" alt="" />
            </div>
            <div className="mad-col">
              {/* <!-- product-info --> */}
              <div className="mad-product-description">
                <h6 className="mad-product-title">
                  <a
                    href="shop_layout_boxed.html"
                    className="mad-link"
                  >
                                Minea For Men Extra Moisturising ...
                  </a>
                </h6>
              </div>
              {/* <!--/ product-info --> */}
              <div className="mad-product-info">
                <div className="mad-info-item">
                  <div className="mad-product-price">1 x $7.95</div>
                </div>
              </div>
            </div>
          </div>
          <div className="mad-product">
            <button className="mad-close-item">
              <i className="material-icons-outlined">close</i>
            </button>
            <div className="mad-product-image">
              <img src="images/96x96_product3.jpg" alt="" />
            </div>
            <div className="mad-col">
              {/* <!-- product-info --> */}
              <div className="mad-product-description">
                <h6 className="mad-product-title">
                  <a
                    href="shop_layout_boxed.html"
                    className="mad-link"
                  >
                                Posken Intensive Moisture Body ...
                  </a>
                </h6>
              </div>
              {/* <!--/ product-info --> */}
              <div className="mad-product-info">
                <div className="mad-info-item">
                  <div className="mad-product-price">
                                1 x $12.99
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sc-footer">
          <div className="subtotal">Subtotal: $38.93</div>
          <div className="btn-set">
            <a href="#" className="btn btn-small btn-style-7">
                          View Cart
            </a>
            <a href="shop_checkout.html" className="btn btn-small">
                          Checkout
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderShoppingCart;
