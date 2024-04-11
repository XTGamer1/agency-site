/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/D8Yt3Fg8rED
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/
import Link from "next/link"
import { MotionDiv } from "./MotionDiv"

export function Projects() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="projects">
      <MotionDiv
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.2,
          ease: "easeInOut",
          duration: 1,
        }} className="container px-4 grid items-center justify-center gap-4 text-center md:px-6 lg:gap-10 mx-auto">
        <div className="space-y-3">
          {/* <h2 className="text-3xl font-bold item-start text-start tracking-tighter sm:text-4xl md:text-5xl">Projects</h2> */}
          <h1 className="text-6xl item-start text-start">Projects</h1>
          <p className=" max-w-[600px] item-start text-start  text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Here are some of the projects I've been working on.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6 xl:gap-8">
          <div className="relative group rounded-lg overflow-hidden shadow-inset">
            <img
              alt="Project"
              className="aspect-[2/1] object-cover object-center transition-transform group-hover:scale-105"
              height="400"
              src="carousel-image-1.jpg"
              width="800"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 gap-2 opacity-0 transition-opacity group-hover:opacity-100 hover:text-white hover:bg-black ">
              <h3 className="text-2xl font-bold hover:bg-black  hover:text-white">
                Project Title
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Description of the project.</p>
              <Link
                className="inline-flex h-8 items-center rounded-md border border-gray-200 bg-white text-white px-4 text-xs font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:border-gray-800"
                href="#"
              >
                View Project
              </Link>
            </div>
          </div>
          <div className="relative group rounded-lg overflow-hidden shadow-inset">
            <img
              alt="Project"
              className="aspect-[2/1] object-cover object-center transition-transform group-hover:scale-105"
              height="400"
              src="carousel-image-1.jpg"
              width="800"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 gap-2 opacity-0 transition-opacity group-hover:opacity-100 hover:text-white hover:bg-black ">
              <h3 className="text-2xl font-bold hover:bg-black  hover:text-white">
                Project Title
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Description of the project.</p>
              <Link
                className="inline-flex h-8 items-center rounded-md border border-gray-200 bg-white text-white px-4 text-xs font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:border-gray-800"
                href="#"
              >
                View Project
              </Link>
            </div>
          </div>
          <div className="relative group rounded-lg overflow-hidden shadow-inset">
            <img
              alt="Project"
              className="aspect-[2/1] object-cover object-center transition-transform group-hover:scale-105"
              height="400"
              src="carousel-image-1.jpg"
              width="800"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 gap-2 opacity-0 transition-opacity group-hover:opacity-100 hover:text-white hover:bg-black ">
              <h3 className="text-2xl font-bold hover:bg-black  hover:text-white">
                Project Title
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Description of the project.</p>
              <Link
                className="inline-flex h-8 items-center rounded-md border border-gray-200 bg-white text-white px-4 text-xs font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:border-gray-800"
                href="#"
              >
                View Project
              </Link>
            </div>
          </div>
          <div className="relative group rounded-lg overflow-hidden shadow-inset">
            <img
              alt="Project"
              className="aspect-[2/1] object-cover object-center transition-transform group-hover:scale-105"
              height="400"
              src="carousel-image-1.jpg"
              width="800"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 gap-2 opacity-0 transition-opacity group-hover:opacity-100 hover:text-white hover:bg-black ">
              <h3 className="text-2xl font-bold hover:bg-black  hover:text-white">
                Project Title
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Description of the project.</p>
              <Link
                className="inline-flex h-8 items-center rounded-md border border-gray-200 bg-white text-white px-4 text-xs font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:border-gray-800"
                href="#"
              >
                View Project
              </Link>
            </div>
          </div>
        </div>
      </MotionDiv>
    </section>
  )
}
