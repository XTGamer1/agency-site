import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-[50vh] py-12 px-4 text-center md:py-24">
      <div className="space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tighter">404</h1>
        <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          The page you were looking for does not exist.
        </p>
      </div>
      <Link
        className="inline-flex items-center rounded-md border border-gray-200 border-gray-200 bg-white px-6 py-3 text-white text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
        href="/"
      >
        Go back
      </Link>
    </div>
  )
}