import ProductSelect from './product-select';

function SearchInput(): JSX.Element {
  return (
    <div className="col-xl-6 col-lg-6">
      <div className="mad-search-section">
        <div className="mad-col">
          <input type="text" placeholder="Search product" />
        </div>
        <div className="mad-col">
          <ProductSelect/>
        </div>
        <button type="submit">
          <i className="material-icons">search</i>
        </button>
      </div>
    </div>
  );
}

export default SearchInput;
