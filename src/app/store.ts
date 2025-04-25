import { configureStore } from '@reduxjs/toolkit'
import userSignUpSlice from './slices/userSignUpSlice';
import userLoginSlice from './slices/userSlice';




const store = configureStore({
    reducer: {
        userSignUp: userSignUpSlice.reducer,
        userLogin: userLoginSlice.reducer
    },
})





export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;