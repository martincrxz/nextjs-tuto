import Head from 'next/head'
import Header from '../components/header'
import Layout from '../components/layout'

export default function About() {
  return (
    <div>
      <Head>
        <title>parlitaliano | About</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=La+Belle+Aurore&display=swap" rel="stylesheet"></link>
      </Head>

      <main>
        <Layout>
          <Header>
          </Header>
          <h2 className="subtitle">Informazione su questa pagina</h2>
          <p className="text">In questo sitio web voi potete trovare picole lezioni di italiano per practicare la lingua di una forma facile e piacevole.</p>
        </Layout>
      </main>

      <style jsx>{`
        .subtitle {
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            font-size: 36px;
            text-align: center;
            font-weight: normal;
        }

        .text {
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
            text-align: center;
            max-width: 48em;
            margin: 3em auto 0;
            font-size: 18px;
        }
      `}</style>
    </div>
  )
}
