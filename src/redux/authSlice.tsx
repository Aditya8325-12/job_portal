import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  userType: Cookies.get("id_user")
    ? "user"
    : Cookies.get("id_Company")
    ? " company "
    : null,
  isAuthenticated: !!Cookies.get("id_user") || !!Cookies.get("id_Company"),
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: (state, action) => {
      const { type, id } = action.payload;
      state.userType = type;
      state.isAuthenticated = true;
      if (type === "user") Cookies.set("id_user", id, { expires: 7 });
      else Cookies.set("id_Company", id, { expires: 7 });
    },
    logOut: (state, action) => {
      Cookies.remove("id_user");
      Cookies.remove("id_Company");
      state.userType = null;
      state.isAuthenticated = false;
    },
  },
});

export const { signIn, logOut } = authSlice.actions;

export default authSlice.reducer;
