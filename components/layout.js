import Head from 'next/head'
import Link from 'next/link'
import styles from './layout.module.css'

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=La+Belle+Aurore&display=swap" rel="stylesheet"></link>
            </Head>
            <header className={styles.header}>
                <div className={styles.titleContainer}>
                    <h1 className={styles.title}>
                        <Link href="/"><a className={styles.titleLink}><p className={styles.green}>parl</p><p className={styles.white}>ital</p><p className={styles.red}>iano</p></a></Link>
                    </h1>
                </div>
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                <Link href="/">
                    <a>← Back to home</a>
                </Link>
                </div>
            )}
            <hr className={styles.hr}/>
            <footer><p className={styles.footerText}>Made with <Link href="https://nextjs.org"><a>Next.js</a></Link></p></footer>
        </div>
    )
}