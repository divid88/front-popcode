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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

type testProps ={
  description : string
  id: number

}

type subject ={
  id: number,
  title: string,
  tests: testProps[]
}

type Props = {
  subjects: subject[]
  
}


export function ListCoding({subjects}: Props)  {
 
  return (
    <Sheet >
      <SheetTrigger asChild>
        <Button variant="outline" size='sm'> لیست مسائله ها </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className=" text-center text-rose-600"> لیست آموزش </SheetTitle>
          <SheetDescription className=' overflow-scroll' >
          <ul className=" h-screen overflow-scroll" >

{subjects.map((item) => (
  <Accordion type="single" collapsible key={item.id}>
  <AccordionItem value="item-1">
    <AccordionTrigger >{item.title}</AccordionTrigger>
    
    <AccordionContent>
      {item.tests.map((test) => (
        <Link href={`/coding/${test.id}`} 
              className="text-center py-2"
              key={test.id}
              >{test.description}</Link>
      ))}
   
    </AccordionContent>
  </AccordionItem>
</Accordion>
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
