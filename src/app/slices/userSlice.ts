import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUserLoginState {
    email: string | null;
    password: string | null;
    loggedIn: boolean;
    role: string
}

const initialState: IUserLoginState = {
    email: null,
    password: null,
    loggedIn: false,
    role: ''
};

const userLoginSlice = createSlice({
    name: 'userLogin',
    initialState,
    reducers: {
        setUserLogin: (state, action: PayloadAction<IUserLoginState>) => {
            return { ...state, ...action.payload };
        },
        logout: () => initialState,
    },
});

export const { setUserLogin, logout } = userLoginSlice.actions;
export default userLoginSlice;
