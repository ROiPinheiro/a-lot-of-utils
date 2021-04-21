const firstCharUppercase = (string = "") => {
  const firstLetterUppercase = string.substring(0, 1).toUpperCase();
  return `${firstLetterUppercase}${string.slice(1)}`;
};

const snakeCaseToCameCase = (string = "") => {
  return string
    .split("_")
    .map((item, index) => (index < 1 ? item : firstCharUppercase(item)))
    .join("");
};

const parseApiResponse = (data) => {
  const entries = Object.entries(data).map(([key, value]) => [snakeCaseToCameCase(key), value]);
  return Object.fromEntries(entries);
};
