
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Register from "./components/register"
import Login from "./components/login"


async function accounts() {




  return (

    <div className="flex flex-col items-center justify-center h-full mt-10">
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account"> ثبت نام </TabsTrigger>
        <TabsTrigger value="password"> ورود </TabsTrigger>
      </TabsList>
      <TabsContent value="account">
            <Register/>
      </TabsContent>
      <TabsContent value="password">
       
       <Login/>

      </TabsContent>
    </Tabs>

    </div>
  )
}

export default accounts