import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IDonePageState {
    actionType: 'signUp' | 'passwordReset' | 'passwordChange' | string;
}
const initialState:IDonePageState = {
    actionType: ''
}

const donePageSlice = createSlice({
    name: 'donePage',
    initialState,
    reducers:{
        setdonePage: (state, action: PayloadAction<string>) => {
            state.actionType = action.payload
        },
        cleardonePage: () => initialState
    }
})

export const { setdonePage , cleardonePage} = donePageSlice.actions;
export default donePageSlice;
