import Head from '../components/head'
import Nav from '../components/nav'

export default function About() {
    return (
    <div className="container">
        {Head()}
        <main>
            {Nav()}
            <h1>About</h1>
        </main>
    </div>)
}