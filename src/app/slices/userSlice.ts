import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUserLoginState {
    name: string | null;
    email: string | null;
    loggedIn: boolean;
}

const initialState: IUserLoginState = {
    name: null,
    email: null,
    loggedIn: false,
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
export default userLoginSlice.reducer;
