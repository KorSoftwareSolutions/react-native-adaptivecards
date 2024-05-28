const parsePixels = (value: string) => {
  return parseInt(value.replace("px", ""));
};

export const stylesUtils = {
  parsePixels,
};
