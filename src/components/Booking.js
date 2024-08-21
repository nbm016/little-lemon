import BookingForm from "./BookingForm";
//import { useState } from "react";

function Booking(props) {
    return (
        <div>
            <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} submitForm={props.submitForm}/>
        </div>
        
    )
}

export default Booking;