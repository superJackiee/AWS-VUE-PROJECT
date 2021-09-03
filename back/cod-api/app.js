const API = require("call-of-duty-api")({ platform: "battle" });
let response;

exports.codApiHandler = async (event, context) => {
  try {
    // Get credentials from configuration file.
    // For security reasons, file will only be available by request.
    const auth = {
      username: process.env.COD_USERNAME,
      password: process.env.COD_PASSWORD,
    };

    await API.login(auth.username, auth.password);

    let codApiResponse = await API.MWleaderboard("1");

    response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({
        message: "Success",
        data: { codApiResponse },
      }),
    };
  } catch (e) {
    console.error(e);
    const errorResponse = {
      statusCode: error.status,
      headers: {
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
        "Access-Control-Allow-Credentials": true, // Required for cookies, authorization headers with HTTPS
      },
      body: JSON.stringify({
        message: error.title,
      }),
    };

    return errorResponse;
  }

  return response;
};
