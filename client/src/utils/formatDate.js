// Function to format date and time
export const formatDateTime = (dateTime) => {
  const options = {
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  const formatter = new Intl.DateTimeFormat("en-US", options);
  const formattedDateTime = formatter.format(dateTime);

  // Add ordinal suffix to day
  const day = dateTime.getDate();
  const ordinalSuffix = getOrdinalSuffix(day);

  return formattedDateTime.replace(/\b\d+\b/g, (match) => {
    return match + (match === day.toString() ? ordinalSuffix : "");
  });
};

// Function to get ordinal suffix for a number
export const getOrdinalSuffix = (number) => {
  const suffixes = ["th", "st", "nd", "rd"];
  const v = number % 100;
  return suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0];
};
