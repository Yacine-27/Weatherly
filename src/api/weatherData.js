import handleError from "../dom/error";
export const getWeatherData = async function (location) {
  const apiKey = "8D5D9XQPJ2PU6A6YQ5K7KLTUD";
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`;
  try {
    const response = await fetch(url, { mode: "cors" });
    if (!response.ok) {
      throw new Error("Please insert a valid location");
    }
    const json = await response.json();
    return json;
  } catch (error) {
    handleError(error);
  }
};
