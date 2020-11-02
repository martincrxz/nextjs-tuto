import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'

export default function Home() {
  return (
    <div className="container">
      {Head()}

      <main>
        <header>
          <div className="header-container">
            <h1 className="title">
              <Link href="/"><a><p className="green">parl</p><p className="white">ital</p><p className="red">iano</p></a></Link>
            </h1>
            {Nav()}
          </div>
        </header>
      </main>

      <style jsx>{` 
        .title {
          font-family: 'La Belle Aurore', cursive;
        }

        .header-container {
          width: 60%;
          text-align: center;
          margin: auto
        }

        header a {
          text-decoration: none;
        }

        a p.green {
          display: inline;
          color: green;
          text-decoration: none;
          margin: 0;
          padding: 0;
          text-shadow: 2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;
        }

        a p.white {
          display: inline;
          color: white;
          text-decoration: none;
          margin: 0;
          padding: 0;
          text-shadow: 2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;
        }

        a p.red {
          display: inline;
          color: red;
          text-decoration: none;
          margin: 0;
          padding: 0;
          text-shadow: 2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        header {
          width: 100%;
          height: 55px;
          margin: 0;
          padding: 0;
          background-color: #ffffff
        }

        header h1 {
          float: left;
          margin: 0;
          padding: 0
        }

        nav ul {
          float: right;
          margin-top: 20px
        }

        nav ul li {
          display: inline;
          list-style-type: none;
          margin: 0 10px 0 10px;
          padding: 0 10px 0 10px
        }

        nav ul li a {
          text-decoration: none;
          font-weight: bold;
          color: #777777;
          transition: color 0.4s
        }

        nav ul li a:hover {
          text-decoration: none;
          color: red
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
