import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = { user: null };

const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {},
});

export default userSlice.reducer;

/*

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

*/
