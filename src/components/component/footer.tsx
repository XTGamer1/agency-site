"use client";

import Link from "next/link"
import { MotionDiv } from "./MotionDiv";

export function Footer() {
  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        delay: 0.2,
        ease: "easeInOut",
        duration: 1,
      }} >
    <footer className="bg-white rounded-lg shadow m-4">
      <div className="p-8">
        <div className="lg:flex">
          <a href="mail:pixelblaze@proton.me">
          <h3 className="bg-black text-white px-5 py-2 mb-12 rounded-lg mr-auto text-xl">pixelblaze@proton.me</h3>
          </a>
          <h3 className="text-3xl pt-3 ml-auto">START BUILDING?</h3>
        </div>
        <div className="hidden lg:block">
          <h1><span style={{
            color: 'Black',
            fontSize: 200,
            padding: 0,
          }}> PIXELBLAZE.CO</span></h1>
        </div>
        <div className="lg:hidden">
          <h1><span className="text-4xl"> PIXELBLAZE.CO</span></h1>
        </div>
      </div>
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024 <a href="/" className="hover:underline">PixelBlaze</a>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
          <Link href="/Terms-Conditions"
              className="hover:underline me-4 md:me-6">Terms
            </Link>
          </li>
          <li>
          <Link href="/privacy"
              className="hover:underline me-4 md:me-6">Privacy
            </Link>
          </li>
          <li>
            <Link href="/contact"
              className="hover:underline me-4 md:me-6">Contact
            </Link>
          </li>
          <li>
          <Link href="/team"
              className="hover:underline me-4 md:me-6">Team
            </Link>
          </li>
        </ul>
      </div>
    </footer>
    </MotionDiv>
  )
}

function FlagIcon(props) {
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
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  )
}
