import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface IHomeAiSlice{
    classification_result: string,
}
const initialState:IHomeAiSlice = {
    classification_result: ''
}

const homeAiSlice = createSlice({
    name: 'homeAi',
    initialState,
    reducers:{
        setHomeAi: (_state,action: PayloadAction<IHomeAiSlice>)=>{
            return action.payload;
        },
        clearHomeAi: ()=> initialState
    }
})

export const { setHomeAi, clearHomeAi } = homeAiSlice.actions;
export default homeAiSlice;