import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface IMessagepopSlice{
    state: string,
    content: string
}
const initialState:IMessagepopSlice = {
    state: '',
    content: ''
}

const messagePopSlice = createSlice({
    name: 'messagePop',
    initialState,
    reducers:{
        setMessagePop: (_state,action: PayloadAction<IMessagepopSlice>)=>{
            return action.payload;
        },
        clearMessagePop: ()=> initialState
    }
})

export const { setMessagePop, clearMessagePop } = messagePopSlice.actions;
export default messagePopSlice;