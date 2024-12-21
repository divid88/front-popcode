'use client'

import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { executeCode } from './api';
import PythonCodeDisplay from './ShowCode';

type Props ={
    editorRef:any
}

export default function Output({editorRef}:Props) {
    const [output,setOutput] = useState(null)
    const [error, setError] = useState(null)
    
    const runCode = async() => {
        
        const sourceCode = editorRef.current.getValue();
    

        if (!sourceCode) return;

        try {

            const {run: result} = await executeCode(sourceCode)
            setOutput(result.stdout)
            setError(result.stderr)
        } catch (error) {
            
        }
    }

    console.log(output)
  return (
    <div className=' flex flex-col w-full' dir="ltr">
        <Button className='rounded-none' onClick={runCode}> اجرای برنامه  </Button>
        <span className='  h-64 bg-gray-900 border text-white p-3'>
            {output && <PythonCodeDisplay  code={output}/>}
            {error && <div className="bg-red-500 text-white p-3">{error}</div>}

        </span>
        
    </div>
  )
}