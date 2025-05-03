import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface IBookingData{
    doctorName: string,
    patientName: string,
    cost: string,
    patientPhone: string,
    waitTime: string,
    date: string,
    address: string
}
const initialState:IBookingData = {
    doctorName: '',
    patientName: '',
    cost: '',
    patientPhone: '',
    waitTime: '',
    date: '',
    address: ''
}
const bookingDetailsSlice = createSlice({
    name: 'bookingDetails',
    initialState,
    reducers:{
        setBookingDetails: (_state,action: PayloadAction<IBookingData>)=>{
            return action.payload;
        },
        clearBookingDetails: ()=> initialState
    }
})

export const { setBookingDetails, clearBookingDetails } = bookingDetailsSlice.actions;
export default bookingDetailsSlice;