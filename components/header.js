import Link from 'next/link'
import styles from './header.module.css'

export default function Header() {
    return (
    <header className={styles.header}>
        <div className={styles.container}>
            <h1 className={styles.title}>
                <Link href="/"><a className={styles.title_link}><p className={styles.green}>parl</p><p className={styles.white}>ital</p><p className={styles.red}>iano</p></a></Link>
            </h1>
            <nav className={styles.nav}>
            <ul className={styles.nav_ul}>
                <li className={styles.nav_li}><Link href="/"><a className={styles.nav_link}>Home</a></Link></li>
                <li className={styles.nav_li}><Link href="/about"><a className={styles.nav_link}>About</a></Link></li>
                <li className={styles.nav_li}><Link href="/classes"><a className={styles.nav_link}>Classes</a></Link></li>
                <li className={styles.nav_li}><Link href="/contact"><a className={styles.nav_link}>Contact</a></Link></li>
            </ul>
            </nav>
        </div>
    </header>
    )
}