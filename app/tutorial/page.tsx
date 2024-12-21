import { Button } from '@/components/ui/button'
import React from 'react'
import { ListTutorial} from './components/list-tutorials'

import DescribLesson from './components/DescribLesson'

async function tutorial() {

  const subjects = [
    { id: 1, title: "شروع"},
    { id: 1, title: "متغیرها در پایتون"},
    { id: 1, title: "کامنت نویسی در پایتون"},
    { id: 1, title: " شرط در پایتون"},
    { id: 1, title: " حلقه های تکرار در پایتون"},
    { id: 1, title: "متن در پایتون"},
  ]
  return (
    <div className=' relative'>
      <div className=" absolute top-3 right-3">
        <ListTutorial subjects={subjects} />
      </div>

      <DescribLesson/>
    </div>
  )
}

export default tutorial