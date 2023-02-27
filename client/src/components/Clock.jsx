import React, { Fragment } from 'react'

const Clock = ({timerDays, timerHours, timerMinutes, timerSeconds}) => {
  return (
    <Fragment>
      <section className='container'>
        <section className='timer '>
            <div className="clock flex justify-between gap-10 items-center w-full">
                <section className='flex justify-center items-end gap-1'>
                    <p className='text-[2.1rem] font-bold text-[#11111]'>{timerDays}</p>
                    <small className='text-[14px] text-[#666666]'>Day</small>
                      </section>
                      <section className='flex justify-center items-end gap-1'>
                    <p className='text-[2.1rem] font-bold text-[#11111]'>{timerHours}</p>
                    <small className='text-[14px] text-[#666666]'>Hour</small>
                      </section>
                      <section className='flex justify-center items-end gap-1'>
                    <p className='text-[2.1rem] font-bold text-[#11111]'>{timerMinutes}</p>
                    <small className='text-[14px] text-[#666666]'>Min</small>
                      </section>
                      <section className='flex justify-center items-end gap-1'>
                    <p className='text-[2.1rem] font-bold text-[#11111]'>{timerSeconds}</p>
                    <small className='text-[14px] text-[#666666]'>Sec</small>
                </section>
            </div>
        </section>
      </section>
    </Fragment>
  )
}

Clock.defaultProps={
    timerDays: 10,
    timerHours: 10,
    timerMinutes: 10,
    timerSeconds: 10

}
export default Clock
