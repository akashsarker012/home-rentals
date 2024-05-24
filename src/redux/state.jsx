import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

// **Explicitly export setLogin action for clarity:**
export const { login,setLogout } = userSlice.actions;

export default userSlice.reducer;
