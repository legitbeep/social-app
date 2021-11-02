import {createApi ,fetchBaseQuery} from '@reduxjs/toolkit/query/react' 
import {signInWithGoogle,signInWithEmailAndPassword} from './firebase'

export const authApi =createApi({
    reducerPath:'logapi',
    endpoints:(build)=>({
        loginGoogle:build.mutation({
           query:(body)=>(
            signInWithGoogle()
           )
        }),
        loginEmail:build.mutation({
            query:(body)=>(
               signInWithEmailAndPassword(body.email,body.password)
            )
         })
    })
})
