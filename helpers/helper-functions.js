export const dateFormat = (date) => {
  const formatedDate = new Date(date);

  const options = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };

  return formatedDate.toLocaleDateString("en-EN", options);
};
