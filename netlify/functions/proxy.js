const axios = require("axios");

exports.handler = async function(event, context) {
  const { path, httpMethod, headers, body } = event;

  // Determine which API to call based on the path
  let apiUrl = "";

  if (path.includes("/restaurants")) {
    apiUrl = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.66500&lng=77.44770&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
  } else if (path.includes("/menu")) {
    const restaurantId = path.split("/menu/")[1]; // Extract restaurantId from the path
    apiUrl = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6691565&lng=77.45375779999999&restaurantId=${restaurantId}`;
  }

  try {
    const response = await axios({
      method: httpMethod,
      url: apiUrl,
      headers,
      data: body,
    });

    return {
      statusCode: response.status,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: error.response ? error.response.status : 500,
      body: error.message,
    };
  }
};
