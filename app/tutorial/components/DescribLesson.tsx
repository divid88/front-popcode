import React from 'react'
import PythonCodeDisplay from './ShowCode'

export default function DescribLesson() {
  return (
    <div className=' h-full p-4 overflow-scroll text-xs bg-secondary
                    dark:bg-card'>
         
         {/* main title lesson */}
         <div className='my-3 text-primary'>
           <h1 className=' font-bold'> متغیرها در پایتون </h1>
           
            </div>

            {/* lessons describ */}
            <div className='border-b-2 my-1'>
                <h2 className=' my-1 p-2 text-primary '> متغیرها </h2>

                <p className='my-1 '>
                متغیر نامی است که به یک آدرس از حافظه سیستم اشاره میکند.
                </p>

            </div>

{/* lesson describ */}
            <div className='border-b-2 my-2'>
                <h2 className=' my-2 p-2 text-primary'> ایجاد متغیرها </h2>

                <p className='my-2 '>
            ایجاد متغیر ددر پایتون کار بسیار آسانی است. <br/> برای ایجاد متغیر کافیست یک نام برای متغیر انتخاب کنید
           


                </p>
                <div className='my-7'>
                    <PythonCodeDisplay code={`x = 5
y = "John"
print(x)
print(y)`}/>
                </div>

                <p className='my-2 '>
                    متغیرها نیازی به تعریف قبلی ندارند و می‌توانید در هر جایی از برنامه آن‌ها را ایجاد کنید
                
                </p>
                
                <div className='my-7'>
                    <PythonCodeDisplay code={`x = 4       # x is of type int
x = "Sally" # x is now of type str
print(x)`}/>
                </div>

            </div>

            
                     {/* main title lesson */}
         <div className='my-3 text-primary'>
           <h1 className=' font-bold'> متغیرها در پایتون </h1>
           
            </div>

            {/* lessons describ */}
            <div className='border-b-2 my-1'>
                <h2 className=' my-1 p-2 text-primary '> متغیرها </h2>

                <p className='my-1 '>
                متغیر نامی است که به یک آدرس از حافظه سیستم اشاره میکند.
                </p>

            </div>

{/* lesson describ */}
            <div className='border-b-2 my-2'>
                <h2 className=' my-2 p-2 text-primary'> ایجاد متغیرها </h2>

                <p className='my-2 '>
            ایجاد متغیر ددر پایتون کار بسیار آسانی است. <br/> برای ایجاد متغیر کافیست یک نام برای متغیر انتخاب کنید
           


                </p>
                <div className='my-7'>
                    <PythonCodeDisplay code={`x = 5
y = "John"
print(x)
print(y)`}/>
                </div>

                <p className='my-2 '>
                    متغیرها نیازی به تعریف قبلی ندارند و می‌توانید در هر جایی از برنامه آن‌ها را ایجاد کنید
                
                </p>
                
                <div className='my-7'>
                    <PythonCodeDisplay code={`x = 4       # x is of type int
x = "Sally" # x is now of type str
print(x)`}/>
                </div>

            </div>

            
        
        </div>
  )
}