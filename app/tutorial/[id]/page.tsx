import React from 'react'
import {ListTutorial} from '../components/list-tutorials'
import DescribLesson from '../components/DescribLesson'
import EditorCode from '../components/EditorCode'
import { getSubjects } from './actions'

export default async function Tutorial() {

  const subjects = [
    { id: 1, title: "شروع"},
    { id: 2, title: "متغیرها در پایتون"},
    { id: 3, title: "کامنت نویسی در پایتون"},
    { id: 4, title: " شرط در پایتون"},
    { id: 5, title: " حلقه های تکرار در پایتون"},
    { id: 6, title: "متن در پایتون"},
  ]

  return (
    <div className=' relative'>
    <div className='  grid md:grid-cols-12 '>
        
        <div className=' relative' >
        {/* list tutorial */}

            <ListTutorial subjects={subjects} />


        </div>
        {/* describe tutorial */}
        <div className=' col-span-12 h-[550px] overflow-scroll border 
                          rounded-lg '>
            
          <DescribLesson/>
        </div>
    </div>

    <EditorCode/>

    </div>
  )
}