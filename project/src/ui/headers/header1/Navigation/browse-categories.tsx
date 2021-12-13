import { useState } from 'react';
import { Link } from 'react-router-dom';

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
                    <Link to="/">Vitamins A-E</Link>
                  </li>
                  <li>
                    <Link to="/">Multivitamins & Minerals</Link>
                  </li>
                  <li>
                    <Link to="/">Bone & Joints Health</Link>
                  </li>
                  <li>
                    <Link to="/">Magnesium</Link>
                  </li>
                  <li>
                    <Link to="/">Probiotics</Link>
                  </li>
                  <li>
                    <Link to="/">Fish Oil & Omega 3, 6, 9</Link>
                  </li>
                  <li>
                    <Link to="/">Homeopathy</Link>
                  </li>
                  <li>
                    <Link to="/">Herbal</Link>
                  </li>
                  <li>
                    <Link to="/">Antioxidants</Link>
                  </li>
                  <li>
                    <Link to="/">Pregnancy & Breast Feeding</Link>
                  </li>
                  <li>
                    <Link to="/">Hair, Skin & Nails</Link>
                  </li>
                  <li>
                    <Link to="/">Liver & Detox</Link>
                  </li>
                  <li>
                    <Link to="/">Sexual Health</Link>
                  </li>
                  <li>
                    <Link to="/">Organic</Link>
                  </li>
                </ul>
              </li>
              <li>
                <div className="sub-title">
                  <b>By Condition</b>
                </div>
                <ul>
                  <li>
                    <Link to="/">Arthritis & Joints</Link>
                  </li>
                  <li>
                    <Link to="/">Iron Deficiency</Link>
                  </li>
                  <li>
                    <Link to="/">Cough, Cold & Flu</Link>
                  </li>
                  <li>
                    <Link to="/">Migraine</Link>
                  </li>
                  <li>
                    <Link to="/">Stress & Anxiety</Link>
                  </li>
                  <li>
                    <Link to="/">Insomnia</Link>
                  </li>
                  <li>
                    <Link to="/">Vein Care</Link>
                  </li>
                  <li>
                    <Link to="/">Heart & Cholesterol</Link>
                  </li>
                  <li>
                    <Link to="/">Digestive Health</Link>
                  </li>
                  <li>
                    <Link to="/">Hair Loss</Link>
                  </li>
                  <li>
                    <Link to="/">Sugar Control</Link>
                  </li>
                  <li>
                    <Link to="/">Memory & Concentration</Link>
                  </li>
                  <li>
                    <Link to="/">Water Retention</Link>
                  </li>
                </ul>
              </li>
              <li>
                <div className="sub-title">
                  <b>By Category</b>
                </div>
                <ul>
                  <li>
                    <Link to="/">For Children</Link>
                  </li>
                  <li>
                    <Link to="/">For Men</Link>
                  </li>
                  <li>
                    <Link to="/">For Women</Link>
                  </li>
                  <li>
                    <Link to="/">For 50+</Link>
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
                    <Link to="/">Skin Care</Link>
                  </li>
                  <li>
                    <Link to="/">Makeup & Cosmetics</Link>
                  </li>
                  <li>
                    <Link to="/">Hand & Nail Care</Link>
                  </li>
                  <li>
                    <Link to="/">Hair Care</Link>
                  </li>
                  <li>
                    <Link to="/">Sun Care</Link>
                  </li>
                  <li>
                    <Link to="/">Feminine Hygiene</Link>
                  </li>
                  <li>
                    <Link to="/">Bath & Body</Link>
                  </li>
                  <li>
                    <Link to="/">Foot Care</Link>
                  </li>
                  <li>
                    <Link to="/">Waxing & Hair Removal</Link>
                  </li>
                  <li>
                    <Link to="/">Lice</Link>
                  </li>
                  <li>
                    <Link to="/">Hair Colours</Link>
                  </li>
                  <li>
                    <Link to="/">Lip Care</Link>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>
                    <Link to="/">Deodorants</Link>
                  </li>
                  <li>
                    <Link to="/">Oral Hygiene</Link>
                  </li>
                  <li>
                    <Link to="/">Incontinence</Link>
                  </li>
                  <li>
                    <Link to="/">Essential Oils</Link>
                  </li>
                  <li>
                    <Link to="/">Anti-aging & Wrinkle Treatment</Link>
                  </li>
                  <li>
                    <Link to="/">Family Planning</Link>
                  </li>
                  <li>
                    <Link to="/">Organic</Link>
                  </li>
                </ul>
              </li>
              <li>
                <div className="sub-title">
                  <b>By Category</b>
                </div>
                <ul>
                  <li>
                    <Link to="/">For Children</Link>
                  </li>
                  <li>
                    <Link to="/">For Men</Link>
                  </li>
                  <li>
                    <Link to="/">For Women</Link>
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
                    <Link to="/">Eye & Ear</Link>
                  </li>
                  <li>
                    <Link to="/">Nose & Throat</Link>
                  </li>
                  <li>
                    <Link to="/">Oral Health</Link>
                  </li>
                  <li>
                    <Link to="/">Fever & Pain Relief</Link>
                  </li>
                  <li>
                    <Link to="/">Allergies & Sinus</Link>
                  </li>
                  <li>
                    <Link to="/">Cold, Cough & Flu</Link>
                  </li>
                  <li>
                    <Link to="/">Skin Conditions</Link>
                  </li>
                  <li>
                    <Link to="/">Laxatives & Fibres</Link>
                  </li>
                  <li>
                    <Link to="/">Hair Treatments</Link>
                  </li>
                  <li>
                    <Link to="/">Anti-Fungal</Link>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>
                    <Link to="/">Worming</Link>
                  </li>
                  <li>
                    <Link to="/">Haemorrhoids</Link>
                  </li>
                  <li>
                    <Link to="/">Travel Sickness</Link>
                  </li>
                  <li>
                    <Link to="/">Rehydration</Link>
                  </li>
                  <li>
                    <Link to="/">Antacids & Stomach Preparations</Link>
                  </li>
                  <li>
                    <Link to="/">Pharmacist Advice Medicine</Link>
                  </li>
                </ul>
              </li>
              <li>
                <div className="sub-title">
                  <b>By Category</b>
                </div>
                <ul>
                  <li>
                    <Link to="/">For Children</Link>
                  </li>
                  <li>
                    <Link to="/">For Men</Link>
                  </li>
                  <li>
                    <Link to="/">For Women</Link>
                  </li>
                  <li>
                    <Link to="/">For 50+</Link>
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
                    <Link to="/">Sleep & Snoring Aids</Link>
                  </li>
                  <li>
                    <Link to="/">Quit Smoking Aids</Link>
                  </li>
                  <li>
                    <Link to="/">Supports & Braces</Link>
                  </li>
                  <li>
                    <Link to="/">Pregnancy Tests</Link>
                  </li>
                  <li>
                    <Link to="/">Medical Devices</Link>
                  </li>
                  <li>
                    <Link to="/">Walking Sticks</Link>
                  </li>
                  <li>
                    <Link to="/">Mobility Aids</Link>
                  </li>
                  <li>
                    <Link to="/">Weight Scales</Link>
                  </li>
                  <li>
                    <Link to="/">Magnetic Therapy</Link>
                  </li>
                  <li>
                    <Link to="/">Lifestyle Aids</Link>
                  </li>
                  <li>
                    <Link to="/">NRT</Link>
                  </li>
                </ul>
              </li>
              <li>
                <div className="sub-title">
                  <b>First Aid</b>
                </div>
                <ul>
                  <li>
                    <Link to="/">First Aid Kits & Supplies</Link>
                  </li>
                  <li>
                    <Link to="/">Bandages & Dressings</Link>
                  </li>
                  <li>
                    <Link to="/">Antibacterial & Antiseptics</Link>
                  </li>
                  <li>
                    <Link to="/">Heat & Anti-inflammatory Rubs</Link>
                  </li>
                  <li>
                    <Link to="/">Syringes</Link>
                  </li>
                  <li>
                    <Link to="/">Stings & Bites</Link>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>
                    <Link to="/">Thermometers</Link>
                  </li>
                  <li>
                    <Link to="/">Pill Boxes</Link>
                  </li>
                  <li>
                    <Link to="/">Plasters</Link>
                  </li>
                  <li>
                    <Link to="/">Hot & Cold Therapy</Link>
                  </li>
                  <li>
                    <Link to="/">Compression Bandages</Link>
                  </li>
                  <li>
                    <Link to="/">Sports</Link>
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
                    <Link to="/">Condoms & Contraceptives</Link>
                  </li>
                  <li>
                    <Link to="/">Lubricants & Creams</Link>
                  </li>
                  <li>
                    <Link to="/">Vibrators</Link>
                  </li>
                  <li>
                    <Link to="/">Adult Toys</Link>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>
                    <Link to="/">Intimate Care</Link>
                  </li>
                  <li>
                    <Link to="/">Mood Setters</Link>
                  </li>
                  <li>
                    <Link to="/">Sexual Wellness Supplements</Link>
                  </li>
                  <li>
                    <Link to="/">Pregnancy & Fertility</Link>
                  </li>
                </ul>
              </li>
              <li>
                <div className="sub-title">
                  <b>By Category</b>
                </div>
                <ul>
                  <li>
                    <Link to="/">For Men</Link>
                  </li>
                  <li>
                    <Link to="/">For Women</Link>
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
                    <Link to="/">Protein Powder</Link>
                  </li>
                  <li>
                    <Link to="/">Weight Loss Supplements</Link>
                  </li>
                  <li>
                    <Link to="/">Meal Replacements</Link>
                  </li>
                  <li>
                    <Link to="/">Low Calorie Snacks</Link>
                  </li>
                  <li>
                    <Link to="/">Bars & Drinks</Link>
                  </li>
                </ul>
              </li>
              <li>
                <div className="sub-title">
                  <b>Sports Nutrition</b>
                </div>
                <ul>
                  <li>
                    <Link to="/">Muscle Building</Link>
                  </li>
                  <li>
                    <Link to="/">Re-hydration</Link>
                  </li>
                  <li>
                    <Link to="/">Weight Gain</Link>
                  </li>
                  <li>
                    <Link to="/">Energy Supplements</Link>
                  </li>
                </ul>
              </li>
              <li>
                <div className="sub-title">
                  <b>By Category</b>
                </div>
                <ul>
                  <li>
                    <Link to="/">For Men</Link>
                  </li>
                  <li>
                    <Link to="/">For Women</Link>
                  </li>
                  <li>
                    <Link to="/">For 50+</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="with-sub-menu hidden">
            <Link to="/">Mum & Baby</Link>
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
                    <Link to="/">Bibs & Smocks</Link>
                  </li>
                  <li>
                    <Link to="/">Bottles</Link>
                  </li>
                  <li>
                    <Link to="/">Breast Pumps</Link>
                  </li>
                  <li>
                    <Link to="/">Trainer Cups</Link>
                  </li>
                  <li>
                    <Link to="/">Baby Formula</Link>
                  </li>
                  <li>
                    <Link to="/">Wind & Reflux</Link>
                  </li>
                  <li>
                    <Link to="/">Sterilisers</Link>
                  </li>
                  <li>
                    <Link to="/">Teats & Sealers</Link>
                  </li>
                  <li>
                    <Link to="/">Organic</Link>
                  </li>
                  <li>
                    <Link to="/">Baby Food</Link>
                  </li>
                  <li>
                    <Link to="/">Feeding Systems</Link>
                  </li>
                  <li>
                    <Link to="/">Bottle Warmers & Sterilisers</Link>
                  </li>
                </ul>
              </li>
              <li>
                <div className="sub-title">
                  <b>Health Care</b>
                </div>
                <ul>
                  <li>
                    <Link to="/">Baby Pain & Fever</Link>
                  </li>
                  <li>
                    <Link to="/">Bathtime</Link>
                  </li>
                  <li>
                    <Link to="/">Skin & Hair Care</Link>
                  </li>
                  <li>
                    <Link to="/">Powders & Talcs</Link>
                  </li>
                  <li>
                    <Link to="/">Cap & Scalp Care</Link>
                  </li>
                  <li>
                    <Link to="/">Organic Baby Care</Link>
                  </li>
                  <li>
                    <Link to="/">Teething</Link>
                  </li>
                  <li>
                    <Link to="/">Soothers</Link>
                  </li>
                  <li>
                    <Link to="/">Thermometers</Link>
                  </li>
                  <li>
                    <Link to="/">In-ear Thermometers</Link>
                  </li>
                </ul>
              </li>
              <li>
                <div className="sub-title">
                  <b>Maternity Needs</b>
                </div>
                <ul>
                  <li>
                    <Link to="/">Support Belts</Link>
                  </li>
                  <li>
                    <Link to="/">Stretch Mark Creams</Link>
                  </li>
                  <li>
                    <Link to="/">Nursing Accessories</Link>
                  </li>
                  <li>
                    <Link to="/">Prenatal Supplements</Link>
                  </li>
                  <li>
                    <Link to="/">Travel Accessories</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="with-sub-menu hidden no-bg-img">
            <Link to="/">Organic & Gluten Free</Link>
            <ul
              className="sub-menu"
              data-bg-image-src="images/suppliments8.png"
            >
              <li>
                <ul>
                  <li>
                    <Link to="/">Organic</Link>
                  </li>
                  <li>
                    <Link to="/">Gluten Free</Link>
                  </li>
                  <li>
                    <Link to="/">Sugar Free</Link>
                  </li>
                  <li>
                    <Link to="/">Paleo</Link>
                  </li>
                  <li>
                    <Link to="/">Vegan</Link>
                  </li>
                  <li>
                    <Link to="/">Whole Foods</Link>
                  </li>
                  <li>
                    <Link to="/">Super Foods</Link>
                  </li>
                  <li>
                    <Link to="/">Personal Care</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="with-sub-menu hidden">
            <Link to="/">Home & Pets</Link>
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
                    <Link to="/">Snacks</Link>
                  </li>
                  <li>
                    <Link to="/">Tea</Link>
                  </li>
                  <li>
                    <Link to="/">Coffee</Link>
                  </li>
                  <li>
                    <Link to="/">Beverages</Link>
                  </li>
                </ul>
              </li>
              <li>
                <div className="sub-title">
                  <b>Household Essentials</b>
                </div>
                <ul>
                  <li>
                    <Link to="/">Kitchen</Link>
                  </li>
                  <li>
                    <Link to="/">Bathroom</Link>
                  </li>
                  <li>
                    <Link to="/">Bedroom</Link>
                  </li>
                  <li>
                    <Link to="/">Living room</Link>
                  </li>
                </ul>
              </li>
              <li>
                <div className="sub-title">
                  <b>Pet Care</b>
                </div>
                <ul>
                  <li>
                    <Link to="/">Dog Care</Link>
                  </li>
                  <li>
                    <Link to="/">Cat Care</Link>
                  </li>
                  <li>
                    <Link to="/">Horse Care</Link>
                  </li>
                  <li>
                    <Link to="/">Pet Accessories</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="with-sub-menu hidden no-bg-img">
            <Link to="/">Travel</Link>
            <ul
              className="sub-menu"
              data-bg-image-src="images/suppliments10.png"
            >
              <li>
                <ul>
                  <li>
                    <Link to="/">Sickness</Link>
                  </li>
                  <li>
                    <Link to="/">Stockings</Link>
                  </li>
                  <li>
                    <Link to="/">Accessories</Link>
                  </li>
                  <li>
                    <Link to="/">Toiletries</Link>
                  </li>
                  <li>
                    <Link to="/">Travel Kits</Link>
                  </li>
                  <li>
                    <Link to="/">Travel Necessities</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="with-sub-menu hidden no-bg-img">
            <Link to="/">Parfumes & Gifts</Link>
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
                    <Link to="/">Men</Link>
                  </li>
                  <li>
                    <Link to="/">Women</Link>
                  </li>
                  <li>
                    <Link to="/">Unisex</Link>
                  </li>
                  <li>
                    <Link to="/">Kids</Link>
                  </li>
                </ul>
                <div className="sub-title">
                  <b>Giftsets</b>
                </div>
                <ul>
                  <li>
                    <Link to="/">Men</Link>
                  </li>
                  <li>
                    <Link to="/">Women</Link>
                  </li>
                  <li>
                    <Link to="/">Unisex</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <Link id="mad-show-cat" to="/">
                      Show More
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BrowseCategories;
