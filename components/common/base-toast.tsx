'use client'

import { useToast } from "@/hooks/use-toast"


const {toast} = useToast()


function handleToast(color:string , title:string, description:string){
    toast({ 
        className: ` ${color} text-white`,
        title: `${title}`,
        description: `${description}`  
      });
      
}

export default handleToast;