import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="container mx-auto h-[750px] md:h-[450px] md:w-[70%] 
    md:bg-contain bg-contain 
   bg-center md:grid md:grid-cols-1 mt-7">

{/* mobile text */}
<div className=" mt-2 border shadow-md animate-zoom-in md:mt-2 bg-secondary
 shadow-secondary p-5 mx-3 rounded-lg text-center py-5">

<div className=" flex items-center justify-center gap-1 ">


<div className=" row-span-11">
<h1 className="font-black text-xl mt-2 md:my-1 text-center tracking-tighter ">
به پُوپکُد خوش آمدین 
</h1>


<h1 className="  text-md  font-extrabold text-center leading-10">


         آموزش رایگان  پایتون  با تمرین و تست رایگان  قدم به قدم ...

         </h1>
<h1 className="text-center my-4 text-primary ">
هدفمند کد بزن و مسلط شو.
</h1>
</div>

</div>
<div className=" flex justify-center my-2 md:my-3">
  <Image src="/python_logo.png" alt="logo-python" width={100} height={100}/>
</div>

    <h2 className=" text-center leading-8 my-2">
وب اپلیکیشن پوپ کد وب اپی کاملا رایگان برای آموزش تئوری و عملی زبان برنامه نویسی پایتون است.
در این وب اپلکیشن شما میتوانید از آموزش های متنی  مانند سایت w3school و ویدئو های
آپلود شده در سایت aparat استفاده کنید .

برای اینکه اینکه مظمئن شویم مطالب را به طور کامل یاد گرفته اید و به آن مسلط شدید 
باید تمرینات هر قسمت را انجام دهید تا به مرحله بعد بروید.

    </h2>



  <Link href="/tutorial/1">
    <Button className="mt-4 md:mt-3 md:"> برای یادگیری کلیک کن...</Button>
  </Link>
</div>

</div>

  );
}
