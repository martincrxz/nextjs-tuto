import Head from 'next/head'
import Header from '../components/header'
import Layout from '../components/layout'

export default function Home() {
  return (
    <div>
      <Head>
        <title>parlitaliano | Home</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=La+Belle+Aurore&display=swap" rel="stylesheet"></link>
      </Head>

      <main>
        <Layout>
          <Header>
          </Header>
          <h2 className="subtitle">Imparare l'italiano puoi essere molto facile!</h2>
        </Layout>
      </main>

      <style jsx>{`
        .subtitle {
          font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
          font-size: 36px;
          text-align: center;
          font-weight: normal;
        }
      `}</style>
    </div>
  )
}
