'use client';

import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { ToastAction } from "@/components/ui/toast"
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

type accessProp = {
  access: string | undefined
}

export default function FileUpload() {
  const [res, setRes] = useState({})
  const [err, setErr] = useState(null)
  const {toast} = useToast()
    
  const [file, setFile] = useState(null);
  const [uploadMessage, setUploadMessage] = useState('');




    // const handleClick = async () => {
    //   toast({ 
    //     className: 'bg-green-600 text-white',
    //     title: "باریک...." ,
    //     description: "کدت کار کرد "  
    //   });
    // };

    // const toastError = async () => {
    //   toast({ 
    //     className: 'bg-red-600 text-white',
    //     title: "دوباره تلاش کن...." ,
    //     description: "کدت کار نکرد "  
    //   });
    // };


   



  return (
    <div className="flex flex-col my-5 dark:bg-card p-7 items-center justify-center">
      
      <h1 className=" text-red-600 my-7"> فرستادن نمونه برنامه  </h1>
      <form 
            className=" flex justify-center items-center gap-x-3 ">
        <Label className=" border border-primary p-2 rounded-md text-sm"> اضافه کردن فایل +
        <Input  type="file" 
                className="hidden w-full h-full"
                accept=".py" 
                />

          </Label>
        <Button type="submit" > 
                 ارسال 
         </Button>
      </form>
      {/* {uploadMessage && <p>{uploadMessage}</p>} */}

      {/* <div className="mt-4 dark:bg-card">
        {res !==null && 
          <>
          <p>{res?.test_result} </p>
        
   
        </>
      }
      </div>

      <div className="mt-4 dark:bg-card text-red-400">
        {err !==null && 
          <>
          <p>{err?.test_result} </p>
        
   
        </>
      }
      </div> */}
    </div>
  );

}