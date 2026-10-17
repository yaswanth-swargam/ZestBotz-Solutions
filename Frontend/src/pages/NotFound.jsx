import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <main className="min-h-[75vh] flex items-center justify-center bg-white px-6 py-20 text-[#111111]">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E8590C]">
          404 Error · Page Not Found
        </p>

        <h1 className="mt-4 font-serif text-5xl font-bold tracking-tight text-[#111111] sm:text-6xl">
          Looks like this workflow took a <span className="text-[#E8590C]">wrong turn.</span>
        </h1>

        <p className="mt-6 text-base leading-7 text-[#555555] sm:text-lg">
          The page you are looking for doesn't exist, has been moved, or the link may be broken. Let’s get you back on track.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-[#E8590C] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#c94b08]"
          >
            Back to Homepage
          </Link>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white px-7 py-3.5 text-sm font-semibold text-[#111111] transition-all hover:border-[#E8590C] hover:text-[#E8590C]"
          >
            Explore Services
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white px-7 py-3.5 text-sm font-semibold text-[#111111] transition-all hover:border-[#E8590C] hover:text-[#E8590C]"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </main>
  )
}

export default NotFound
