// ** Hooks && Tools
import { configureStore } from '@reduxjs/toolkit'
// ** Slices
import userSignUpSlice from './slices/userSignUpSlice';
import userLoginSlice from './slices/userSlice';
import donePageSlice from './slices/donePageSlice';
import bookingDetailsSlice from './slices/bookingDetails';
import otpEmailSlice from './slices/auth/otpSlice';
import chatDataSlice from './slices/chat/chatSlice';
import homeAiSlice from './slices/main/homeAiSlice';




const store = configureStore({
    reducer: {
        userSignUp: userSignUpSlice.reducer,
        userLogin: userLoginSlice.reducer,
        donePage: donePageSlice.reducer,
        BookingDetails: bookingDetailsSlice.reducer,
        otpEmail: otpEmailSlice.reducer,
        chatDataS: chatDataSlice.reducer,
        homeAi: homeAiSlice.reducer
    },
})





export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;