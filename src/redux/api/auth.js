import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signInWithGoogle, signInWithEmailAndPassword } from "./firebase";

export const loginGoogle = createAsyncThunk("user/login", async (history) => {
  const response = await signInWithGoogle(history);
  console.log(response);
  return response.data || null;
});
const auth = createSlice({
  name: "auth",
  initialState: { user: null },
  reducer: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginGoogle.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginGoogle.fulfilled, (state, action) => {
        state.status = "idle";
        state.user = action.payload;
      });
  },
});

export const authActions = auth.actions;
export default auth.reducer;
