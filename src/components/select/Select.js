import React from "react";
import PropTypes from "prop-types";
import ReactSelect from "react-select";

const dummyOptions = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const colourStyles = {
  container: styles => ({ ...styles, flex: 1 }),
  control: styles => ({
    ...styles,
    backgroundColor: "white",
    minHeight: "44px",
  }),
};

function Select(props) {
  const { options, ...rest } = props;

  return (
    <ReactSelect
      isClearable
      options={options}
      styles={colourStyles}
      {...rest}
    />
  );
}

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
};

Select.defaultProps = {
  options: dummyOptions,
};

export default Select;
