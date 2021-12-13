
import { shopCategories } from '../../../../mocks/categories-mocks';
import Select, { StylesConfig } from 'react-select';

type MyOptionType = {
  label: string;
  value: string;
};

type IsMulti = false;

const selectStyle: StylesConfig<MyOptionType, IsMulti> = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? 'black' : 'grey',
    backgroundColor: state.isSelected ? 'white' : 'white',
  }),

  indicatorSeparator: (styles) => ({ display: 'none' }),

  control: (styles) => ({
    ...styles,
    backgroundColor: 'white',
    border: 'none',
    boxShadow: 'none',
    paddingLeft: '10px',
  }),

  container: (base, state) => ({
    ...base,
    zIndex: 999,
    '&:active': {
      bowShadow: 'none',
      border: 'none',
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      width: '2px',
      height: '2.25rem',
      top: '50%',
      marginTop: '-1.125rem',
      background: '#dce3e6',
      left: 0,
      zIndex: 2,
    },
  }),
  input: (base, state) => ({
    ...base,
    margin: '0px',
    padding: '0px',
  }),

  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  },
};

function ProductSelect(): JSX.Element {
  return (
    <Select
      options={shopCategories}
      placeholder="Select Category"
      styles={selectStyle}
    />
  );
}

export default ProductSelect;
