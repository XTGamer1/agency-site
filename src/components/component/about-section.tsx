
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import Link from "next/link"
import { MotionDiv } from "./MotionDiv"
import { Button } from "../ui/button"

export function AboutSection() {
  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        delay: 0.2,
        ease: "easeInOut",
        duration: 1,
      }} className="w-full max-w-8xl mx-auto container pb-12 p-2"
      id="about">
      <Card>
        <div
          className="grid gap-4 p-4 md:grid-cols-2"
        >
          <CardHeader className="border-b md:border-b-0 pb-0 md:pb-0">
            <CardTitle className="text-4xl">Enhancing the web through <br />
              elevated tech and designs</CardTitle>
            <CardDescription>The future of hybrid frontend development</CardDescription>
          </CardHeader>
          <CardContent className="pt-6 md:pt-0">
            <div className="grid gap-4">
              <p className="text-gray-500 text-3xl  ">
                Based in India, we are a web design/development agency dedicated to transforming brands by assisting their growth of online presence through websites.
              </p>
              <Link href="/team">
              <Button size="lg"  className= " p-5 text-white bg-black">Start Project  <Arrowright className="w-4 h-4" /></Button>
              </Link>
            </div>
          </CardContent>
        </div>
        <CardFooter className="flex justify-end p-6">
        </CardFooter>
      </Card>
    </MotionDiv>
  )
}

function Arrowright(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
    </svg>

  )
}
