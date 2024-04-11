import Link from "next/link"
import Image from "next/image"
import { MotionDiv } from "./MotionDiv"


export function HeroSection() {

  return (
    <section className="w-full py-10">
      <MotionDiv
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          delay:0.2,
          ease: "easeInOut",
          duration: 1,
        }}
        className="container px-4 mx-auto md:px-6"
      >
        <div className="grid items-center gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center gap-8">
            <div className="flex flex-col gap-10">
              <h1 className="text-6xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Elevate Your Online Presence
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                At WebWorks, we're passionate about crafting standout websites that make an impact. Based in India, our small team specializes in creating user-friendly designs to help your business shine online. Let's work together to boost your digital presence and attract more customers.
              </p>
            </div>
            <div className="flex flex-col gap-6 min-[400px]:flex-row">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#projects"
              >
                Projects
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 text-white dark:border-gray-800"
                href="/contact"
              >
               Start Project  <Arrowright className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <Image src={`/robotimag.png`} alt="{alt}" width="600" height="600" className="rounded-xl sm:hidden lg:none" />
          <iframe src='https://my.spline.design/robot4legslightcopy-ce5a123f4f5e4c0df8b0022a7fe778a8/' className="rounded-xl hidden lg:block" frameBorder='0' width='100%' height='700vh'></iframe>
        </div>
      </MotionDiv>
    </section >
  )
}
function Arrowright(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
    </svg>

  )
}
