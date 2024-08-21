import { useReducer } from "react"
import { Route, Routes, useNavigate } from 'react-router-dom'
import Header from './Header';
import Booking from './Booking';
import ConfirmedBooking from './ConfirmedBooking';

function Main(){

    const timeList = [
        {
          id: 1,
          time: '5:00 PM',
          value: '5-pm',
        },
        {
          id: 2,
          time: '6:00 PM',
          value: '6-pm',
        },
        {
          id: 3,
          time: '7:00 PM',
          value: '7-pm',
        },
        {
          id: 4,
          time: '8:00 PM',
          value: '8-pm',
        },
        {
          id: 5,
          time: '9:00 PM',
          value: '9-pm',
        },
        {
          id: 6,
          time: '10:00 PM',
          value: '10-pm',
        },
      ]

      const fetchData = (date) => {
        const time = []
        const result = []

        if(date.getDate()) {
            timeList.forEach((list) => time.push(list.time));

            for (let i = 0; i < time.length; i++){
                if(date.getDate()){
                    result.push(time[i]);
                }
            }
        }
        return result;
      }

      const submitData = (formData) => {
        if(formData) {
            return true;
        } else {
            return false;
        }
      }

      const navigate = useNavigate();

      const submitForm = (formData) => {
        if (submitData(formData)){
            navigate("/confirmed");
        }
      }

      const updateTimes = (state, action) => fetchData(new Date(action));

      const initializeTimes = fetchData(new Date());

      const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);
      
    return (
        <main className="main">
            <Routes>
                <Route path='/' element={<Header/>}/>
                <Route path='/booking' element={<Booking availableTimes={availableTimes} dispatch={dispatch} submitForm=
                {submitForm}/>}/>
                <Route path='/confirmed' element={<ConfirmedBooking/>}/>
            </Routes>
        </main>
    )
}

export default Main;