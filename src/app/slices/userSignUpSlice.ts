import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISignUpData } from "../../interfaces";

const initialState:ISignUpData = {
    userName: '',
    userId: '',
    userPhone: '',
    userEmail: '',
    userPassword: '',
    userPasswordConfirm: '',
    hasIllnesses: null,
    userWeight: '',
    userHeight: '',
    hasDoctor: null,
    userDate: '',
    userState: ''
}

const userSignUpSlice = createSlice({
    name: 'userSignUp',
    initialState,
    reducers:{
        setUserSignUpData: (state, action: PayloadAction<Partial<ISignUpData>>) => {
            return {...state, ...action.payload}
        },
        clearUserSignUpData: () => initialState
    }
})

export const { setUserSignUpData , clearUserSignUpData} = userSignUpSlice.actions;
export default userSignUpSlice;
