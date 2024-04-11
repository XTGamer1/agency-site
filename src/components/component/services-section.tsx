
import { CardTitle, CardDescription, CardHeader, Card } from "@/components/ui/card"
import { MotionDiv } from "./MotionDiv"

export function ServicesSection() {
  return (

<MotionDiv
initial={{ opacity: 0 }}
whileInView={{ opacity: 1 }}
viewport={{ once: true }}
transition={{
  delay: 0.2,
  ease: "easeInOut",
  duration: 1,
}}
id="Services"
  className="grid md:grid-cols-2 items-start gap-6 mx container mx-auto px-5 py-10"
  
>
<div>
<div className="flex gap-2 items-center" >
<div>
  <h1 className="text-6xl">HOW WE CAN <br />
    HELP YOU?</h1>
</div>
</div>
</div>
<Card className="rounded-lg" >
<CardHeader className="flex gap-2 p-8  ">
<h1 className="text-2xl">I WILL CREATE A FULLY <br />FUNCTIONAL DYNAMIC WEBSITE<br /> FOR YOU!</h1>
<h3 className="text-xl font-bold py-5 flex">LANDING PAGES <span className="ml-auto px-4">01</span></h3>
</CardHeader>
</Card>
<Card className="rounded-lg">
<CardHeader className="flex gap-2 p-8  ">
<h1 className="text-2xl">I WILL CREATE A FULLY <br /> FUNCTIONAL DYNAMIC WEBSITE <br />  FOR YOU!</h1>
<h3 className="text-xl font-bold py-5 flex">E-COMMERCE <span className="ml-auto px-4">02</span></h3>
</CardHeader>
</Card>
<Card className="rounded-lg">
<CardHeader className="flex gap-2 p-8  ">
<h1 className="text-2xl">I WILL CREATE A FULLY <br />FUNCTIONAL DYNAMIC WEBSITE<br /> FOR YOU!</h1>
<h3 className="text-xl font-bold py-5 flex">UI/UX DESIGN <span className="ml-auto px-4">03</span></h3>
</CardHeader>
</Card>
</MotionDiv>
)
}

function BookIcon(props) {
return (
<svg
{...props}
xmlns="http://www.w3.org/2000/svg"
width="24"
height="24"
viewBox="0 0 24 24"
fill="none"
stroke="currentColor"
strokeWidth="2"
strokeLinecap="round"
strokeLinejoin="round"
>
<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
</svg>
)
}


function CalendarIcon(props) {
return (
<svg
{...props}
xmlns="http://www.w3.org/2000/svg"
width="24"
height="24"
viewBox="0 0 24 24"
fill="none"
stroke="currentColor"
strokeWidth="2"
strokeLinecap="round"
strokeLinejoin="round"
>
<rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
<line x1="16" x2="16" y1="2" y2="6" />
<line x1="8" x2="8" y1="2" y2="6" />
<line x1="3" x2="21" y1="10" y2="10" />
</svg>
)
}


function LayoutGridIcon(props) {
return (
<svg
{...props}
xmlns="http://www.w3.org/2000/svg"
width="24"
height="24"
viewBox="0 0 24 24"
fill="none"
stroke="currentColor"
strokeWidth="2"
strokeLinecap="round"
strokeLinejoin="round"
>
<rect width="7" height="7" x="3" y="3" rx="1" />
<rect width="7" height="7" x="14" y="3" rx="1" />
<rect width="7" height="7" x="14" y="14" rx="1" />
<rect width="7" height="7" x="3" y="14" rx="1" />
</svg>
)
}


function UserIcon(props) {
return (
<svg
{...props}
xmlns="http://www.w3.org/2000/svg"
width="24"
height="24"
viewBox="0 0 24 24"
fill="none"
stroke="currentColor"
strokeWidth="2"
strokeLinecap="round"
strokeLinejoin="round"
>
<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
<circle cx="12" cy="7" r="4" />
</svg>
)
}

