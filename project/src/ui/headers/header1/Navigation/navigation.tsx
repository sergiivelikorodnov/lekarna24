// import { useState } from 'react';

function Navigation(): JSX.Element{
  /* const [selectedMenu, setSelectedMenu] = useState(false);
  const setSelectedMenuHandler = () => {
    setSelectedMenu(!selectedMenu);
  }; */

  return (
    <nav className="mad-navigation-container">
      <ul className="mad-navigation mad-navigation--vertical-sm">
        <li
          className="menu-item menu-item-has-children home-menu mega-menu"
        >
          <a href="#">Home</a>
          {/* <!--================ Sub Menu ================--> */}
          <ul className="sub-menu">
            <li className="mad-home-title">
              <div className="mad-home-menu-title">
                        Choose Your Demo
              </div>
            </li>
            <li className="menu-item">
              <a href="index.html">
                <div className="home-menu-img">
                  <img src="images/197x200_home1.jpg" alt="" />
                </div>
                        Home v1
              </a>
            </li>
            <li className="menu-item">
              <a href="home_2.html">
                <div className="home-menu-img">
                  <img src="images/197x200_home2.jpg" alt="" />
                </div>
                        Home v2
              </a>
            </li>
            <li className="menu-item">
              <a href="home_3.html">
                <div className="home-menu-img">
                  <img src="images/197x200_home3.jpg" alt="" />
                </div>
                        Home v3
              </a>
            </li>
            <li className="menu-item">
              <a href="home_4.html">
                <div className="home-menu-img">
                  <img src="images/197x200_home4.jpg" alt="" />
                </div>
                        Home v4
              </a>
            </li>
            <li className="menu-item">
              <a href="pages_coming_soon.html">
                <div className="home-menu-img">
                  <img src="images/197x200_home5.jpg" alt="" />
                </div>
                        Coming soon
              </a>
            </li>
          </ul>
          {/* <!--================ End of Sub Menu ================--> */}
        </li>
        <li
          className="menu-item menu-item-has-children mega-menu"
        >
          <a href="#">Shop</a>
          {/* <!--================ Sub Menu ================--> */}
          <ul className="sub-menu">
            <li className="menu-item menu-item-has-children">
              <a href="#" className="sub-title">
                        With Sidebar Layouts
              </a>
              {/* <!--================ Sub Menu ================--> */}
              <ul className="sub-menu">
                <li className="menu-item">
                  <a href="shop_grid_2c_sidebar.html">2 Column Grid</a>
                </li>
                <li className="menu-item">
                  <a href="shop_grid_3c_sidebar.html">3 Column Grid</a>
                </li>
                <li className="menu-item">
                  <a href="shop_grid_4c_sidebar.html">4 Column Grid</a>
                </li>
                <li className="menu-item">
                  <a href="shop_list_sidebar.html">List View</a>
                </li>
                <li className="menu-item">
                  <a href="shop_grid_3c_full_sidebar.html">
                            3 Column Full Width Grid
                  </a>
                </li>
                <li className="menu-item">
                  <a href="shop_grid_4c_full_sidebar.html">
                            4 Column Full Width Grid
                  </a>
                </li>
                <li className="menu-item">
                  <a href="shop_grid_5c_full_sidebar.html">
                            5 Column Full Width Grid
                  </a>
                </li>
              </ul>
              {/* <!--================ End of Sub Menu ================--> */}
            </li>
            <li className="menu-item menu-item-has-children">
              <a href="#" className="sub-title">
                        No Sidebar Layouts
              </a>
              {/* <!--================ Sub Menu ================--> */}
              <ul className="sub-menu">
                <li className="menu-item">
                  <a href="shop_grid_3c.html">3 Column Grid</a>
                </li>
                <li className="menu-item">
                  <a href="shop_grid_4c.html">4 Column Grid</a>
                </li>
                <li className="menu-item">
                  <a href="shop_grid_5c.html">5 Column Grid</a>
                </li>

                <li className="menu-item">
                  <a href="shop_grid_4c_full.html">
                            4 Column Full Width Grid
                  </a>
                </li>
                <li className="menu-item">
                  <a href="shop_grid_5c_full.html">
                            5 Column Full Width Grid
                  </a>
                </li>
                <li className="menu-item">
                  <a href="shop_grid_6c_full.html">
                            6 Column Full Width Grid
                  </a>
                </li>
              </ul>
              {/*  <!--================ End of Sub Menu ================--> */}
            </li>
            <li className="menu-item menu-item-has-children">
              <a href="#" className="sub-title">
                        Category Layouts
              </a>
              {/* <!--================ Sub Menu ================--> */}
              <ul className="sub-menu">
                <li className="menu-item">
                  <a href="shop_category.html">Only Categories</a>
                </li>
                <li className="menu-item">
                  <a href="shop_grid_4c.html">Icon Categories</a>
                </li>
                <li className="menu-item">
                  <a href="shop_grid_4c_full.html">Image Categories</a>
                </li>
                <li className="menu-item">
                  <a href="shop_grid_5c.html">Background Image</a>
                </li>
                <li className="menu-item">
                  <a href="shop_grid_3c_sidebar.html">Image Slider</a>
                </li>
                <li className="menu-item">
                  <a href="shop_grid_4c_sidebar.html">
                            Category Banner
                  </a>
                </li>
                <li className="menu-item">
                  <a href="shop_grid_5c_full.html">
                            Special Deal Section
                  </a>
                </li>
              </ul>
              {/*  <!--================ End of Sub Menu ================--> */}
            </li>
            <li className="menu-item menu-item-has-children">
              <a href="#" className="sub-title">
                        Filter Positions
              </a>
              {/*  <!--================ Sub Menu ================--> */}
              <ul className="sub-menu">
                <li className="menu-item">
                  <a href="shop_grid_3c_sidebar.html">Visible Filter</a>
                </li>
                <li className="menu-item">
                  <a href="shop_filter_drawer.html">Filter Drawer</a>
                </li>
                <li className="menu-item">
                  <a href="shop_filter_toggle.html">Toggle Filter</a>
                </li>
                <li className="menu-item">
                  <a href="shop_filter_canvas.html">
                            Filter Off Canvas
                  </a>
                </li>
              </ul>
              {/*  <!--================ End of Sub Menu ================--> */}
              <a href="#" className="sub-title">
                        Pagination Variations
              </a>
              {/*  <!--================ Sub Menu ================--> */}
              <ul className="sub-menu">
                <li className="menu-item">
                  <a href="shop_grid_4c.html">Loading Infinity</a>
                </li>
                <li className="menu-item">
                  <a href="shop_list_sidebar.html">Load More Button</a>
                </li>
              </ul>
              {/* <!--================ End of Sub Menu ================--> */}
            </li>
            <li className="menu-item menu-item-has-children">
              <a href="#" className="sub-title">
                        Product Layouts
              </a>
              {/*  <!--================ Sub Menu ================--> */}
              <ul className="sub-menu">
                <li className="menu-item">
                  <a href="shop_layout_default.html">Default</a>
                </li>
                <li className="menu-item">
                  <a href="shop_layout_boxed.html">
                            Boxed With Sidebar
                  </a>
                </li>
                <li className="menu-item">
                  <a href="shop_layout_info.html">Extended Info</a>
                </li>
                <li className="menu-item">
                  <a href="shop_layout_gallery.html">Gallery</a>
                </li>
                <li className="menu-item">
                  <a href="shop_layout_sticky_info.html">Sticky Info</a>
                </li>
                <li className="menu-item">
                  <a href="shop_layout_full_sidebar.html">
                            Full Width With Sidebar
                  </a>
                </li>
                <li className="menu-item">
                  <a href="shop_layout_full_grid.html">
                            Full Width Grid
                  </a>
                </li>
              </ul>
              {/*  <!--================ End of Sub Menu ================--> */}
            </li>
            <li className="menu-item menu-item-has-children">
              <a href="#" className="sub-title">
                        Product Types
              </a>
              {/*  <!--================ Sub Menu ================--> */}
              <ul className="sub-menu">
                <li className="menu-item">
                  <a href="shop_layout_default.html">Simple</a>
                </li>
                <li className="menu-item">
                  <a href="shop_layout_sticky_info.html">Grouped</a>
                </li>
                <li className="menu-item">
                  <a href="shop_layout_boxed.html">Variable</a>
                </li>
                <li className="menu-item">
                  <a href="shop_layout_full_sidebar.html">
                            External/Affiliate
                  </a>
                </li>
                <li className="menu-item">
                  <a href="shop_layout_gallery.html">On Sale</a>
                </li>
                <li className="menu-item">
                  <a href="shop_layout_full_grid.html">Out Of Stock</a>
                </li>
              </ul>
              {/* <!--================ End of Sub Menu ================--> */}
            </li>
            <li className="menu-item menu-item-has-children">
              <a href="#" className="sub-title">
                        Shop Pages
              </a>
              {/*  <!--================ Sub Menu ================--> */}
              <ul className="sub-menu">
                <li className="menu-item">
                  <a href="shop_cart.html">Cart</a>
                </li>
                <li className="menu-item">
                  <a href="shop_checkout.html">Checkout</a>
                </li>
                <li className="menu-item">
                  <a href="shop_wishlist.html">Wishlist</a>
                </li>
                <li className="menu-item">
                  <a href="shop_account.html">My Account</a>
                </li>
              </ul>
              {/*  <!--================ End of Sub Menu ================--> */}
            </li>
          </ul>
          {/*   <!--================ End of Sub Menu ================--> */}
        </li>
        <li
          className="menu-item menu-item-has-children"
        >
          <a href="#">Pages</a>
          {/*  <!--================ Sub Menu ================--> */}
          <div className="sub-menu with-aside">
            <ul>
              <li className="menu-item">
                <a href="pages_about_v1.html">About v1</a>
              </li>
              <li className="menu-item">
                <a href="pages_about_v2.html">About v2</a>
              </li>
              <li className="menu-item">
                <a href="pages_contact_v1.html">Contact v1</a>
              </li>
              <li className="menu-item">
                <a href="pages_contact_v2.html">Contact v2</a>
              </li>
              <li className="menu-item">
                <a href="pages_faq.html">FAQs</a>
              </li>
              <li className="menu-item">
                <a href="pages_coming_soon.html">Coming Soon Page</a>
              </li>
              <li className="menu-item">
                <a href="pages_404.html">404 Page</a>
              </li>
            </ul>
            <div className="sub-menu-aside">
              <div className="mad-banners">
                <a
                  href="https://themeforest.net/user/monkeysan/portfolio"
                  className="banner-link"
                  target="_blank"
                  rel="noreferrer"
                >
                </a>
                <div
                  className="mad-banner"
                  data-bg-image-src="images/584x320_img1.jpg"
                >
                  <div className="content-element-4">
                    <div className="content-element-3">
                      <img src="images/life_ext.png" alt="" />
                    </div>
                    <h6 className="mad-title color-red style-3">
                              Save Up To
                    </h6>
                    <h2 className="mad-title color-red style-3 big-title">
                              25% OFF
                    </h2>
                    <h3 className="mad-title style-2">
                              On Selected Products
                    </h3>
                  </div>
                  <div className="content-element-4">
                    <a href="#" className="btn btn-style-4">
                              Shop Now!
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--================ End of Sub Menu ================--> */}
        </li>
        <li className="menu-item menu-item-has-children mega-menu">
          <a href="#">Elements</a>
          {/*  <!--================ Sub Menu ================--> */}
          <ul className="sub-menu">
            <li className="menu-item menu-item-has-children">
              <a href="#" className="sub-title">
                        General Elements <span className="no-title">1</span>
              </a>
              {/*  <!--================ Sub Menu ================--> */}
              <ul className="sub-menu">
                <li className="menu-item">
                  <a href="elements_accordions_toggles.html">
                            Accordions &amp; Toggles
                  </a>
                </li>
                <li className="menu-item">
                  <a href="elements_alert_boxes_buttons.html">
                            Alert Boxes &amp; Buttons
                  </a>
                </li>
                <li className="menu-item">
                  <a href="elements_banners.html">
                            Banners and Sliders
                  </a>
                </li>
                <li className="menu-item">
                  <a href="elements_call_to_actions.html">
                            Call to Actions
                  </a>
                </li>
                <li className="menu-item">
                  <a href="elements_counters.html">
                            Counters & Countdowns
                  </a>
                </li>
                <li className="menu-item">
                  <a href="elements_icon_boxes.html">Icon With Text</a>
                </li>
              </ul>
              {/*  <!--================ End of Sub Menu ================--> */}
            </li>
            <li className="menu-item menu-item-has-children">
              <a href="#" className="sub-title no-title">
                        General Elements 2
              </a>
              {/* <!--================ Sub Menu ================--> */}
              <ul className="sub-menu">
                <li className="menu-item">
                  <a href="elements_image_boxes.html">
                            Image With Text
                  </a>
                </li>
                <li className="menu-item">
                  <a href="elements_pricing.html">Pricing Tables</a>
                </li>
                <li className="menu-item">
                  <a href="elements_tables.html">
                            Tables & Progress Bars
                  </a>
                </li>
                <li className="menu-item">
                  <a href="elements_tabs.html">Tabs & Tour Sections</a>
                </li>
                <li className="menu-item">
                  <a href="elements_team.html">
                            Team Members & Partners
                  </a>
                </li>
                <li className="menu-item">
                  <a href="elements_testimonials.html">Testimonials</a>
                </li>
              </ul>
              {/* <!--================ End of Sub Menu ================--> */}
            </li>
            <li className="menu-item menu-item-has-children">
              <a href="#" className="sub-title">
                        Shop Elements
              </a>
              {/*  <!--================ Sub Menu ================--> */}
              <ul className="sub-menu">
                <li className="menu-item">
                  <a href="elements_categories.html">
                            Product Categories
                  </a>
                </li>
                <li className="menu-item">
                  <a href="elements_carousels.html">
                            Product Carousels
                  </a>
                </li>
                <li className="menu-item">
                  <a href="elements_lists.html">Product Lists</a>
                </li>
              </ul>
              {/*  <!--================ End of Sub Menu ================--> */}
            </li>
            <li className="menu-item menu-item-has-children">
              <a href="#" className="sub-title">
                        Typography
              </a>
              {/* <!--================ Sub Menu ================--> */}
              <ul className="sub-menu">
                <li className="menu-item">
                  <a href="elements_dropcaps_blockquotes.html">
                            Dropcaps &amp; Blockquotes
                  </a>
                </li>
                <li className="menu-item">
                  <a href="elements_headings_and_paragraphs.html">
                            Headings &amp; Paragraphs
                  </a>
                </li>
                <li className="menu-item">
                  <a href="elements_highlights_tooltips_listings.html">
                            Highlights, Tooltips and Listings
                  </a>
                </li>
                <li className="menu-item">
                  <a href="rtl/index.html">RTL Version</a>
                </li>
              </ul>
              {/*  <!--================ End of Sub Menu ================--> */}
            </li>
            <li className="menu-item menu-item-has-children sub-wrap">
              <a href="#" className="sub-title">
                        Header and Footer Layouts
              </a>
              <div className="sub-menu">
                <ul>
                  <li className="menu-item">
                    <a href="index.html">Header v1</a>
                  </li>
                  <li className="menu-item">
                    <a href="home_2.html">Header v2</a>
                  </li>
                  <li className="menu-item">
                    <a href="home_3.html">Header v3</a>
                  </li>
                  <li className="menu-item">
                    <a href="home_4.html">Header v4</a>
                  </li>
                </ul>
                <ul>
                  <li className="menu-item">
                    <a href="index.html">Footer v1</a>
                  </li>
                  <li className="menu-item">
                    <a href="home_2.html">Footer v2</a>
                  </li>
                  <li className="menu-item">
                    <a href="home_3.html">Footer v3</a>
                  </li>
                  <li className="menu-item">
                    <a href="home_4.html">Footer v4</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          {/* <!--================ End of Sub Menu ================--> */}
        </li>
        <li className="menu-item menu-item-has-children current-menu-item">
          <a href="#">Blog</a>
          {/*  <!--================ Sub Menu ================--> */}
          <ul className="sub-menu">
            <li className="menu-item menu-item-has-children current-menu-item">
              <a href="#">classNameic Blog</a>
              {/*  <!--================ Sub Menu ================--> */}
              <ul className="sub-menu">
                <li className="menu-item">
                  <a href="blog_classNameic_sidebar.html">
                            With Right Sidebar
                  </a>
                </li>
                <li className="menu-item current-menu-item">
                  <a href="blog_classNameic.html">Without Sidebar</a>
                </li>
              </ul>
              {/*  <!--================ End of Sub Menu ================--> */}
            </li>
            <li className="menu-item menu-item-has-children">
              <a href="blog_masonry.html">Masonry Blog</a>
              {/* <!--================ Sub Menu ================--> */}
              <ul className="sub-menu">
                <li className="menu-item">
                  <a href="blog_masonry_sidebar.html">
                            With Right Sidebar
                  </a>
                </li>
                <li className="menu-item">
                  <a href="blog_masonry.html">Without Sidebar</a>
                </li>
              </ul>
              {/*  <!--================ End of Sub Menu ================--> */}
            </li>
            <li className="menu-item menu-item-has-children">
              <a href="#">Single Blog Post</a>
              {/*  <!--================ Sub Menu ================--> */}
              <ul className="sub-menu">
                <li className="menu-item">
                  <a href="blog_single_sidebar.html">
                            With Right Sidebar
                  </a>
                </li>
                <li className="menu-item">
                  <a href="blog_single.html">Without Sidebar</a>
                </li>
              </ul>
              {/* <!--================ End of Sub Menu ================--> */}
            </li>
          </ul>
          {/*  <!--================ End of Sub Menu ================--> */}
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
