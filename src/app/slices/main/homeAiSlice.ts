import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface IHomeAiSlice{
    ResultIs: string,
}
const initialState:IHomeAiSlice = {
    ResultIs: ''
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