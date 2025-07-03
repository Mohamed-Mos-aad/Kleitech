import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IOtpData{
    otpEmail: string | null,
    purpose: 'signUp' | 'resetPassword' | null;
    token: string | null,
}

const initialState:IOtpData = {
    otpEmail: null,
    purpose: null,
    token: null
}

const otpEmailSlice = createSlice({
    name: 'otpEmail',
    initialState,
    reducers:{
        setOtpEmail: (state, action: PayloadAction<Partial<IOtpData>>) => {
            return {...state, ...action.payload}
        },
        clearOtpEmail: () => initialState
    }
})

export const { setOtpEmail , clearOtpEmail} = otpEmailSlice.actions;
export default otpEmailSlice;
