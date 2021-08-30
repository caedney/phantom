const dateFormat = value => {
  if (typeof value !== "number") {
    return value;
  }

  return value <= 9 ? `0${value}` : `${value}`;
};

export default dateFormat;
