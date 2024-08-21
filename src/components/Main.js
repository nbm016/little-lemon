import { useReducer } from "react"
import { Route, Routes, useNavigate } from 'react-router-dom'
import Header from './Header';
import Booking from './Booking';
import ConfirmedBooking from './ConfirmedBooking';

function Main(){

    //const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"])

    /* const seededRandom = function(seed){
        var m = 2**35 - 31;
        var a = 185852;
        var s = seed % m;
        return function(){
            return (s = s * a % m) / m;
        }
    } 

    const fetchAPI = function(date){
        let result = [];
        let random = seededRandom(date.getDate());
        for (let i = 17; i <= 23; i++){
            if(random() < 0.5){
                result.push(i + ':00');
            }

            if(random() >= 0.5){
                result.push(i + ':30');
            }
        }
    }

    const submitAPI = function(formData){
        return true;
    }

    const initialState = {availableTimes: fetchAPI(new Date())};
    const [state, dispatch] = useReducer(updateTimes, initialState);

    function updateTimes(state, date){
        return {availableTimes: fetchAPI(new Date(date))};
    }

    const navigate = useNavigate();
    function submitForm(formData) {
        if(submitAPI(formData)){
            navigate("/confirmed");
        }
    }
    */

    const timeList = [
        {
          id: 0,
          time: '--',
          value: '',
        },
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