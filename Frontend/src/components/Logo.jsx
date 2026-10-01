import { Link } from 'react-router-dom'

export function Logo({ inverted = false }) {
  return (
    <Link to="/" className="inline-flex items-center gap-2.5" aria-label="ZestBotz home">
      <span
        className="flex h-8 w-8 items-center justify-center rounded-md bg-brand text-sm font-semibold text-white"
        aria-hidden="true"
      >
        Z
      </span>
      <span className={`text-[17px] font-semibold tracking-tight ${inverted ? 'text-white' : 'text-ink'}`}>
        ZestBotz
      </span>
    </Link>
  )
}
