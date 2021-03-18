import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home({ data, count, disjointed, djCount }) {
  return (
    <div>
      <Head>
        <title>Der Brandberg</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div class="pic_container">
        <img className="" src="https://upload.wikimedia.org/wikipedia/en/6/6e/Hannibal_Lecter_in_Silence_of_the_Lambs.jpg"/>
        <p>"I like my bodyparts disjointed!"</p>
      </div>

      <h2>{count}</h2>
      <h3>davon disjointed: {djCount}</h3>
      {/*data.map((row) => (
          <p>{row.Site}</p>
      )) */}

      {disjointed.map((row) => (
        <p>
          {row.Site} ({row.Subject}): {row.Disjointed_Body_Parts}
        </p>
      ))}

      <p>🚧 Hier entsteht eine Seite über den Brandberg 🏠 🚧</p>
    </div>
  );
}

export async function getStaticProps() {
  
  const res = await fetch(
    "http://localhost:3000/api/data"
  );
  const {data, count} = await res.json();

  const disjointed = data.filter((row) => row.Disjointed_Body_Parts == true);

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      data,
      count,
      disjointed,
      djCount: disjointed.length
    },
  };
}
