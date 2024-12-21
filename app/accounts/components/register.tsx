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

export default function Register() {
  return (
    <Card dir='rtl'>
    <CardHeader>
      <CardTitle> ثبت نام </CardTitle>

    </CardHeader>
    <form>
        <CardContent className="space-y-2">
        <div className="space-y-1">
            <Label htmlFor="name"> ایمیل </Label>
            <Input id="name" 
                   placeholder="example@mail.com"
                   type="email"
                   />
          </div>
          <div className="space-y-1">
            <Label htmlFor="username"> پسورد</Label>
            <Input id="username" 
                   placeholder="******" 
                   type="password"
                   />
          </div>
    
          <div className="space-y-1">
            <Label htmlFor="username"> تکرار پسورد </Label>
            <Input 
                    id="username" 
                    placeholder="******" 
                    type="password"
                    />
          </div>
        </CardContent>
        <CardFooter>
          <Button> ثبت نام </Button>
        </CardFooter>
    </form>
  </Card>
  )
}
