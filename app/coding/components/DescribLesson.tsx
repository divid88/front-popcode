import React from 'react'
import PythonCodeDisplay from './ShowCode'


type programProps = {
    description: string,
    level: number,
    test_code: string,
    test_result: string | null,
    inputs: string | null,
    outputs: string | null, 
    example_code: string
}

export default function DescribLesson({program}: programProps | any) {
  return (
    <div className=' h-full p-4 overflow-scroll text-xs bg-secondary dark:bg-card'>
         
         {/* main title lesson */}
         <div className='my-3 text-primary'>
           <h1 className=' font-bold'> برعکس کردن یک استرینگ </h1>
           
            </div>

            {/* lessons describ */}
            <div className='border-b-2 my-1'>
                <h2 className=' my-1 p-2 text-primary '> ورودی </h2>

                <p className='my-1 '>
                   david amiri
                </p>

            </div>

            <div className='border-b-2 my-1'>
                <h2 className=' my-1 p-2 text-primary '> بر عکس شده استرینگ ورودی</h2>

                <p className='my-1 '>
                    irima divad
                </p>

            </div>

{/* lesson describ */}
            <div className='border-b-2 my-2'>
                <h2 className=' my-2 p-2 text-primary'> نمونه ورودی خروجی </h2>

                <div className='my-7'>
                    <PythonCodeDisplay code="input('david amiri') print('irima divad"/>
                </div>

            
        
        </div>

        </div>
  )
}