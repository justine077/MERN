import React, {useState, useEffect} from 'react'
import Clock from './Clock'

const Discount = () => {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval;

  const startTimer = () => {
    const countDownDate = new Date("April 28 , 2023").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;
      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(distance % (24 * 60 * 60 * 1000) / (1000 * 60 * 60));
      const minutes = Math.floor(distance % (60 * 60 * 1000) / (1000 * 60));
      const seconds = Math.floor(distance % (60 * 1000) / (1000));
      
      if (distance < 0) {
        // Stop Timer
        clearInterval(interval.current)
      } else {
        // Update Timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }

    });
  };

  useEffect(() => {
    startTimer();
  })
  return (
    <div className=' w-full py-12 px-4 bg-[#E4E4E7] mx-auto'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-2 py-0 justify-center       items-center'>
            <div className="text-center bg-url[ bg-[url('./assets/discount.webp')] bg-cover bg-no-repeat bg-center w-full h-[400px]">
              
            </div>
              <div className='w-full h-full flex mx-auto bg-slate-200'>
                  <div className='relative bg-gray-100 w-[183px] h-[183px] mx-auto mt-16 rounded-full'>
                      <div className='absoulte '>
                          <span className='mt-[40px] realtive flex justify-center uppercase text-[#111111] text-[12px]'>
                            discount
                          </span>
                          <div className='relative h-auto right-[55%] text-[50px] font-[cursive] font-bold  max-w-[400px] w-96 text-center '>
                            <h2 className='text-center text-[#ca1515] mt-[-20px] py-2'>
                              Summer 2023
                            </h2>
                          </div>
                          <div className='text-center mt-[-10px]'>
                            <span className='mb-2 text-[14px] uppercase'>
                              sale
                            </span>
                            <span className='text-[#ca1515] font-bold text-[18px]'>
                              50%
                            </span>
                          </div>
                      </div>
                      <div className='relative text-center mt-16 w-fit xl:right-[50%]'>
                        <Clock
                          timerDays={timerDays}
                          timerHours={timerHours}
                          timerMinutes={timerMinutes}
                          timerSeconds={timerSeconds}
                        />
                      </div>
                  </div>
              </div>
        </div>
    </div>
  )
}

export default Discount
