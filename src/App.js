import React, { useEffect, useRef, useState } from 'react';
// import clearInterval from 'react';
import './App.scss';

function App() {
  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');
  const [valueYear, setValueYear] = useState('');
  const [valueMonth, setValueMonth] = useState('');
  const [valueDays, setValueDays] = useState('');
  const [valueHours, setValueHours] = useState('');
  const [valueMinutes, setValueMinutes] = useState('');
  const [valueSeconds, setValueSeconds] = useState('');


  const handlerOnChangeYear = ({ target }) => {
    setValueYear(target.value)
  }
  const handlerOnChangeMonth = ({ target }) => {
    setValueMonth(target.value)
  }
  const handlerOnChangeDays = ({ target }) => {
    setValueDays(target.value)
  }
  const handlerOnChangeHours = ({ target }) => {
    setValueHours(target.value)
  }
  const handlerOnChangeMinutes = ({ target }) => {
    setValueMinutes(target.value)
  }
  const handlerOnChangeSeconds = ({ target }) => {
    setValueSeconds(target.value)
  }


  let countdownDate = 0;


  
  let interval;
  const startTimer = () => {
    countdownDate = new Date(valueYear, valueMonth - 1, valueDays, valueHours, valueMinutes, valueSeconds);
    countdownDate = countdownDate.getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval);
      }
      else {
        // update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }


      console.log(distance);


    }, 1000);
    
  }
  const handlerStart = () => {
    startTimer();
  }
 const handlerStop = () => {
        clearInterval(interval);
      }

 

  return (
    <>
      <section className='container'>
        <section className='timer'>
          <div className='title'>
            <h2>Countdown timer</h2>

            <form action="" className="form-inline" />
            <div className="form-group">
              <input className="form-control" type="text" value={valueYear} onChange={handlerOnChangeYear} placeholder="Year" />
              <input className="form-control" type="text" value={valueMonth} onChange={handlerOnChangeMonth} placeholder="Month" />
              <input className="form-control" type="text" value={valueDays} onChange={handlerOnChangeDays} placeholder="Days" />
              <input className="form-control" type="text" value={valueHours} onChange={handlerOnChangeHours} placeholder="Hours" />
              <input className="form-control" type="text" value={valueMinutes} onChange={handlerOnChangeMinutes} placeholder="Minutes" />
              <input className="form-control" type="text" value={valueSeconds} onChange={handlerOnChangeSeconds} placeholder="Seconds" />
            </div>

          </div>
          <div className='wrapper-timer'>
            <section className='time-section'>
              <p className='amount'>{timerDays}</p>
              <p>Days</p>
            </section>
            <span>:</span>
            <section className='time-section'>
              <p className='amount'>{timerHours}</p>
              <p>Hours</p>
            </section>
            <span>:</span>
            <section className='time-section'>
              <p className='amount'>{timerMinutes}</p>
              <p>Minutes</p>
            </section>
            <span>:</span>
            <section className='time-section'>
              <p className='amount'>{timerSeconds}</p>
              <p>Seconds</p>
            </section>
          </div>
          <div className="wrapper-button">
            <button className="start" onClick={handlerStart}>Start</button>
            <button className="stop" onClick={handlerStop}>Stop</button>
          </div>
        </section>
      </section>
    </>
  );  
}

// function App() {
//   const [counter, setCounter] = useState(0);
//   const [value, setValue] = useState("");

//   const handlerOnChange = ({ target }) => {
//     setValue(target.value)
//     setCounter(target.value)
//   }

//   const onClickStart = () => {

//   }

//   useEffect(() => {
//     counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
//   }, [counter]);




//   return (
//     <>
//       <section className='container'>
//         <section className='timer'>
//           <div className='title'>
//             <h2>Countdown timer</h2>
//             <input value={value} type="text" onChange={handlerOnChange} />
//             <button onClick={onClickStart}>go</button>
//           </div>
//           <div className='wrapper-timer'>
//             <section className='time-section'>
//               <p className='amount-time'>{counter}</p>
//               <p>Seconds</p>
//             </section>
//           </div>
//         </section>
//       </section>
//     </>
//   );
// }



export default App;
