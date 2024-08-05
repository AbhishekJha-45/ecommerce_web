import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BASE_URL from "constants/constants";
import Cookies from "js-cookie";

// Define an async thunk for logging out
export const logoutAsync = createAsyncThunk(
  "user/logout",
  async (_, { rejectWithValue }) => {
    try {
      const access_token = Cookies.get("access_token");
      const response = await axios.post(`${BASE_URL}/users/logout`, null, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  user: null,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logout: (state) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(logoutAsync.fulfilled, (state) => {
        state.user = null;
        state.isLoggedIn = false;
      })
      .addCase(logoutAsync.rejected, (state, action) => {
        console.error("Logout failed:", action.payload);
      });
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
