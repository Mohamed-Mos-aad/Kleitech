import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUserLoginState {
    email: string | null;
    password: string | null;
    loggedIn: boolean;
}

const initialState: IUserLoginState = {
    email: null,
    password: null,
    loggedIn: true,
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
