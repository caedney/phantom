import React from "react";
import PropTypes from "prop-types";
import ReactSelect from "react-select";

const colorStyles = {
  container: styles => ({ ...styles, flex: 1 }),
  control: styles => ({
    ...styles,
    backgroundColor: "white",
    minHeight: "44px",
  }),
  singleValue: styles => ({
    ...styles,
    overflow: "visible",
  }),
};

function Select(props) {
  const { options, styles, ...rest } = props;

  return (
    <ReactSelect isClearable options={options} styles={styles} {...rest} />
  );
}

Select.propTypes = {
  options: PropTypes.array.isRequired,
  styles: PropTypes.object,
};

Select.defaultProps = {
  styles: colorStyles,
};

export default Select;
