import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface IChatDataSlicer{
    replayId: string | null,
}
const initialState:IChatDataSlicer = {
    replayId: null,
}
const chatDataSlice = createSlice({
    name: 'chatDataS',
    initialState,
    reducers:{
        setChatDataS: (_state,action: PayloadAction<IChatDataSlicer>)=>{
            return action.payload;
        },
        clearChatDataS: ()=> initialState
    }
})

export const { setChatDataS, clearChatDataS } = chatDataSlice.actions;
export default chatDataSlice;