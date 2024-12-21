import DescribLesson from '../components/DescribLesson' 
import React from 'react'
import FileUpload from '../components/upload-file'
import { cookies } from 'next/headers'
import { ListCoding } from '../components/list-coding'
import { getProgramTest, getSubjects } from '../components/action'



export default async function page({ params }: { params: { id: number } }) {

  const subjects = [
    { id: 1, title: "استرینگ" , 
      tests: [{id: 1, description: "برعکس کردن یک استرینگ"}]},


  ]
  return (
    <div className=' relative '>
<ListCoding subjects={subjects}/>
         <DescribLesson  />

         

         <FileUpload />
    </div>
  )
}
