import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'
import {signInWithGoogle ,signInWithEmailAndPassword} from './firebase'




const loginGoogle = createAsyncThunk(
    '',
    async () => {
      const response = await signInWithGoogle()
      return response.data
    }
  )
const auth=createSlice({
    name:"counter",
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(loginGoogle.fulfilled, (state, action) => {
          // Add user to the state array
          state.entities.push(action.payload)
        })
      },

})

export const authActions=auth.actions;
export  default auth.reducer