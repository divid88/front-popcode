'use client'

import React, { useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"



import {Editor} from '@monaco-editor/react';
import Output from './Output';

function EditorCode() {
  const [value, setValue] = React.useState<string>(`x = "david"\ny = "John"\nprint(x)\nprint(y)`)
  const editorRef = useRef(null);

  const onMount = (editor: any) => {
    editorRef.current = editor
    editor.focus()
  }

 
  return (

    <Accordion type="single" collapsible  className=' sticky bottom-20 p-1 ' >
  <AccordionItem value="item">
    <AccordionTrigger className='bg-primary  rounded-lg px-7 py-1'>  تمرین کد زنی.... </AccordionTrigger>
    <AccordionContent>

    <div className=' grid grid-cols-12 bg-secondary w-full p-2 rounded-lg ' 
          dir='ltr'>
      <div className='col-span-6'>
        <Editor
          height="44.5vh" 
          width="75vh"
          className='font-thin leading-4 p-0  text-xs'
          defaultLanguage="python"
          defaultValue="// some comment"
          value={value}
          theme='vs-dark'
          onMount={onMount}

        />
      </div>

      <div className=' col-span-6'>
        <Output editorRef={editorRef}/>
      </div>

    </div>
    </AccordionContent>
  </AccordionItem>
</Accordion>

  );
}

export default EditorCode