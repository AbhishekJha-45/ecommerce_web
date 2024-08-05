import axios from "axios";
import BASE_URL from "constants/constants";
import Cookies from "js-cookie";
const accessToken = Cookies.get("access_token");
const refreshToken = Cookies.get("refresh_token");

const isTokenExpired = (token) => {
  if (!token) {
    console.error("Token is undefined or null");
    return true;
  }
  try {
    const decodedToken = JSON.parse(atob(token.split(".")[1]));
    if (!decodedToken || !decodedToken.exp) {
      return true;
    }
    const expiryDate = new Date(decodedToken.exp * 1000);
    return new Date() > expiryDate;
  } catch (error) {
    console.error("Invalid token:", error);
    return true;
  }
};
const refreshAccessToken = async () => {
  try {
    const response = await axios.post(
      `${BASE_URL}/users/refresh-access-token`,
      {
        refresh_token: refreshToken,
      }
    );

    if (response.status === 200) {
      Cookies.set("access_token", response.data.data.access_token, {
        expires: 1,
        sameSite: "Lax",
        secure: false,
      });
      return response.data.data.access_token;
    } else if (response.status === 401) {
      throw new Error("Unauthorised Request");
    } else if (response.status === 500) {
      throw new Error("Invalid Access Token or Refresh Token");
    } else {
      console.log(await response.data);
      return null;
    }
  } catch (error) {
    console.error("Error refreshing token:", error.response.data);
  }
};
const AuthCheck = async () => {
  if (!isTokenExpired(accessToken) && accessToken) {
    const response = axios.post(`${BASE_URL}/users/verify-access-token`, null, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (response.status === 200) {
      console.log(await response.data);
      return response.data;
    } else if (response.status === 401) {
      throw new Error("Unauthorised Request");
    } else if (response.status === 500) {
      throw new Error("Invalid Access Token or Refresh Token");
    } else {
      console.log(await response.data);
      return null;
    }
  } else if (!accessToken && refreshToken) {
    refreshAccessToken();
  }
};
export default AuthCheck;
