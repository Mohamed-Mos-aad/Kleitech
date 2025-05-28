import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IOtpData{
    otpEmail: string,
}

const initialState:IOtpData = {
    otpEmail: ''
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
