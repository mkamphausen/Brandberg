import Head from 'next/head'
import styles from '../styles/About.module.css'

export default function Home() {
  return (
   <div>
     <Head>
        <title>Der Brandberg</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <p>🚧  Hier gibts bald mehr Infos über den Brandberg 📑 🚧</p>

     <div className={styles.info_container}>
       <div>
        <h1>Lorem ipsum</h1>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
       </div>
        <img src="https://picsum.photos/400" alt="placeholder"/>
     </div>

     <div className={styles.info_container}>
      <img src="https://picsum.photos/400" alt="placeholder"/>
       <div>
        <h1>Lorem ipsum</h1>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
       </div>
     </div>

     <div className={styles.info_container}>
       <div>
        <h1>Lorem ipsum</h1>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
       </div>
        <img src="https://picsum.photos/400" alt="placeholder"/>
     </div>
  
   </div>
  )
}