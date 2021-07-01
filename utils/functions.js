export const Capitalize = (string) => {
  if (string === undefined) return "";

  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

export const CapitalizeFirstLetter = (string) => {
  if (string === undefined) return "";

  return string.charAt(0).toUpperCase() + string.slice(1);
};
