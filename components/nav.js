import Link from 'next/link'

export default function() {
    return (
        <nav>
          <ul id='main-menu'>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/about"><a>About</a></Link></li>
            <li><Link href="/classes"><a>Classes</a></Link></li>
            <li><Link href="/contact"><a>Contact</a></Link></li>
          </ul>
        </nav>
    )
}