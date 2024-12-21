'use client'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { login } from "@/app/actions/accounts"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useToast } from "@/hooks/use-toast"


export default function Login() {
  const [email, setEMail] = useState('')
  const [password, setPassword] = useState('')

    const router = useRouter()
    const {toast} = useToast()

   const handleSubmit  = async() => {

      const res = await login(email, password)
      if(res){
        toast({
          className: 'bg-green-600 text-white',
          title: "قدم رنجه فرمودین  منور نمودین" ,
          
        })
        router.push('/')

      
      }else{
        
        
      }
    
   }
  return (
    <Card dir='rtl'>
    <CardHeader>
      <CardTitle>  ورود </CardTitle>
      <CardDescription>
        
      </CardDescription>
    </CardHeader>
    <form  >
    <CardContent className="space-y-2">
      
        <div className="space-y-1">
          <Label htmlFor="email"> ایمیل </Label>
          <Input id="name" 
                 placeholder="example@mail.com" 
                 type="email"
                 value={email}
                 onChange={(e) => setEMail(e.target.value)}
                 />

        </div>
        <div className="space-y-1">
          <Label htmlFor="password"> پسورد</Label>
          <Input id="password" 
                 placeholder="******" 
                 type="password"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 />
        </div>
      
    </CardContent>
    <CardFooter>
      <Button type='button' onClick={handleSubmit}> ورود </Button>
    </CardFooter>
    </form>
  </Card>
  )
}
