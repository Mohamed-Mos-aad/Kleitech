// ** Hooks && Tools
import { configureStore } from '@reduxjs/toolkit'
// ** Slices
import userSignUpSlice from './slices/userSignUpSlice';
import userLoginSlice from './slices/userSlice';
import donePageSlice from './slices/donePageSlice';
import bookingDetailsSlice from './slices/bookingDetails';




const store = configureStore({
    reducer: {
        userSignUp: userSignUpSlice.reducer,
        userLogin: userLoginSlice.reducer,
        donePage: donePageSlice.reducer,
        BookingDetails: bookingDetailsSlice.reducer
    },
})





export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;