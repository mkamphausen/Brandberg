import Head from 'next/head'
import styles from '../styles/Search.module.css'

export default function Home() {
  return (
   <div>
     <Head>
        <title>Der Brandberg</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p>Durchsuche die Datenbank nach </p>

      <div className={styles.search_bar}>
        <select name="prop1" id="prop1">
          <option value=""> -- Please choose an prop1</option>
          <option value="a">a</option>
          <option value="b">b</option>
          <option value="c">c</option>
          <option value="d">d</option>
          <option value="e">e</option>
        </select>
        
        <select name="prop2" id="prop2">
          <option value=""> -- Please choose an prop2</option>
          <option value="a">a</option>
          <option value="b">b</option>
          <option value="c">c</option>
          <option value="d">d</option>
          <option value="e">e</option>
        </select>
        <input type="text" placeholder="search..."/>
      </div>

     <p>🚧  Hier kannst Du bald die Datenbank durchstöbern 🔍 🚧</p>
     
   </div>
  )
}