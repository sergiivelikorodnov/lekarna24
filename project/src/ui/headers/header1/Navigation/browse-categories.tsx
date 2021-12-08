import { useState } from 'react';

function BrowseCategories(): JSX.Element {
  const [openToggle, setOpenToggle] = useState(false);
  const setOpenToggleHandler = () => {
    setOpenToggle(!openToggle);
  };

  return (
    <div className="mad-header-item">
      <div id="mad-browse-cat" className="mad-browse-cat">
        <button
          id="mad-cat-toggle"
          className={`mad-cat-toggle ${openToggle ? 'toggled' : ''}`}
          onClick={()=> setOpenToggleHandler()}
        >
          <span>Browse</span> Categories
        </button>
        <ul className={`mad-cat-menu ${openToggle ? 'menu-open' : ''}`}>
          <li>
            <a href="shop_grid_3c_sidebar.html">
              <b>Special Deals</b>
            </a>
          </li>
          <li>
            <a href="shop_grid_3c_sidebar.html">
              <b>Best Sellers</b>
            </a>
          </li>
          <li>
            <a href="shop_grid_3c_sidebar.html">
              <b>New Arrivals</b>
            </a>
          </li>
          <li className="with-sub-menu">
            <a href="shop_filter_drawer.html">Vitamins & Supplements</a>
            <ul
              className="sub-menu"
              data-bg-image-src="images/suppliments.png"
            >
              <li>
                <ul>
                  <li>
                    <a href="#">Vitamins A-E</a>
                  </li>
                  <li>
                    <a href="#">Multivitamins & Minerals</a>
                  </li>
                  <li>
                    <a href="#">Bone & Joints Health</a>
                  </li>
                  <li>
                    <a href="#">Magnesium</a>
                  </li>
                  <li>
                    <a href="#">Probiotics</a>
                  </li>
                  <li>
                    <a href="#">Fish Oil & Omega 3, 6, 9</a>
                  </li>
                  <li>
                    <a href="#">Homeopathy</a>
                  </li>
                  <li>
                    <a href="#">Herbal</a>
                  </li>
                  <li>
                    <a href="#">Antioxidants</a>
                  </li>
                  <li>
                    <a href="#">Pregnancy & Breast Feeding</a>
                  </li>
                  <li>
                    <a href="#">Hair, Skin & Nails</a>
                  </li>
                  <li>
                    <a href="#">Liver & Detox</a>
                  </li>
                  <li>
                    <a href="#">Sexual Health</a>
                  </li>
                  <li>
                    <a href="#">Organic</a>
                  </li>
                </ul>
              </li>
              <li>
                <div className="sub-title">
                  <b>By Condition</b>
                </div>
                <ul>
                  <li>
                    <a href="#">Arthritis & Joints</a>
                  </li>
                  <li>
                    <a href="#">Iron Deficiency</a>
                  </li>
                  <li>
                    <a href="#">Cough, Cold & Flu</a>
                  </li>
                  <li>
                    <a href="#">Migraine</a>
                  </li>
                  <li>
                    <a href="#">Stress & Anxiety</a>
                  </li>
                  <li>
                    <a href="#">Insomnia</a>
                  </li>
                  <li>
                    <a href="#">Vein Care</a>
                  </li>
                  <li>
                    <a href="#">Heart & Cholesterol</a>
                  </li>
                  <li>
                    <a href="#">Digestive Health</a>
                  </li>
                  <li>
                    <a href="#">Hair Loss</a>
                  </li>
                  <li>
                    <a href="#">Sugar Control</a>
                  </li>
                  <li>
                    <a href="#">Memory & Concentration</a>
                  </li>
                  <li>
                    <a href="#">Water Retention</a>
                  </li>
                </ul>
              </li>
              <li>
                <div className="sub-title">
                  <b>By Category</b>
                </div>
                <ul>
                  <li>
                    <a href="#">For Children</a>
                  </li>
                  <li>
                    <a href="#">For Men</a>
                  </li>
                  <li>
                    <a href="#">For Women</a>
                  </li>
                  <li>
                    <a href="#">For 50+</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="with-sub-menu">
            <a href="shop_filter_drawer.html">Personal Care & Beauty</a>
            <ul
              className="sub-menu"
              data-bg-image-src="images/suppliments2.png"
            >
              <li>
                <ul>
                  <li>
                    <a href="#">Skin Care</a>
                  </li>
                  <li>
                    <a href="#">Makeup & Cosmetics</a>
                  </li>
                  <li>
                    <a href="#">Hand & Nail Care</a>
                  </li>
                  <li>
                    <a href="#">Hair Care</a>
                  </li>
                  <li>
                    <a href="#">Sun Care</a>
                  </li>
                  <li>
                    <a href="#">Feminine Hygiene</a>
                  </li>
                  <li>
                    <a href="#">Bath & Body</a>
                  </li>
                  <li>
                    <a href="#">Foot Care</a>
                  </li>
                  <li>
                    <a href="#">Waxing & Hair Removal</a>
                  </li>
                  <li>
                    <a href="#">Lice</a>
                  </li>
                  <li>
                    <a href="#">Hair Colours</a>
                  </li>
                  <li>
                    <a href="#">Lip Care</a>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>
                    <a href="#">Deodorants</a>
                  </li>
                  <li>
                    <a href="#">Oral Hygiene</a>
                  </li>
                  <li>
                    <a href="#">Incontinence</a>
                  </li>
                  <li>
                    <a href="#">Essential Oils</a>
                  </li>
                  <li>
                    <a href="#">Anti-aging & Wrinkle Treatment</a>
                  </li>
                  <li>
                    <a href="#">Family Planning</a>
                  </li>
                  <li>
                    <a href="#">Organic</a>
                  </li>
                </ul>
              </li>
              <li>
                <div className="sub-title">
                  <b>By Category</b>
                </div>
                <ul>
                  <li>
                    <a href="#">For Children</a>
                  </li>
                  <li>
                    <a href="#">For Men</a>
                  </li>
                  <li>
                    <a href="#">For Women</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="with-sub-menu">
            <a href="shop_filter_drawer.html">Medicines</a>
            <ul
              className="sub-menu"
              data-bg-image-src="images/suppliments3.png"
            >
              <li>
                <ul>
                  <li>
                    <a href="#">Eye & Ear</a>
                  </li>
                  <li>
                    <a href="#">Nose & Throat</a>
                  </li>
                  <li>
                    <a href="#">Oral Health</a>
                  </li>
                  <li>
                    <a href="#">Fever & Pain Relief</a>
                  </li>
                  <li>
                    <a href="#">Allergies & Sinus</a>
                  </li>
                  <li>
                    <a href="#">Cold, Cough & Flu</a>
                  </li>
                  <li>
                    <a href="#">Skin Conditions</a>
                  </li>
                  <li>
                    <a href="#">Laxatives & Fibres</a>
                  </li>
                  <li>
                    <a href="#">Hair Treatments</a>
                  </li>
                  <li>
                    <a href="#">Anti-Fungal</a>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>
                    <a href="#">Worming</a>
                  </li>
                  <li>
                    <a href="#">Haemorrhoids</a>
                  </li>
                  <li>
                    <a href="#">Travel Sickness</a>
                  </li>
                  <li>
                    <a href="#">Rehydration</a>
                  </li>
                  <li>
                    <a href="#">Antacids & Stomach Preparations</a>
                  </li>
                  <li>
                    <a href="#">Pharmacist Advice Medicine</a>
                  </li>
                </ul>
              </li>
              <li>
                <div className="sub-title">
                  <b>By Category</b>
                </div>
                <ul>
                  <li>
                    <a href="#">For Children</a>
                  </li>
                  <li>
                    <a href="#">For Men</a>
                  </li>
                  <li>
                    <a href="#">For Women</a>
                  </li>
                  <li>
                    <a href="#">For 50+</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="with-sub-menu">
            <a href="shop_filter_drawer.html">Health & First Aids</a>
            <ul
              className="sub-menu"
              data-bg-image-src="images/suppliments4.png"
            >
              <li>
                <div className="sub-title">
                  <b>Health Aids</b>
                </div>
                <ul>
                  <li>
                    <a href="#">Sleep & Snoring Aids</a>
                  </li>
                  <li>
                    <a href="#">Quit Smoking Aids</a>
                  </li>
                  <li>
                    <a href="#">Supports & Braces</a>
                  </li>
                  <li>
                    <a href="#">Pregnancy Tests</a>
                  </li>
                  <li>
                    <a href="#">Medical Devices</a>
                  </li>
                  <li>
                    <a href="#">Walking Sticks</a>
                  </li>
                  <li>
                    <a href="#">Mobility Aids</a>
                  </li>
                  <li>
                    <a href="#">Weight Scales</a>
                  </li>
                  <li>
                    <a href="#">Magnetic Therapy</a>
                  </li>
                  <li>
                    <a href="#">Lifestyle Aids</a>
                  </li>
                  <li>
                    <a href="#">NRT</a>
                  </li>
                </ul>
              </li>
              <li>
                <div className="sub-title">
                  <b>First Aid</b>
                </div>
                <ul>
                  <li>
                    <a href="#">First Aid Kits & Supplies</a>
                  </li>
                  <li>
                    <a href="#">Bandages & Dressings</a>
                  </li>
                  <li>
                    <a href="#">Antibacterial & Antiseptics</a>
                  </li>
                  <li>
                    <a href="#">Heat & Anti-inflammatory Rubs</a>
                  </li>
                  <li>
                    <a href="#">Syringes</a>
                  </li>
                  <li>
                    <a href="#">Stings & Bites</a>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>
                    <a href="#">Thermometers</a>
                  </li>
                  <li>
                    <a href="#">Pill Boxes</a>
                  </li>
                  <li>
                    <a href="#">Plasters</a>
                  </li>
                  <li>
                    <a href="#">Hot & Cold Therapy</a>
                  </li>
                  <li>
                    <a href="#">Compression Bandages</a>
                  </li>
                  <li>
                    <a href="#">Sports</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="with-sub-menu">
            <a href="shop_filter_drawer.html">Sexual Health</a>
            <ul
              className="sub-menu"
              data-bg-image-src="images/suppliments5.png"
            >
              <li>
                <ul>
                  <li>
                    <a href="#">Condoms & Contraceptives</a>
                  </li>
                  <li>
                    <a href="#">Lubricants & Creams</a>
                  </li>
                  <li>
                    <a href="#">Vibrators</a>
                  </li>
                  <li>
                    <a href="#">Adult Toys</a>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>
                    <a href="#">Intimate Care</a>
                  </li>
                  <li>
                    <a href="#">Mood Setters</a>
                  </li>
                  <li>
                    <a href="#">Sexual Wellness Supplements</a>
                  </li>
                  <li>
                    <a href="#">Pregnancy & Fertility</a>
                  </li>
                </ul>
              </li>
              <li>
                <div className="sub-title">
                  <b>By Category</b>
                </div>
                <ul>
                  <li>
                    <a href="#">For Men</a>
                  </li>
                  <li>
                    <a href="#">For Women</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="with-sub-menu">
            <a href="shop_filter_drawer.html">Weight Loss & Fitness</a>
            <ul
              className="sub-menu"
              data-bg-image-src="images/suppliments6.png"
            >
              <li>
                <div className="sub-title">
                  <b>Weight Management</b>
                </div>
                <ul>
                  <li>
                    <a href="#">Protein Powder</a>
                  </li>
                  <li>
                    <a href="#">Weight Loss Supplements</a>
                  </li>
                  <li>
                    <a href="#">Meal Replacements</a>
                  </li>
                  <li>
                    <a href="#">Low Calorie Snacks</a>
                  </li>
                  <li>
                    <a href="#">Bars & Drinks</a>
                  </li>
                </ul>
              </li>
              <li>
                <div className="sub-title">
                  <b>Sports Nutrition</b>
                </div>
                <ul>
                  <li>
                    <a href="#">Muscle Building</a>
                  </li>
                  <li>
                    <a href="#">Re-hydration</a>
                  </li>
                  <li>
                    <a href="#">Weight Gain</a>
                  </li>
                  <li>
                    <a href="#">Energy Supplements</a>
                  </li>
                </ul>
              </li>
              <li>
                <div className="sub-title">
                  <b>By Category</b>
                </div>
                <ul>
                  <li>
                    <a href="#">For Men</a>
                  </li>
                  <li>
                    <a href="#">For Women</a>
                  </li>
                  <li>
                    <a href="#">For 50+</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="with-sub-menu hidden">
            <a href="#">Mum & Baby</a>
            <ul
              className="sub-menu"
              data-bg-image-src="images/suppliments7.png"
            >
              <li>
                <div className="sub-title">
                  <b>Feeding</b>
                </div>
                <ul>
                  <li>
                    <a href="#">Bibs & Smocks</a>
                  </li>
                  <li>
                    <a href="#">Bottles</a>
                  </li>
                  <li>
                    <a href="#">Breast Pumps</a>
                  </li>
                  <li>
                    <a href="#">Trainer Cups</a>
                  </li>
                  <li>
                    <a href="#">Baby Formula</a>
                  </li>
                  <li>
                    <a href="#">Wind & Reflux</a>
                  </li>
                  <li>
                    <a href="#">Sterilisers</a>
                  </li>
                  <li>
                    <a href="#">Teats & Sealers</a>
                  </li>
                  <li>
                    <a href="#">Organic</a>
                  </li>
                  <li>
                    <a href="#">Baby Food</a>
                  </li>
                  <li>
                    <a href="#">Feeding Systems</a>
                  </li>
                  <li>
                    <a href="#">Bottle Warmers & Sterilisers</a>
                  </li>
                </ul>
              </li>
              <li>
                <div className="sub-title">
                  <b>Health Care</b>
                </div>
                <ul>
                  <li>
                    <a href="#">Baby Pain & Fever</a>
                  </li>
                  <li>
                    <a href="#">Bathtime</a>
                  </li>
                  <li>
                    <a href="#">Skin & Hair Care</a>
                  </li>
                  <li>
                    <a href="#">Powders & Talcs</a>
                  </li>
                  <li>
                    <a href="#">Cap & Scalp Care</a>
                  </li>
                  <li>
                    <a href="#">Organic Baby Care</a>
                  </li>
                  <li>
                    <a href="#">Teething</a>
                  </li>
                  <li>
                    <a href="#">Soothers</a>
                  </li>
                  <li>
                    <a href="#">Thermometers</a>
                  </li>
                  <li>
                    <a href="#">In-ear Thermometers</a>
                  </li>
                </ul>
              </li>
              <li>
                <div className="sub-title">
                  <b>Maternity Needs</b>
                </div>
                <ul>
                  <li>
                    <a href="#">Support Belts</a>
                  </li>
                  <li>
                    <a href="#">Stretch Mark Creams</a>
                  </li>
                  <li>
                    <a href="#">Nursing Accessories</a>
                  </li>
                  <li>
                    <a href="#">Prenatal Supplements</a>
                  </li>
                  <li>
                    <a href="#">Travel Accessories</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="with-sub-menu hidden no-bg-img">
            <a href="#">Organic & Gluten Free</a>
            <ul
              className="sub-menu"
              data-bg-image-src="images/suppliments8.png"
            >
              <li>
                <ul>
                  <li>
                    <a href="#">Organic</a>
                  </li>
                  <li>
                    <a href="#">Gluten Free</a>
                  </li>
                  <li>
                    <a href="#">Sugar Free</a>
                  </li>
                  <li>
                    <a href="#">Paleo</a>
                  </li>
                  <li>
                    <a href="#">Vegan</a>
                  </li>
                  <li>
                    <a href="#">Whole Foods</a>
                  </li>
                  <li>
                    <a href="#">Super Foods</a>
                  </li>
                  <li>
                    <a href="#">Personal Care</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="with-sub-menu hidden">
            <a href="#">Home & Pets</a>
            <ul
              className="sub-menu"
              data-bg-image-src="images/suppliments9.png"
            >
              <li>
                <div className="sub-title">
                  <b>Snacks & Drinks</b>
                </div>
                <ul>
                  <li>
                    <a href="#">Snacks</a>
                  </li>
                  <li>
                    <a href="#">Tea</a>
                  </li>
                  <li>
                    <a href="#">Coffee</a>
                  </li>
                  <li>
                    <a href="#">Beverages</a>
                  </li>
                </ul>
              </li>
              <li>
                <div className="sub-title">
                  <b>Household Essentials</b>
                </div>
                <ul>
                  <li>
                    <a href="#">Kitchen</a>
                  </li>
                  <li>
                    <a href="#">Bathroom</a>
                  </li>
                  <li>
                    <a href="#">Bedroom</a>
                  </li>
                  <li>
                    <a href="#">Living room</a>
                  </li>
                </ul>
              </li>
              <li>
                <div className="sub-title">
                  <b>Pet Care</b>
                </div>
                <ul>
                  <li>
                    <a href="#">Dog Care</a>
                  </li>
                  <li>
                    <a href="#">Cat Care</a>
                  </li>
                  <li>
                    <a href="#">Horse Care</a>
                  </li>
                  <li>
                    <a href="#">Pet Accessories</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="with-sub-menu hidden no-bg-img">
            <a href="#">Travel</a>
            <ul
              className="sub-menu"
              data-bg-image-src="images/suppliments10.png"
            >
              <li>
                <ul>
                  <li>
                    <a href="#">Sickness</a>
                  </li>
                  <li>
                    <a href="#">Stockings</a>
                  </li>
                  <li>
                    <a href="#">Accessories</a>
                  </li>
                  <li>
                    <a href="#">Toiletries</a>
                  </li>
                  <li>
                    <a href="#">Travel Kits</a>
                  </li>
                  <li>
                    <a href="#">Travel Necessities</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="with-sub-menu hidden no-bg-img">
            <a href="#">Parfumes & Gifts</a>
            <ul
              className="sub-menu"
              data-bg-image-src="images/suppliments11.png"
            >
              <li>
                <div className="sub-title">
                  <b>Fragrances</b>
                </div>
                <ul>
                  <li>
                    <a href="#">Men</a>
                  </li>
                  <li>
                    <a href="#">Women</a>
                  </li>
                  <li>
                    <a href="#">Unisex</a>
                  </li>
                  <li>
                    <a href="#">Kids</a>
                  </li>
                </ul>
                <div className="sub-title">
                  <b>Giftsets</b>
                </div>
                <ul>
                  <li>
                    <a href="#">Men</a>
                  </li>
                  <li>
                    <a href="#">Women</a>
                  </li>
                  <li>
                    <a href="#">Unisex</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a id="mad-show-cat" href="#">
                      Show More
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BrowseCategories;
