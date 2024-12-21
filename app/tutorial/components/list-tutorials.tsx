import { Button } from "@/components/ui/button"


import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"


type subject ={
  id: number,
  title: string
}

type Props = {
  subjects: subject[]
}


export function ListTutorial({subjects}: Props)  {
  return (
    <Sheet >
      <SheetTrigger asChild>
        <Button variant="outline" size='sm'> لیست آموزش </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className=" text-center text-rose-600"> لیست آموزش </SheetTitle>
          <SheetDescription className=' overflow-scroll' >
          <ul className=" h-screen overflow-scroll" >

{subjects.map((item) => (
 <Link href={`/tutorial/${item.id}`} > 
    <li className='p-2 border hover:bg-primary hover:text-background 
    transition-all text-center ' key={item.id}>{item.title}</li>
 </Link>
))}

</ul>
          </SheetDescription>
        </SheetHeader>

        <SheetFooter>
        
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
